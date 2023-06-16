<template>
  <MainContent :title="'首页'" :headerVisible="false" :mainContentStyle="{}" :bodyStyle="{}">
    <div class="home">
      <div class="home-left">
        <div class="home-left-card">
          <div class="home-left-card-header">近7天数据</div>
          <div class="home-left-card-body">
            <div class="label">4522,958单</div>
            <v-chart :option="chartOptions1" class="chart" :autoresize="true"/>
          </div>
        </div>

        <div class="home-left-card home-left-card-margin-top">
          <div class="home-left-card-header">近1月数据</div>
          <div class="home-left-card-body">
            <div class="label">5522,358单</div>
            <v-chart :option="chartOptions2" class="chart" :autoresize="true"/>
          </div>
        </div>

        <div class="home-left-card home-left-card-margin-top">
          <div class="home-left-card-header">近1年数据</div>
          <div class="home-left-card-body">
            <div class="label">15522,358单</div>
            <v-chart :option="chartOptions3" class="chart" :autoresize="true"/>
          </div>
        </div>
      </div>

      <div class="home-center">
        <div class="home-center-card">
          <div class="home-center-card-header">近1年轨迹分析数据</div>
          <div class="home-center-card-body">
            <v-chart :option="chartOptions6" class="chart" :autoresize="true"/>
          </div>
        </div>
      </div>

      <div class="home-right">
        <div class="home-right-card">
          <div class="home-right-card-header">近1年走势数据</div>
          <div class="home-right-card-body">
            <v-chart :option="chartOptions4" class="chart" :autoresize="true"/>
          </div>
        </div>

        <div class="home-right-card home-left-card-margin-top">
          <div class="home-right-card-header">近1年对比数据</div>
          <div class="home-right-card-body">
            <v-chart :option="chartOptions5" class="chart" :autoresize="true"/>
          </div>
        </div>
      </div>
    </div>
  </MainContent>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { registerMap, use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import {
  MapChart,
  PieChart,
  LineChart,
  LinesChart,
  BarChart,
  EffectScatterChart,
  ScatterChart
} from 'echarts/charts'

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent,
  GraphicComponent,
  VisualMapComponent
} from 'echarts/components'
import VChart from 'vue-echarts'

use([
  VisualMapComponent,
  BarChart,
  PieChart,
  CanvasRenderer,
  GraphicComponent,
  MapChart,
  LineChart,
  LinesChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent,
  EffectScatterChart,
  ScatterChart
])


const chartOptions1 = ref({
  grid: {
    left: '1%',
    right: '1%',
    top: '1%',
    bottom: '1%'
  },
  tooltip: {
    trigger: 'axis',
    triggerOn: 'mousemove'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisTick: {
      show: false
    },
    axisLine: {
      show: true,
      lineStyle: { color: 'rgba(100,100,100,0.35)' }
    },
    splitLine: {
      show: true,
      lineStyle: { color: 'rgba(100,100,100,0.35)' }
    },
    axisLabel: {
      show: false
    }
  },
  yAxis: [
    {
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: { color: 'rgba(100,100,100,0.35)' }
      },
      splitLine: {
        show: true,
        lineStyle: { color: 'rgba(100,100,100,0.35)' }
      },
      axisLabel: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '7天数据',
      type: 'line',
      smooth: true,
      showSymbol: false,
      data: [50, 10, 22, 43, 36, 99],
      itemStyle: {
        normal: {
          color: '#006CFF'
        }
      },
      lineStyle: {
        normal: {
          width: 2
        }
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#006affb6'
            },
            {
              offset: 1,
              color: '#006aff15'
            }
          ],
          globalCoord: false
        }
      }
    }
  ]
})

