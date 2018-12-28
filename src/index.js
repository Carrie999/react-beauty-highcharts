module.exports =  {
    doubleLine: function(config){
        return { 
            credits:{
                enabled: false // 禁用版权信息
            },
            chart: {
                width:'400',
                height:'400',
                type: 'area',
                backgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgba(14, 8, 55,1)'],
                        [1, 'rgba(14, 8, 55,1)']
                    ]
                },
            }, 
            title: {
                text: '',
                style: {
                    color: '#a6aed2',
                    font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
                }
            },
            xAxis: {
                categories: [
                    '10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30',
                    '15:00','15:30','16:00','16:30','16:30','17:00','17:30','18:00','18:30','19:00'
                ],
                labels: {
                    format: '{value} ',
                    style: {
                        color: '#746f95',
                        fontSize:'12px',
                        fontFamily:'微软雅黑'
                    }
                },
                maxPadding: 0.05,
                showLastLabel: true,
                // tickmarkPlacement:'on',
                
                tickColor:'#746f95',
                lineWidth: 1,
                lineColor: '#746f95',
                tickLength:5,
                minRange:5,
                tickInterval: 1, // 坐标轴刻度间隔为一星期
            },
            yAxis: {
                gridLineWidth:'0px',
                startOnTick: true,
                endOnTick: false,
                maxPadding: 0.35,
                title: {
                    text: null
                },
                labels: {
                    // format: '{value} m',
                    style: {
                        color: '#746f95',
                        fontSize:'12px',
                        fontFamily:'微软雅黑'
                    }
                },
                lineWidth: 1,
                lineColor: '#746f95'
            },
            legend: {
                itemStyle: {
                    font: '9pt Trebuchet MS, Verdana, sans-serif',
                    color: '#a6aed2'
                },
                itemHoverStyle:{
                    color: '#fff'
                }   
            },
            
            tooltip: {
                pointFormat: '{series.name}:  <b>{point.y:,.0f}</b>人'
            },
            plotOptions: {
                area: {
                    // pointStart: 1920,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                // data: [  110, 235, 369, 640,
                //        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                //        27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                //        26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                //        24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                //        22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                //        10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104],
                lineColor: '#b946ff',
                color:{
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                    stops: [
                        [0,  'rgba(152,60,210,0.8)'],
                        [1,   'rgba(65,25,90,0.35)']
                    ]
                },
                fillOpacity: 0.5,
                name: '进',
                marker: {
                    enabled: false
                },
                // threshold: null // 是否显示负数
            }, {
                // data: ,
                lineColor: '#68d5ee',
                color:{
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                    stops: [
                        [0, 'rgba(104,213,238,0.8)'],
                        [1, 'rgba(7,44,96,0.5)']
                    ]
                },
                
                fillOpacity: 0.5,
                name: '出',
                marker: {
                    enabled: false
                },
                threshold: null
            }]
        }
    },
    columns:function(){
        return { 
            credits:{
                enabled: false
            },
            chart: {
                type: 'column',
                backgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgb(14, 8, 55)'],
                        [1, 'rgb(14, 8, 55)']
                    ]
                },
            },
            title: {
                text: '月平均降雨量',
                style: {
                    color: '#a6aed2',
                    font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
                }
            },
            xAxis: {
                gridLineWidth:'0px',
                startOnTick: true,
                endOnTick: false,
                maxPadding: 0.35,
                categories: [
                    '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
                ],
                labels: {
                    format: '{value} ',
                    style: {
                        color: '#746f95',
                        fontSize:'12px',
                        fontFamily:'微软雅黑'
                    }
                },
                crosshair: true,
                lineWidth: 1,
                lineColor: '#746f95',
                tickLength:5,
                tickColor:'#746f95',
            },
            yAxis: {
                gridLineWidth:'0px',
                startOnTick: true,
                endOnTick: false,
                maxPadding: 0.35,
                min: 0,
                labels: {
                    format: '{value} ',
                    style: {
                        color: '#746f95',
                        fontSize:'12px',
                        fontFamily:'微软雅黑'
                    }
                },
                title: {
                    // 平均时长 (min)
                    text: '',
                    style: {
                        color: '#746f95',
                        fontSize:'12px',
                        fontFamily:'微软雅黑'
                    }
                },
                lineWidth: 1,
                lineColor: '#746f95'
            },
            tooltip: {
                // head + 每个 point + footer 拼接成完整的 table
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    borderWidth: 0
                }
            },
            legend: {
                itemStyle: {
                    font: '9pt Trebuchet MS, Verdana, sans-serif',
                    color: '#a6aed2'
                },
                itemHoverStyle:{
                    color: '#fff'
                }   
            },
            series: []
                
        }

    }
};
