$(function () {
    $('#Container').highcharts({
        chart: {
            type: 'column',
            backgroundColor: '#ffffff',
             inverted: false

              },
              title: {
                text: '',
                style: {
                        fontFamily: 'museo sans',
                        color:'#fff'
                    }
              },
              subtitle: {
                text: '',
                style: {
                        fontFamily: 'museo sans',
                        color:'#fff'
                    }
              },
              credits: {
                text: '',
                href: ''
              },
              yAxis: {
  plotLines: [{
            color: '#FF0000',
            width: 4,
            value: 0
        }],
   gridLineWidth: false,
  labels: {
    style: {
           color: "#353535"
       }
       },
       min: 0,
       max: 100,
       tickInterval: 10,
       lineWidth: 1,

  title: {
    text: 'Position (%)',
    style: {
           color: "#353535"
       }
  },

},
legend: {
  enabled: false,
  itemHoverStyle: {
          color: '#353535'
      },
itemStyle: {
          color: '#353535',
          fontWeight: 'light'
  },

},

        xAxis: {
 tickPosition: 'inside',
 tickWidth: 10,
          gridLineWidth: true,


          labels: {
    style: {
           color: "#353535"
       }
       },
    title: {
      enabled: true,
      text: 'Country',
      style: {
             color: "#353535"
         }
    },
            categories: ['US', 'UK', 'France', 'India', 'China','Turkey','Indonesia','Egypt']
        },
        credits: {
            enabled: false
        },
        tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b><br/>',
        valueSuffix: '%',
        shared: true
    },
        series: [{
            name: 'Radical Islamic Fundamentalists',
            color:'rgba(0, 149, 171, 1)',
            data: [70, 61, 62, 47, 44,30,30,15]
        }, {
            name: 'Those who want to make Islam look bad',
            color:'rgba(53, 53, 53, 1)',
            data: [8, 5, 10, 10,9,43,48,55]

        }]
    });
});
