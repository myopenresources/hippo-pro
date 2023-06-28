<template>
  <v-scale-screen
    :width="scaleScreenOptions.width"
    :height="scaleScreenOptions.height"
    :delay="scaleScreenOptions.delay"
    :boxStyle="scaleScreenOptions.boxStyle"
    style="position: relative; z-index: 1"
  >
    <svg class="topo" id="topo-graph-2023-6-27-17-32-59">
      <defs></defs>
      <g></g>
    </svg>
  </v-scale-screen>
</template>

<script setup lang="ts">
import { onUnmounted, ref, onMounted } from 'vue'
import VScaleScreen from 'v-scale-screen'
import dagreD3 from 'dagre-d3'
import * as d3 from 'd3'
import topoData from './data'

const graph = ref<any>(null)
const tooltip = ref<any>(null)
const topoAnimationInterval = ref()

const scaleScreenOptions = {
  width: 850,
  height: 410,
  delay: 100,
  boxStyle: {
    backgroundColor: 'transparent'
  }
}

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
        <div style="font-size:1.2rem;color:#f5faff;text-align:center;">
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
        parseFloat(path2.style['stroke-width']) - path2.style['stroke-width'] / 4
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
      path.style['stroke'] = '#2f80be'
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
    .style('opacity', 0.8)
    .style('position', 'absolute')
    .style('font-size', '12px')
    .style('text-align', 'center')
    .style('background-color', 'rgba(117,117,223,0.8)')
    .style('border-radius', '3px')
    .style('box-shadow', 'rgb(3, 21, 100) 0px 0px 2px')
    .style('padding', '10px')
    .style('z-index', '9999')
    .style('cursor', 'pointer')
    .style('display', 'none')
}

const tipHidden = () => {
  tooltip.value.transition().duration(400).style('opacity', 0).style('display', 'none')
}

const tipVisible = (event: any, obj: any) => {
  tooltip.value.transition().duration(400).style('opacity', 1).style('display', 'block')
  tooltip.value
    .html(
      `<div>
               ${obj.label}
        </div>`
    )
    .style('left', event.pageX + 10 + 'px')
    .style('top', event.pageY + 10 + 'px')
}

const calcOptimalSize = () => {
  const boxWidth = scaleScreenOptions.width
  const boxHeight = scaleScreenOptions.height
  const graphWidth = graph.value.graph().width
  const graphHeight = graph.value.graph().height

  let scale: any = 0.2
  while (true) {
    const newWidth = graphWidth * scale
    const newHeight = graphHeight * scale

    if (newWidth < boxWidth || newHeight < boxHeight) {
      scale += 0.3
    } else {
      scale -= 0.3
      break
    }
  }

  return scale
}

const zoomToFit = (svg: any, zoom: any) => {
  const boxWidth = scaleScreenOptions.width
  const boxHeight = scaleScreenOptions.height
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

    const svg = d3.select('#topo-graph-2023-6-27-17-32-59')
    const inner = svg.select('g')

    const zoom = d3.zoom().on('zoom', (e: any) => {
      inner.attr('transform', e.transform)
    })

    svg.call(zoom)
    const render = new dagreD3.render()
    render(inner, graph.value)

    drawLineAnimationPath(svg)
    zoomToFit(svg, zoom)
    initEvent(svg)
  }
}

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
