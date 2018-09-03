import echarts from 'echarts'

export default {
  data() {
    return {
      chart: {}
    }
  },
  mounted() {
    // this.myChart = echarts.init(document.querySelector('.line'));
    this.chart = echarts.init(document.querySelector('.line-chart'));

    var option = {
        // title: {
        //     text: 'IMP'
        // },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // type: 'bar',
            x: 850,
            y: 10,
            data:[
              'IMP',
              'CV'
            ],
            textStyle: {
              color: 'white'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['1day','2day','3day','4day','5day','6day','7day'],
            axisLine: {
              onZero: false,
              lineStyle: {
                color: 'rgba(134, 134, 228, 0.3)',
                width: 0.5
              }
            },
            axisLabel: {
              textStyle: {
                color: 'white'
              }
            },
        },
        yAxis: {
            type: 'value',
            // name: 'IMP',
            symbol: 'circle',
            splitLine: {
              lineStyle: {
                width: 0.3
              }
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(134, 134, 228, 0.3)',
                width: '0.5'
              },
            },
            lineStyle: {
              normal: {
                color: 'white',
                width: '1px'
              }
            },
            axisLabel: {
              textStyle: {
                color: 'white'
              }
            },
            splitNumber: 4,
        },
        series: [
            {
                name:'IMP',
                type:'line',
                symbol: 'circle',
                symbolSize: 9,
                itemStyle: {
                  normal: {
                    color: '#00F9A9',
                  }
                },
                lineStyle: {
                  normal: {
                    width: 3,
                    color: '#00F9A9',
                  },
                },
                data:[120, 132, 101, 134, 90, 230, 210],
            },
            {
                name:'CV',
                type:'line',
                symbol: 'circle',
                symbolSize: 9,
                itemStyle: {
                  normal: {
                    color: '#9933CC',
                  }
                },
                lineStyle: {
                  normal: {
                    width: 3,
                    color: '#FF00FF',
                    // color: new echarts.graphic.LinearGradient(
                    //   0, 0, 0, 1,
                    //   [
                    //       {offset: 0, color: '#FF66FF'},
                    //       {offset: 0.5, color: '#9933FF'},
                    //       {offset: 1, color: '#FF99FF'}
                    //   ]
                    // )
                  }
                },
                data:[220, 182, 191, 234, 290, 330, 310]
            },
        ]
    };
  
    // オプションをインスタンスに適用
    this.chart.setOption(option); 
  }
}