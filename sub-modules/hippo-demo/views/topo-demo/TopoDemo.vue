<template>
  <div class="topo-box" ref="topoBoxRef">
    <svg class="topo" id="topo-graph-2023-6-27-17-32-59">
      <defs></defs>
      <g></g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref, onMounted } from 'vue'
import dagreD3 from 'dagre-d3'
import * as d3 from 'd3'
import topoData from './data'
import { useWindowResize,type  Dimensions  } from 'hippo-module-core'

const graph = ref<any>(null)
const graphSvg = ref<any>(null)
const graphZoom= ref<any>(null)
const tooltip = ref<any>(null)
const topoAnimationInterval = ref()
const topoBoxRef = ref()


const drawNode = () => {
  topoData.nodes.forEach((item: any) => {
    graph.value.setNode(item.id, {
      shape: 'diamond',
      style: 'fill:none',
      labelType: 'html',
      label: `
        <div style="position: relative;">
            <img src="${item.image}" style="width:100px;height:100px;pointer-events: all;"/>
        </div>
        <div style="font-size:1rem;color:#f5faff;text-align:center;">
          ${item.name}
        </div>
      `,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      width: 1,
      height: 1,
      rx: 0,
      ry: 0,
      id: item.id
    })
  })
}

const drawLine = () => {
  const color = '#187edd'

  topoData.lines.forEach((item: any, index: number) => {
    graph.value.setEdge(item.source, item.target, {
      minlen: 2,
      weight: 1,
      labelpos: 'l',
      lableoffset: 0,
      label: '',
      lineInterpolate: 'basis',
      class: `speed${item.speed}`,
      style: `stroke: ${color}; fill: none;
      stroke-width:${item.weight ? item.weight : 10};quarters: 0`,
      arrowheadStyle: `fill: none;stroke: none;stroke-width:0.1`,
      arrowhead: 'undirected',
      id: item.source + '-' + item.target,
      labelType: 'html',
      curve: d3.curveBasis,
      width: 85,
      height: 85,
      rx: 0,
      ry: 85
    })
  })
}

const drawLineAnimationPath = (svg: any) => {
  const edgePaths = svg.select('.edgePaths')

  edgePaths
    .selectAll('.edgePath')
    .nodes()
    .forEach((node: any, index: number) => {
      const nodeCls = node.getAttribute('class')
      let speed = 3
      if (nodeCls) {
        const clsList = nodeCls.split(' ')
        speed = parseFloat(clsList[1].replace('speed', ''))
      }

      const path2 = node.children[0].cloneNode(true)
      path2.id = 'path2' + index
      path2.style['stroke'] = '#75b1df'
      path2.style['stroke-width'] =
        parseFloat(path2.style['stroke-width']) - path2.style['stroke-width'] / 2
      path2.style['opacity'] = 0.85
      path2.style['cursor'] = 'pointer'

      path2.setAttribute('rx', 120)
      path2.setAttribute('ry', 120)
      node.appendChild(path2)

      const path = node.children[0].cloneNode(true)
      path.id = 'path' + index
      path.setAttribute('class', 'animationPath')
      path.setAttribute('data-speed', speed)
      path.style['stroke-dasharray'] = '5,15'
      path.style['stroke'] = '#187edd'
      path.style['stroke-miterlimit'] = 10
      path.style['stroke-width'] =
        parseFloat(path.style['stroke-width']) - path.style['stroke-width'] / 2.5
      path.style['stroke-linecap'] = 'round'
      path.style['cursor'] = 'pointer'

      path.setAttribute('rx', 120)
      path.setAttribute('ry', 120)

      node.appendChild(path)
    })

  var tmr = 0

  const funAnimation = () => {
    tmr++
    edgePaths
      .selectAll('.animationPath')
      .nodes()
      .forEach((item: any) => {
        if (tmr >= 888) {
          tmr = 1
        }
        const speed = parseFloat(item.getAttribute('data-speed'))
        let offset = tmr * speed

        item.style['stroke-dashoffset'] = -offset
      })
  }

  topoAnimationInterval.value = setInterval(funAnimation, 80)
}

