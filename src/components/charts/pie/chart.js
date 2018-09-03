import echarts from 'echarts'

export default {
  data() {
    return {
      myChart: {}
    }
  },
  mounted() {
    // this.myChart = echarts.init(document.querySelector('.line'));
    this.myChart = echarts.init(document.querySelector('.pie-chart'));

    // オプションの設定
    var pieOption = {

      // グラフ要素の色(指定しなくても大丈夫です)
      color : ['rgba(0,0,0,0.52)','rgba(255,0,0,0.52)','rgba(0,0,255,0.52)','rgba(0,153,0,0.52)','rgba(255,255,0,0.52)'],

      // グラフタイトル
      title : {
        text: 'Pie-Chart',
        x:'center'
      },

      // カーソルを重ねた際の情報
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      // 凡例
      legend: {
        textStyle: {
          fontWeight: 'bolder',
          fontSize: 20,
        },
        orient : 'vertical',
        x : '75%',  // 位置を変更できます
        y : '20%',
        data: ['カレーライス','ハヤシライス','オムライス','チキンライス','タコライス']
      },

      // ツールボックス(他にも色々な機能がありますのでドキュメントを参照して下さい)
      toolbox: {
        show : true,
        x : 300,
        feature : {
          dataView : {
            show: true, 
            title: 'データの表示', 
            readOnly: false,
            lang: ['データの表示','閉じる','更新']
          },
          magicType : {
            show: true, 
            title: {  // デフォルトだと中国語なので日本語を設定
              pie : '円グラフ',
              funnel: 'ファネルチャート'
            },
            type: ['pie', 'funnel'],
            option: {
              funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'left',
                  max: 1548
              }
            }
          },
          restore : {show: true, title: '更新'},
          saveAsImage : {show: true, title: '画像保存'}
        }
      },

      // インタラクティブな操作を有効にする
      calculable : true,

      // データ
      series : [
        {
          name:'項目名',
          type:'pie', //グラフ指定
          data:[
            {value:335, name:'カレーライス'},
            {value:310, name:'ハヤシライス'},
            {value:234, name:'オムライス'},
            {value:135, name:'チキンライス'},
            {value:1548, name:'タコライス'}
          ]
        }
      ]
    };
    // オプションをインスタンスに適用
    this.myChart.setOption(pieOption); 
  }
}