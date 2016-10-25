$(function () {

    $('#container').highcharts({

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1
        },


        title: {
            text: 'In Favor',
              align: 'center',
               x: 70
        },

        xAxis: {

            categories: ['Global', 'US', 'India', 'China', 'Turkey']
        },

        yAxis: {
            categories: ['Cracking down on criminal activities that help extremists raise money', 'Requiring all citizens and visitors to have ID cards', 'Asking the internet companies to shut down all content from radical extremist groups', 'Supporting community-led efforts in each country that counter extremists’ messaging and ideology', 'Teaching why violent extremism is wrong in every school'],
            title: null
        },

        colorAxis: {
            min: 0,
            minColor: '#ffffff',
            maxColor: '#0095AB',
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 100,
            symbolHeight: 150
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.series.xAxis.categories[this.point.x]  + '</b><br><b>' +
                    this.point.value + '</b>  % are in favor of <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
            }
        },

        series: [{
            name: 'Opposition',
            borderWidth: 0,
            data: [[0, 0, 92], [0, 1, 90], [0, 2, 90], [0, 3, 90], [0, 4, 92], [1, 0, 88], [1, 1, 82], [1, 2, 83], [1, 3, 87], [1, 4, 85], [2, 0, 90], [2, 1, 97], [2, 2, 90], [2, 3, 87], [2, 4, 91], [3, 0, 95], [3, 1, 96], [3, 2, 93], [3, 3, 94], [3, 4, 89], [4, 0, 92], [4, 1, 86], [4, 2, 86], [4, 3, 84], [4, 4, 90]],
            dataLabels: {
                enabled: true,
                color: '#353535'
            }
        }]

    });
});

$(function () {

    $('#container2').highcharts({

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1
        },


        title: {
            text: 'Oppose',
              align: 'center',
               x: 70
        },

        xAxis: {

            categories: ['Global', 'US', 'India', 'China', 'Turkey']
        },

        yAxis: {
            categories: ['Cracking down on criminal activities that help extremists raise money', 'Requiring all citizens and visitors to have ID cards', 'Asking the internet companies to shut down all content from radical extremist groups', 'Supporting community-led efforts in each country that counter extremists’ messaging and ideology', 'Teaching why violent extremism is wrong in every school'],
            title: null
        },

        colorAxis: {
            min: 0,
            minColor: '#ffffff',
            maxColor: '#353535',
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 100,
            symbolHeight: 150
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.series.xAxis.categories[this.point.x]  + '</b><br><b>' +
                    this.point.value + '</b>  % oppose <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
            }
        },

        series: [{
            name: 'Opposition',
            borderWidth: 0,
            data: [[0, 0, 8], [0, 1, 10], [0, 2, 10], [0, 3, 10], [0, 4, 10], [1, 0, 12], [1, 1, 18], [1, 2, 13], [1, 3, 15], [1, 4, 17], [2, 0, 10], [2, 1, 3], [2, 2, 13], [2, 3, 9], [2, 4, 10], [3, 0, 5], [3, 1, 4], [3, 2, 6], [3, 3, 11], [3, 4, 7], [4, 0, 7], [4, 1, 3], [4, 2, 5], [4, 3, 6], [4, 4, 9]],
            dataLabels: {
                enabled: true,
                color: '#353535'
            }
        }]

    });
});
