$(function() {
  Highcharts.setOptions({
      colors: ['#0faa91', '#0095AB', '#353535', '#61884D', '#C9AC4D']
  });
  $('#hcContainer').highcharts({
    data: {
      googleSpreadsheetKey: '1yKVWD4cef8FNAq2C5TpI1PW1mtPU5BoAOLpfANwtQEo',
    },

      chart: {
        type: 'column',
        backgroundColor: '#FFF',
        border: 'none',
        color: '#000',
        plotShadow: true
      },
      credits: {
        enabled: false,
        href: "#",
        text: 'CSIS CVE | Source: Mark Penn',
        style: {
          cursor: 'pointer',
          color: '#353535',
          fontSize: '10px'
        }
      },

      title: {
        text: "",
        style: {
          color: '#404041',
          fontWeight: '500',
          fontSize:'24px',
          letterSpacing: '0.5px'
        }
      },
      subtitle: {
        text: '',
        style: {
          color: '#353535',
        }
      },
      xAxis: {
        labels: {
          style: {
            color: '#000000',
            fontSize: '14px'
          }
        },
        categories: [ "Schools", "Mosques", "Home", "Online", "Friends", "All of the Above" ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        labels: {
          enabled: false,
          style: {
            color: '#000000',
            fontSize: '14px'
          }
        },
        title: {
          text: null,
          style: {
            color: '#772031',
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
            fontStyle: 'italic'
          }
        },
        align: 'left',
        verticalAlign: 'bottom',
        layout: 'horizontal',
        itemHoverStyle: {
          color: '#781F30'
        }
      },

    });
  });