const chartOptions2 = ref({
  grid: {
    left: '1%',
    right: '1%',
    top: '1%',
    bottom: '1%'
  },
  tooltip: {
    trigger: 'axis',
    triggerOn: 'mousemove'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisTick: {
      show: false
    },
    axisLine: {
      show: true,
      lineStyle: { color: 'rgba(100,100,100,0.35)' }
    },
    splitLine: {
      show: true,
      lineStyle: { color: 'rgba(100,100,100,0.35)' }
    },
    axisLabel: {
      show: false
    }
  },
  yAxis: [
    {
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: { color: 'rgba(100,100,100,0.35)' }
      },
      splitLine: {
        show: true,
        lineStyle: { color: 'rgba(100,100,100,0.35)' }
      },
      axisLabel: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '1月数据',
      type: 'line',
      smooth: true,
      showSymbol: false,
      data: [150, 130, 22, 43, 86, 19],
      itemStyle: {
        normal: {
          color: '#55d6ba'
        }
      },
      lineStyle: {
        normal: {
          width: 2
        }
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#55d6bad5'
            },
            {
              offset: 1,
              color: '#55d6ba10'
            }
          ],
          globalCoord: false
        }
      }
    }
  ]
})

const chartOptions3 = ref({
  grid: {
    left: '1%',
    right: '1%',
    top: '1%',
    bottom: '1%'
  },
  tooltip: {
    trigger: 'axis',
    triggerOn: 'mousemove'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisTick: {
      show: false
    },
    axisLine: {
      show: true,
      lineStyle: { color: 'rgba(100,100,100,0.35)' }
    },
    splitLine: {
      show: true,
      lineStyle: { color: 'rgba(100,100,100,0.35)' }
    },
    axisLabel: {
      show: false
    }
  },
  yAxis: [
    {
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: { color: 'rgba(100,100,100,0.35)' }
      },
      splitLine: {
        show: true,
        lineStyle: { color: 'rgba(100,100,100,0.35)' }
      },
      axisLabel: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '1年数据',
      type: 'line',
      smooth: true,
      showSymbol: false,
      data: [1350, 300, 1612, 533, 1286, 1889],
      itemStyle: {
        normal: {
          color: '#f5a03d'
        }
      },
      lineStyle: {
        normal: {
          width: 2
        }
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#f59f3dce'
            },
            {
              offset: 1,
              color: '#f59f3d17'
            }
          ],
          globalCoord: false
        }
      }
    }
  ]
})

const xLabel = [
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月'
]
const dataValue = [510, 465, 440, 570, 480, 615]
const dataValue1 = [
  ...new Array(dataValue.length - 1).fill('-'),
  dataValue[dataValue.length - 1],
  600,
  525,
  354,
  442,
  420,
  900
]
const chartOptions4 = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: 'rgb(126,199,255)'
      }
    },
    formatter: (params: any) => {
      let htmlStr = ''
      const valMap: any = {}
      for (let i = 0; i < params.length; i++) {
        const param = params[i]
        const xName = param.name //x轴的名称
        const seriesName = param.seriesName //图例名称
        const value = param.value //y轴值
        const color = param.color //图例颜色
        //过滤无效值
        if (!value || value === '-') {
          continue
        }

        //过滤重叠值
        if (valMap[seriesName] == value) {
          continue
        }

        if (i === 0) {
          htmlStr += xName + '<br/>' //x轴的名称
        }
        htmlStr += '<div>'
        //为了保证和原来的效果一样，这里自己实现了一个点的效果
        htmlStr +=
          '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' +
          color +
          ';"></span>'

        //圆点后面显示的文本
        htmlStr += seriesName + '：' + value

        htmlStr += '</div>'
        // 存储重复数据
        valMap[seriesName] = value
      }
      return htmlStr
    }
  },
  legend: {
    show: true,
    top: '10%',
    itemWidth: 30, // 图例标记的图形宽度。
    //   itemGap: 20, // 图例每项之间的间隔。
    itemHeight: 10, //  图例标记的图形高度。
    textStyle: {
      color: '#fff',
      fontSize: 14,
      padding: [0, 8, 0, 8]
    }
  },
  grid: {
    top: '10px',
    left: '50px',
    right: '20px',
    bottom: '40px'
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        //坐标轴轴线相关设置。数学上的x轴
        show: true,
        lineStyle: {
          color: 'rgba(100,100,100,0.5)'
        }
      },
      axisLabel: {
        //坐标轴刻度标签的相关设置
        textStyle: {
          color: 'rgba(100,100,100,5)',
          fontSize: 12
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: 'rgba(100,100,100,0.5)'
        }
      },
      axisTick: {
        show: false
      },
      data: xLabel
    }
  ],
  yAxis: [
    {
      name: '',
      nameTextStyle: {
        color: 'rgba(100,100,100,0.5)',
        fontSize: 12,
        padding: [0, 60, 0, 0]
      },
      // minInterval: 1,
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(100,100,100,0.5)',
          type: 'dashed'
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(100,100,100,0.5)'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: 'rgba(100,100,100,0.5)',
          fontSize: 12
        }
      },
      axisTick: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '现在',
      type: 'line',
      symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
      lineStyle: {
        width: 2,
          color: '#25c58b' // 线条颜色
      },
      itemStyle: {
        normal: {
          color: '#25c58b', //拐点颜色
          // borderColor: '#fff600',//拐点边框颜色
          // borderWidth: 13//拐点边框大小
          label: {
            show: true, //开启显示
            color: '#25c58b',
            position: 'top', //在上方显示
            formatter: (res: any) => {
              if (res.value) {
                return res.value
              } else {
                return 0
              }
            }
          }
        }
      },
      symbolSize: 8, //设定实心点的大小
      data: dataValue
    },
    {
      name: '未来',
      type: 'line',
      symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
      lineStyle: {
        width: 2,
          color: '#1f6fdc' // 线条颜色
      },
      itemStyle: {
        normal: {
          color: '#1f6fdc', //拐点颜色
          // borderColor: '#fff600',//拐点边框颜色
          // borderWidth: 13//拐点边框大小
          label: {
            show: true, //开启显示
            color: '#1f6fdc',
            position: 'top', //在上方显示
            formatter: (res: any) => {
              if (res.value) {
                return res.value
              } else {
                return 0
              }
            }
          },
          lineStyle: {
            type: 'dotted'
          }
        }
      },
      symbolSize: 8, //设定实心点的大小
      data: dataValue1
    }
  ]
})

