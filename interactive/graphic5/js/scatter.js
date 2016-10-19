$(function () {
    $('#Container').highcharts({
        chart: {
            type: 'column',
            backgroundColor: '#353535',
             inverted: false

              },
              title: {
                text: 'Is VE the product of radical fundamentalists or a way to make Islam look bad?',
                style: {
                        fontFamily: 'museo sans',
                        color:'#fff'
                    }
              },
              subtitle: {
                text: 'Source: CSIS CVE | Mark Penn',
                style: {
                        fontFamily: 'museo sans',
                        color:'#fff'
                    }
              },
              credits: {
                text: 'CSIS/Beyond Parallel',
                href: 'https://beyondparallel.csis.org'
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
           color: "#fff"
       }
       },
       min: 0,
       max: 100,
       tickInterval: 10,
       lineWidth: 1,

  title: {
    text: 'Position (%)',
    style: {
           color: "#fff"
       }
  },

},
legend: {
  enabled: false,
  itemHoverStyle: {
          color: '#ffffff'
      },
itemStyle: {
          color: '#fff',
          fontWeight: 'light'
  },

},

        xAxis: {
 tickPosition: 'inside',
 tickWidth: 10,
          gridLineWidth: true,


          labels: {
    style: {
           color: "#fff"
       }
       },
    title: {
      enabled: true,
      text: 'Country',
      style: {
             color: "#fff"
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
            color:'rgba(101, 200, 205, 1)',
            data: [70, 61, 62, 47, 44,30,30,15]
        }, {
            name: 'Those who want to make Islam look bad',
            color:'rgba(229, 29, 38, 1)',
            data: [8, 5, 10, 10,9,43,48,55]

        }]
    });
});
