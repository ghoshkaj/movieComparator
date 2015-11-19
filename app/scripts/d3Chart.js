/**
 * Created by kg on 6/10/15.
 */

angular.module('movieComparatorApp.directives', ['movieComparatorApp.d3'])
  .directive('d3Chart', ['d3Service', function(d3Service) {

    function setupPieChartOptions($attr, chart) {
      return {
        title: chart.meta.title,
        height: $attr.height,
        width: $attr.width,
        hAxis: {
          title: chart.meta.hAxis
        },
        vAxis: {
          title: chart.meta.vAxis
        },
        //legend: 'none',
        colors: ['#009D4E', '#21C16D', '#F37451', '#F9B6AE', '#55AADE', '#B7D3EF'],
        pieHole: 0.4,
        tooltip: {text: 'percentage'},
        chartArea: {
          top: 90,
          width: '90%',
          bottom: 2
        }
      };
    }

    function insertPercentChartData(value, chartName, data) {
      data=[];
      angular.forEach(value[chartName].meta.fields, function (row) {
        if (row.show && row.show === 'true') {
          var val = Math.round(row.val*100)/100; //round to nearest tenth
          data.push({'label':row.label, 'val': val});
        }
      });
      return data;
    }

    function fabricateData() {
      return [{'label':'Management', 'val': '40'},
            {'label':'Create', 'val': '25'},
            {'label':'Melinda', 'val': '20'},
            {'label':'John', 'val': '5'},
            {'label':'Hop', 'val': '10'}];
    }

    return {
      restrict: 'A',
      //scope: { data: '=' },
      link: function($scope, $elm, $attr) {

        d3Service.d3().then(function (d3) {

          var chartName = $elm[0].id;
          console.log(chartName);

            var data = fabricateData();

            //var chart = d3.select($elm[0])
            //.append('svg');

          function modifyChart(){
            svg
              .attr('width', width + margin.left + margin.right)
              .attr('height', height + margin.top + margin.bottom)
              .append('g')
              .attr('transform',
              'translate(' + margin.left + ',' + margin.top + ')');
          }

          //chart = modifyChart(chart);

          //function piechart(svg, data) {
            var margin = {top: 150, right: 50, bottom: 50, left: 50},
              width = 350 - margin.left - margin.right,
              height = 300 - margin.top - margin.bottom;


            //pie chart
            var color = d3.scale.category10();

            var svg = d3.select($elm[0])
              .append('svg')
              .attr('width', width + margin.left + margin.right)
              .attr('height', height + margin.top + margin.bottom)
              .append('g')
              .attr('transform',
              'translate(' + margin.left + ',' + margin.top + ')');


            var min = Math.min(width, height);
            //var svg = d3.select(element[0]).append('svg');
            var pie = d3.layout.pie()
              .value(function (d) {
                return d.val;
              })
              .sort(null);
            var arc = d3.svg.arc()
              .outerRadius(min / 1 * 0.9)
              .innerRadius(min / 1 * 0.4);

            svg.attr({width: width, height: height});

            var g = svg.append('g')
              .attr('transform', 'translate(' + (width / 2 - 70) + ',' + (height / 2 - 40) + ')');

            g.selectAll('path').data(pie(data))
              .enter().append('path')
              .style('stroke', 'white')
              .attr('d', arc)
              .attr('fill', function (d) {
                return color(d.data.label);
              });

            //legend
            var legendRectSize = 8;
            var legendSpacing = 4;

            var legend = svg.selectAll('.d3legend')
              .data(color.domain())
              .enter()
              .append('g')
              .attr('class', 'd3legend')
              .attr('transform', function (d, i) {
                var legendHeight = legendRectSize + legendSpacing;
                var offset = legendHeight * color.domain().length / 2;
                var horz = (width / 2 + 50);
                var vert = i * legendHeight - offset;

                return 'translate(' + horz + ',' + vert + ')';
              });


            //coloured blocks
            legend.append('rect')
              .attr('width', legendRectSize)
              .attr('height', legendRectSize)
              .style('fill', color)
              .style('stroke', color);

            //legend text
            legend.append('text')
              .attr('x', legendRectSize + legendSpacing)
              .attr('y', legendRectSize)
              .text(function (d) {
                return d;
              });
          })

          //piechart(chart, data);

          //})
      }
    }
  }]);