const initEvent = (svg: any) => {
  svg.selectAll('g.edgeLabels').on('click', (e: any) => {
    console.info('label-click', e)
  })

  svg.selectAll('g.edgePath').on('click', (e: any, n: any) => {
    console.info('path-click', e)
  })

  svg
    .selectAll('g.node')
    .on('mouseover', (e: any, n: any) => {
      tipVisible(e, graph.value.node(n))
    })
    .on('mouseout', () => {
      tipHidden()
    })
    .on('click', (e: any, n: string) => {
      console.info('node-click', e)
    })
}

const createTooltip = () => {
  tooltip.value = d3
    .select('body')
    .append('div')
    .style('opacity', 0)
    .style('position', 'fixed')
    .style('font-size', '12px')
    .style('text-align', 'center')
    .style('background-color', 'rgba(117,117,223,0.8)')
    .style('border-radius', '3px')
    .style('box-shadow', '0px 0px 2px rgba(3, 21, 100,0.2) ')
    .style('padding', '8px')
    .style('z-index', '99999')
    .style('cursor', 'pointer')
    .style('display', 'none')
}

const tipHidden = () => {
  tooltip.value.transition().duration(300).style('opacity', 0).style('display', 'none')
}

const tipVisible = (event: any, obj: any) => {
  tooltip.value.transition().duration(300).style('opacity', 1).style('display', 'block')
  tooltip.value
    .html(
      `<div>
               ${obj.label}
        </div>`
    )
    .style('left', event.pageX + 2 + 'px')
    .style('top', event.pageY + 2 + 'px')
}

const getTopoBoxDimensions = () => {
  const boxWidth = topoBoxRef.value.clientWidth
  const boxHeight = topoBoxRef.value.clientHeight
  return {
    boxWidth,
    boxHeight
  }
}

const calcOptimalSize = () => {
  const { boxWidth, boxHeight } = getTopoBoxDimensions()
  const graphWidth = graph.value.graph().width
  const graphHeight = graph.value.graph().height

  let scale: any = 0.5
  while (true) {
    const newWidth = graphWidth * scale
    const newHeight = graphHeight * scale

    if (newWidth < boxWidth || newHeight < boxHeight) {
      scale += 0.7
    } else {
      scale -= 0.7
      break
    }
  }

  return scale
}

const zoomToFit = (svg: any, zoom: any) => {
  const { boxWidth, boxHeight } = getTopoBoxDimensions()
  const graphWidth = graph.value.graph().width
  const graphHeight = graph.value.graph().height

  const scale = calcOptimalSize()
  const xCenterOffset = (boxWidth - graphWidth * scale) / 2
  const yCenterOffset = (boxHeight - graphHeight * scale) / 2

  svg
    .transition()
    .call(
      zoom.transform,
      d3.zoomIdentity.translate(xCenterOffset, yCenterOffset).scale(scale),
      [0, 0]
    )
}

const initGraph = () => {
  graph.value = new dagreD3.graphlib.Graph({ compound: true })
    .setGraph({
      rankdir: 'RL',
      nodesep: 100,
      edgesep: 200,
      ranksep: 180,
      marginx: 0,
      marginy: 0
    })
    .setDefaultEdgeLabel(() => {
      return {}
    })
  initGraphRender()
}

const initGraphRender = () => {
  if (graph.value) {
    drawNode()
    drawLine()

    graphSvg.value = d3.select('#topo-graph-2023-6-27-17-32-59')
    const inner = graphSvg.value.select('g')

    graphZoom.value = d3.zoom().on('zoom', (e: any) => {
      inner.attr('transform', e.transform)
    })

    graphSvg.value.call(graphZoom.value)
    const render = new dagreD3.render()
    render(inner, graph.value)

    drawLineAnimationPath(graphSvg.value)
    zoomToFit(graphSvg.value, graphZoom.value)
    initEvent(graphSvg.value)
  }
}

useWindowResize({
    initExe: false,
    handle: (dimensions:Dimensions) => {
      zoomToFit(graphSvg.value, graphZoom.value)
    }
  })

onMounted(() => {
  initGraph()
  createTooltip()
})

onUnmounted(() => {
  if (topoAnimationInterval.value) {
    clearInterval(topoAnimationInterval.value)
  }
})
</script>

<style scoped lang="scss">
@import './TopoDemo.scss';
</style>
