$(function() {
  Highcharts.setOptions({
      colors: ['#65c8cd', '#e51d26 ']
  });
  $('#hcContainer').highcharts({
    data: {
      googleSpreadsheetKey: '1UtV_MiBdbISiyxS5gZSiNoIPsiQ6rTGHcF57C69_N5g',
    },

      chart: {
        type: 'column',
        backgroundColor: '#ffffff',
        border: 'none',
        color: '#000',
        plotShadow: true
      },
      credits: {
        enabled: true,
        href: "#",
        text: 'CSIS CVE | Source: Mark Penn',
        style: {
          cursor: 'pointer',
          color: '#353535',
          fontSize: '10px'
        }
      },

      title: {
        enabled: false,
        text: "Violent Extremism Seen as a Major Problem in Most Countries",
        style: {
          color: '#ffffff',
          fontWeight: '500',
          fontSize:'24px',
          letterSpacing: '0.5px'
        }
      },
      subtitle: {
         enabled: false,
        text: 'Overall, around two-thirds see violent extremism as being a major problem in their country.',
        style: {
          color: '#ffffff',
        }
      },
      xAxis: {
        labels: {
          style: {
            color: '#ffffff',
            fontSize: '14px'
          }
        },
        categories: [ "Global", "Turkey", "Indonesia", "France", "India", "Egypt", "US","UK", "China" ],
        crosshair: true
      },
      yAxis: {
         gridLineWidth: 0,
        min: 0,
        labels: {
          enabled: true,
          style: {
            color: '#ffffff',
            fontSize: '14px'
          }
        },
        title: {
          text: null,
          style: {
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '16px'
          }
        }

      },
      tooltip: {
        backgroundColor: '#FFF',
        style: {
          color: '#000',
          fontWeight: 'bol'
        },
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      legend: {
        title: {
          text: 'Source<br/><span style="font-size: 9px; color: #666; font-weight: normal">(Click to hide)</span>',
          style: {
            fontStyle: 'italic',
            color: '#353535'
          }
        },
        align: 'left',
        verticalAlign: 'bottom',
        layout: 'horizontal',
        itemStyle: {
          color: '#353535'
        },
        itemHoverStyle: {
          color: '#353535'
        }
      },

    });
  });
