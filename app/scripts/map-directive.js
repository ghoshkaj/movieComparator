/**
 * Created by kajarighosh on 10/3/15.
 */
angular.module('movieComparatorApp.map.directive', ['movieComparatorApp.d3'])
  .directive('map', function() {
    return {
      restrict: 'A',
      template: '<svg></svg>',
      //template: '<div width=350px height=350px></div>',
      link: function (scope, elem, attr) {


        var nv_data =
          [{
            'key': '1/4 Mile Radius',
            'values': [{
              'key': 'Owner',
              'values': [{'x': '2000', 'y': 10000}, {'x': '2010', 'y': 70000}, {'x': '2020', 'y': 45445}]
            }, {
              'key': 'Renter',
              'values': [{'x': '2000', 'y': 20500}, {'x': '2010', 'y': 85000}, {'x': '2020', 'y': 23895}]
            }, {
              'key': 'Vacant',
              'values': [{'x': '2000', 'y': 15300}, {'x': '2010', 'y': 60000}, {'x': '2020', 'y': 24905}]
            }]
          },
            {
              'key': '1/2 Mile Radius',
              'values': [{
                'key': 'Owner',
                'values': [{'x': '2000', 'y': 38936}, {'x': '2010', 'y': 20739}, {'x': '2020', 'y': 38432}]
              }, {
                'key': 'Renter',
                'values': [{'x': '2000', 'y': 34453}, {'x': '2010', 'y': 12473}, {'x': '2020', 'y': 34582}]
              }, {
                'key': 'Vacant',
                'values': [{'x': '2000', 'y': 39089}, {'x': '2010', 'y': 28495}, {'x': '2020', 'y': 54899}]
              }]
            },
            {
              'key': '1 Mile Radius',
              'values': [{
                'key': 'Owner',
                'values': [{'x': '2000', 'y': 0.3}, {'x': '2010', 'y': 0.2}, {'x': '2020', 'y': 0.1}]
              }, {
                'key': 'Renter',
                'values': [{'x': '2000', 'y': 0.1}, {'x': '2010', 'y': 0.40}, {'x': '2020', 'y': 0.40}]
              }, {
                'key': 'Vacant',
                'values': [{'x': '2000', 'y': 0.3}, {'x': '2010', 'y': 0.2}, {'x': '2020', 'y': 0.1}]
              }]
            },
            {
              'key': '3 Mile Radius',
              'values': [{
                'key': 'Owner',
                'values': [{'x': '2000', 'y': 0.3}, {'x': '2010', 'y': 0.2}, {'x': '2020', 'y': 0.1}]
              }, {
                'key': 'Renter',
                'values': [{'x': '2000', 'y': 0.1}, {'x': '2010', 'y': 0.40}, {'x': '2020', 'y': 0.40}]
              }, {
                'key': 'Vacant',
                'values': [{'x': '2000', 'y': 0.3}, {'x': '2010', 'y': 0.2}, {'x': '2020', 'y': 0.1}]
              }]
            }];


        function verticalBars(data, rawSvg) {

          var fullData = data;

          var chart;

          var dataLegend = nv.models.legend()

            .key(function (d) {
              return d.key;
            })
            .updateState(true)
            .radioButtonMode(true)
            .color(['#444', '#444', '#444'])
            .width(300);


          var wrap = d3.select(rawSvg).selectAll('g.nv-legend').data([fullData]);
          var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-legend');

          wrap
            .transition().duration(500)
            .call(dataLegend);

          var series = wrap.selectAll('g.nv-series');
          dataLegend.dispatch.on('stateChange', function (e) {
            changeDataSeries(e)
          });

          function tooltip(key, title) {
            var tooltipString = '<table >' +
                //'<tr>'+'<th colspan="3">'+title+'</th>'+'</tr>'+
              '<tr>' + '<td>' + key.data.key + '</td>' +
              '<td class="legend-color-guide"><div style="background-color:' + key.color + ';"></div></td>' + '</tr>' +
              '<tr>' + '<td> Year: </td> <td>' + key.data.x + '</td>' + '</tr>' +
              '<tr>' + '<td> Population: </td> <td>' + key.data.y + '</td>' + '</tr>' + '</table>';
            // + '<tr>'+'<td colspan="3"> Households 1,2345</td>'+'</tr>'+'</table>';
            return tooltipString
          }


          var year1 = fullData[0].values[0].values[0].y + fullData[0].values[1].values[0].y + fullData[0].values[2].values[0].y;
          var year2 = fullData[0].values[1].values[0].y + fullData[0].values[1].values[0].y + fullData[0].values[1].values[0].y;
          var year3 = fullData[0].values[2].values[0].y + fullData[0].values[2].values[0].y + fullData[0].values[2].values[0].y;
          //var totalThree = fullData[0].values[3].values[0].y + fullData[0].values[3].values[1].y + fullData[0].values[3].values[2].y;
          console.log(fullData[0].values[2].values[0].x);
          console.log(year1);
          console.log(year2);
          console.log(year3);
          console.log(fullData[0]);

          var max = 300000;

          nv.addGraph({
            generate: function () {

              chart = nv.models.multiBarChart()
                //.stacked(true)
                .showControls(false)
                //.showControls(true)
                .showLegend(true)
                //.forceY([0,max])
              ;

              chart.yAxis
                .tickFormat(d3.format('s'))
                .axisLabel("Housing Units");

              //chart.yAxis.domain(function(d){return });



              chart.xAxis
                .axisLabel("Years");

              chart.tooltip.enabled(true);
              chart.tooltip.contentGenerator(function (key) {
                return tooltip(key, "Occupied Unit");
              });

              chart.legend.margin({top: 50, left:-20, bottom: 50});
              chart.legend.radioButtonMode(false);
              chart.legend.width(200);
              //chart.legend.rightAlign(options.legendAlignRight);

              chart.reduceXTicks(false);

              chart.dispatch.on('renderEnd', function () {
                console.log('Vertical Bar Chart Render Complete');
              });
              //      var svg = d3.select(rawSvg).datum(data) .style({ 'width': 350, 'height': 400 });
              //      svg.transition().duration(0).call(chart);
              //      return chart;
              //    }
              //  })
              //};

              d3.select(rawSvg)
                .style({'width': 350, 'height': 400})
                .datum(fullData[0].values)
                //.datum(data)
                .transition().duration(1200)
                .call(chart.forceY([0,max]));

              return chart;
            }
          });

          function redraw() {
            max = 600000;
            d3.select(rawSvg)
              .style({'width': 350, 'height': 400})
              .datum(data)
              //.datum(data)
              .transition().duration(1200)
              .call(chart.forceY([0, max]));
          }


          function changeDataSeries(e) {
            var series = e.disabled;
            console.log(series);
            var dataIndex = 0;
            for (var i = 0; i < series.length; i++) {
              if (series[i] === false) dataIndex = i;
            }

            console.log(dataIndex);

            data = fullData[dataIndex].values;

            console.log(data);

            max = 400000;
            redraw();
          }

        }

        var rawSvg = elem.find('svg')[0];
        verticalBars(nv_data, rawSvg);
      }
    }
  })