const chartOptions5 = ref({
  title: {
    show: false
  },
  tooltip: {
    trigger: 'axis',
    borderWidth: 0,
    axisPointer: {
      type: 'shadow'
    },
    confine: true
  },
  grid: {
    top: '15px',
    left: '10px',
    right: '10px',
    bottom: '15px',
    containLabel: true
  },
  legend: {
    show:false
  },
  xAxis: {
    type: 'category',
    data: ['1', '2', '3', '4'],
    axisLine: {
      show: false,
      lineStyle: {
        color: 'rgba(100,100,100,0.35)'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: 'rgba(100,100,100,0.5)'
      }
    }
  },

  yAxis: {
    name: '数量',
    nameTextStyle: {
      color: '#000',
      fontSize: 14,
      fontWeight: 600,
      padding: [10, 0, 0, -30]
    },
    nameGap: 25, // 表现为上下位置
    type: 'value',
    //max:'5000',
    axisLine: {
      show: false,
      lineStyle: {
        color: 'rgba(100,100,100,0.35)'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(100,100,100,0.35)'
      }
    },
    axisLabel: {
      textStyle: {
        color: 'rgba(100,100,100,0.5)',
        fontSize: 12
      }
    }
  },
  series: [
    {
      name: '类型一',
      type: 'bar',
      barWidth: '8',
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#7E7CEB'
            },
            {
              offset: 1,
              color: '#79C7F3'
            }
          ],
          globalCoord: false
        }
      },
      data: [3000, 2000, 1500, 2500]
    },

    {
      name: '类型二',
      type: 'bar',
      barWidth: '8',
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#F98563'
            },
            {
              offset: 1,
              color: '#FBAC69'
            }
          ],
          globalCoord: false
        }
      },
      data: [4000, 3800, 4200, 3800]
    },

    {
      name: '类型三',
      type: 'bar',
      barWidth: '8',
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#13c2c2'
            },
            {
              offset: 1,
              color: '#87e8de'
            }
          ],
          globalCoord: false
        }
      },
      data: [2200, 2800, 3800, 2900]
    }
  ]
})

const chartOptions6 = ref({})

onMounted(()=>{
  
})
</script>

<style scoped lang="scss">
@import './Home.scss';
</style>
