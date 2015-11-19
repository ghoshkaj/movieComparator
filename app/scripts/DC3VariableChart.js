///**
// * Created by kg on 6/12/15.
// */
//
//angular.module('movieComparatorApp.directives', ['movieComparatorApp.d3'])
//  //modified crimea trying to change
//  .directive('crimea', ['d3Service', function(d3Service) {
//    return {
//      restrict: 'A',
//      link: function (scope, element, attr) {
//        d3Service.d3().then(function (d3){
//
//          var w = 960,
//            h = 500,
//            p = [20, 50, 30, 20],
//            x = d3.scale.ordinal().rangeRoundBands([0, w - p[1] - p[3]]),
//            y = d3.scale.linear().range([0, h - p[0] - p[2]]),
//            z = d3.scale.ordinal().range(["lightpink", "darkgray", "lightblue"]),
//            parse = d3.time.format("%m/%Y").parse,
//            format = d3.time.format("%b");
//
//          var svg = d3.select("body").append("svg:svg")
//            .attr("width", w)
//            .attr("height", h)
//            .append("svg:g")
//            .attr("transform", "translate(" + p[3] + "," + (h - p[2]) + ")");
//
//
//          //date,wounds,other,disease
//          //5/1854,0,95,105
//          //6/1854,0,40,95
//          //7/1854,0,140,520
//          //8/1854,20,150,800
//          //9/1854,220,230,740
//          //10/1854,305,310,600
//          //11/1854,480,290,820
//          //12/1854,295,310,1100
//          //1/1855,230,460,1440
//          //2/1855,180,520,1270
//          //3/1855,155,350,935
//          //4/1855,195,195,560
//          //5/1855,180,155,550
//          //6/1855,330,130,650
//          //7/1855,260,130,430
//          //8/1855,290,110,490
//          //9/1855,355,100,290
//          //10/1855,135,95,245
//          //11/1855,100,140,325
//          //12/1855,40,120,215
//          //1/1856,0,160,160
//          //2/1856,0,100,100
//          //3/1856,0,125,90
//
//
//          //data = [
//          //  {
//          //    "date":"5/1854",
//          //    "wounds":0,
//          //    "other":95,
//          //    "disease":105
//          //  }
//          //
//          //];
//
//          //d3.json("data/fredHomePriceIndex-BOX.json", function (error, data) {
////            data.forEach(function (d) {
////              d.date = parseDate(d.date);
////              d.close = +d.close;
////            });
//
//
//          d3.csv("data/crimea.csv", function(crimea) {
//
//            // Transpose the data into layers by cause.
//            var causes = d3.layout.stack()(["wounds", "other", "disease"].map(function(cause) {
//              return crimea.map(function(d) {
//                return {x: parse(d.date), y: +d[cause]};
//              });
//
//              //data.forEach(function (d) {
//              //
//              //  d.x = d.date;
//              //  d.y = +d.wounds;
//              //
//              //
//              //
//              //})
//            }));
//
//            console.log("causes");
//            console.log(causes);
//
//
//            // Compute the x-domain (by date) and y-domain (by top).
//            x.domain(causes[0].map(function(d) { return d.x; }));
//            y.domain([0, d3.max(causes[causes.length - 1], function(d) { return d.y0 + d.y; })]);
//
//            // Add a group for each cause.
//            var cause = svg.selectAll("g.cause")
//              .data(causes)
//              .enter().append("svg:g")
//              .attr("class", "cause")
//              .style("fill", function(d, i) { return z(i); })
//              .style("stroke", function(d, i) { return d3.rgb(z(i)).darker(); });
//
//            // Add a rect for each date.
//            var rect = cause.selectAll("rect")
//              .data(Object)
//              .enter().append("svg:rect")
//              .attr("x", function(d) { return x(d.x); })
//              .attr("y", function(d) { return -y(d.y0) - y(d.y); })
//              .attr("height", function(d) { return y(d.y); })
//              .attr("width", x.rangeBand());
//
//            // Add a label per date.
//            var label = svg.selectAll("text")
//              .data(x.domain())
//              .enter().append("svg:text")
//              .attr("x", function(d) { return x(d) + x.rangeBand() / 2; })
//              .attr("y", 6)
//              .attr("text-anchor", "middle")
//              .attr("dy", ".71em")
//              .text(format);
//
//            // Add y-axis rules.
//            var rule = svg.selectAll("g.rule")
//              .data(y.ticks(5))
//              .enter().append("svg:g")
//              .attr("class", "rule")
//              .attr("transform", function(d) { return "translate(0," + -y(d) + ")"; });
//
//            rule.append("svg:line")
//              .attr("x2", w - p[1] - p[3])
//              .style("stroke", function(d) { return d ? "#fff" : "#000"; })
//              .style("stroke-opacity", function(d) { return d ? .7 : null; });
//
//            rule.append("svg:text")
//              .attr("x", w - p[1] - p[3] + 6)
//              .attr("dy", ".35em")
//              .text(d3.format(",d"));
//          });
//
//        })
//      }
//    }
//  }])
//  // crunchbase -- static stacked chart
//  // http://www.delimited.io/blog/2014/3/3/creating-multi-series-charts-in-d3-lines-bars-area-and-streamgraphs
//  .directive('stackedBarChart', ['d3Service', function(d3Service) {
//    return {
//      restrict: 'A',
//      link: function (scope, element, attr) {
//        d3Service.d3().then(function (d3){
//
//          var margin = {top: 20, right: 55, bottom: 30, left: 40},
//            width  = 350 - margin.left - margin.right,
//            height = 350  - margin.top  - margin.bottom;
//          var x = d3.scale.ordinal()
//            .rangeRoundBands([0, width], .1);
//          var y = d3.scale.linear()
//            .rangeRound([height, 0]);
//          //var color = d3.scale.ordinal()
//          //  .range(["#001c9c","#101b4d","#475003","#9c8305","#d3c47c"]);
//
//          //var color = d3.scale.category20c();
//
//
//          var color = d3.scale.ordinal()
//            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
//
//
//          var svg = d3.select("body").append("svg")
//            .attr("width",  width  + margin.left + margin.right)
//            .attr("height", height + margin.top  + margin.bottom)
//            .append("g")
//            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
//
//          //d3.csv("data/crunchbase-years.csv", function (error, data) {
//
//          //console.log(data);
//          //
//          //data = [
//          //  {
//          //    "year": "2020",
//          //    "1/4 Mile": 6705,
//          //    "1/2 Mile": 24890,
//          //    "1 Mile": 94083,
//          //    "3 Mile": 399328
//          //  },
//          //  {
//          //    "year": "2015",
//          //    "1/4 Mile": 5784,
//          //    "1/2 Mile": 21470,
//          //    "1 Mile": 81157,
//          //    "3 Mile": 344464
//          //  },
//          //  {
//          //    "year": "2010",
//          //    "1/4 Mile": 4916,
//          //    "1/2 Mile": 18250,
//          //    "1 Mile": 68983,
//          //    "3 Mile": 292794
//          //  },
//          //  {
//          //    "year": "2000",
//          //    "1/4 Mile": 3239,
//          //    "1/2 Mile": 12023,
//          //    "1 Mile": 45448,
//          //    "3 Mile": 192900
//          //  }
//          //];
//
//          data = [
//            {
//              "year": "2020",
//              "3 Mile": 399328,
//              "1 Mile": 94083,
//              "1/2 Mile": 24890,
//              "1/4 Mile": 6705
//            },
//            {
//              "year": "2015",
//              "3 Mile": 344464,
//              "1 Mile": 81157,
//              "1/2 Mile": 21470,
//              "1/4 Mile": 5784,
//            },
//            {
//              "year": "2010",
//              "3 Mile": 292794,
//              "1 Mile": 68983,
//              "1/2 Mile": 18250,
//              "1/4 Mile": 4916,
//            },
//            {
//              "year": "2000",
//              "3 Mile": 192900,
//              "1 Mile": 45448,
//              "1/2 Mile": 12023,
//              "1/4 Mile": 3239,
//
//            }
//          ];
//
//          var labelVar = 'year';
//          var varNames = d3.keys(data[0])
//            .filter(function (key) { return key !== labelVar;});
//          color.domain(varNames);
//          data.forEach(function (d) {
//            var y0 = 0;
//            d.mapping = varNames.map(function (name) {
//              return {
//                name: name,
//                label: d[labelVar],
//                y0: y0,
//                y1: y0 += +d[name]
//              };
//            });
//            d.total = d.mapping[d.mapping.length - 1].y1;
//          });
//
//
//          console.log("prepped data", data);
//
//
//          x.domain(data.map(function (d) { return d[labelVar]; }));
//          y.domain([0, d3.max(data, function (d) { return d.total; })]);
//          var selection = svg.selectAll(".series")
//            .data(data)
//            .enter().append("g")
//            .attr("class", "series")
//            .attr("transform", function (d) { return "translate(" + x(d[labelVar]) + ",0)"; });
//          selection.selectAll("rect")
//            .data(function (d) { return d.mapping; })
//            .enter().append("rect")
//            .attr("width", x.rangeBand())
//            .attr("y", function (d) { return y(d.y1); })
//            .attr("height", function (d) { return y(d.y0) - y(d.y1); })
//            .style("fill", function (d) { return color(d.name); })
//            .style("stroke", "grey");
//          //});
//
//
//        })
//      }
//    }
//  }])
//
//  //crunchbase - static- with tooltips
//  //http://projects.delimited.io/experiments/multi-series/stacked-bar-full.html
//  //view-source:http://projects.delimited.io/experiments/multi-series/stacked-bar-full.html
//  .directive('stackedBarChartFull', ['d3Service', function(d3Service) {
//    return {
//      restrict: 'A',
//      link: function (scope, element, attr) {
//        d3Service.d3().then(function (d3){
//
//
//          console.log("inside this chart");
//          var margin = {top: 20, right: 55, bottom: 30, left: 60},
//          width  = 350 - margin.left - margin.right,
//          height = 350  - margin.top  - margin.bottom;
//
//          var x = d3.scale.ordinal()
//            .rangeRoundBands([0, width], .1);
//
//          var y = d3.scale.linear()
//            .rangeRound([height, 0]);
//
//          var xAxis = d3.svg.axis()
//            .scale(x)
//            .orient("bottom");
//
//          var yAxis = d3.svg.axis()
//            .scale(y)
//            .orient("left");
//
//          var color = d3.scale.ordinal()
//            .range(["#001c9c","#101b4d","#475003","#9c8305","#d3c47c"]);
//
//          var svg = d3.select("body").append("svg")
//            .attr("width",  width  + margin.left + margin.right)
//            .attr("height", height + margin.top  + margin.bottom)
//            .append("g")
//            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
//          d3.csv("data/crunchbase-years.csv", function (error, data) {
//
//          //data = [
//          //  {
//          //    "year": "2020",
//          //    "1/4 Mile": 6705,
//          //    "1/2 Mile": 24890,
//          //    "1 Mile": 94083,
//          //    "3 Mile": 399328
//          //  },
//          //  {
//          //    "year": "2015",
//          //    "1/4 Mile": 5784,
//          //    "1/2 Mile": 21470,
//          //    "1 Mile": 81157,
//          //    "3 Mile": 344464
//          //  },
//          //  {
//          //    "year": "2010",
//          //    "1/4 Mile": 4916,
//          //    "1/2 Mile": 18250,
//          //    "1 Mile": 68983,
//          //    "3 Mile": 292794
//          //  },
//          //  {
//          //    "year": "2000",
//          //    "1/4 Mile": 3239,
//          //    "1/2 Mile": 12023,
//          //    "1 Mile": 45448,
//          //    "3 Mile": 192900
//          //  }
//          //];
//
//            var labelVar = 'year';
//            var varNames = d3.keys(data[0]).filter(function (key) { return key !== labelVar;});
//            color.domain(varNames);
//
//            data.forEach(function (d) {
//              var y0 = 0;
//              d.mapping = varNames.map(function (name) {
//                return {
//                  name: name,
//                  label: d[labelVar],
//                  y0: y0,
//                  y1: y0 += +d[name]
//                };
//              });
//              d.total = d.mapping[d.mapping.length - 1].y1;
//            });
//
//            x.domain(data.map(function (d) { return d.year; }));
//            y.domain([0, d3.max(data, function (d) { return d.total; })]);
//
//            svg.append("g")
//              .attr("class", "x axis")
//              .attr("transform", "translate(0," + height + ")")
//              .call(xAxis);
//
//            svg.append("g")
//              .attr("class", "y axis")
//              .call(yAxis)
//              .append("text")
//              .attr("transform", "rotate(-90)")
//              .attr("y", 6)
//              .attr("dy", ".71em")
//              .style("text-anchor", "end")
//              .text("Number of Rounds");
//
//            var selection = svg.selectAll(".series")
//              .data(data)
//              .enter().append("g")
//              .attr("class", "series")
//              .attr("transform", function (d) { return "translate(" + x(d.year) + ",0)"; });
//
//            selection.selectAll("rect")
//              .data(function (d) { return d.mapping; })
//              .enter().append("rect")
//              .attr("width", x.rangeBand())
//              .attr("y", function (d) { return y(d.y1); })
//              .attr("height", function (d) { return y(d.y0) - y(d.y1); })
//              .style("fill", function (d) { return color(d.name); })
//              .style("stroke", "grey")
//              .on("mouseover", function (d) { showPopover.call(this, d); })
//              .on("mouseout",  function (d) { removePopovers(); })
//
//            var legend = svg.selectAll(".legend")
//              .data(varNames.slice().reverse())
//              .enter().append("g")
//              .attr("class", "legend")
//              .attr("transform", function (d, i) { return "translate(55," + i * 20 + ")"; });
//
//            legend.append("rect")
//              .attr("x", width - 10)
//              .attr("width", 10)
//              .attr("height", 10)
//              .style("fill", color)
//              .style("stroke", "grey");
//
//            legend.append("text")
//              .attr("x", width - 12)
//              .attr("y", 6)
//              .attr("dy", ".35em")
//              .style("text-anchor", "end")
//              .text(function (d) { return d; });
//
//            function removePopovers () {
//              $('.popover').each(function() {
//                $(this).remove();
//              });
//            }
//
//            function showPopover (d) {
//              $(this).popover({
//                title: d.name,
//                placement: 'auto top',
//                container: 'body',
//                trigger: 'manual',
//                html : true,
//                content: function() {
//                  return "year: " + d.label +
//                    "<br/>Rounds: " + d3.format(",")(d.value ? d.value: d.y1 - d.y0); }
//              });
//              $(this).popover('show')
//            }
//          });
//        })
//      }
//    }
//  }])
//  //http://bl.ocks.org/mbostock/3943967
//  .directive('myStackedGroupedBarChart', ['d3Service', function(d3Service) {
//    return {
//      restrict: 'A',
//      link: function (scope, element, attr) {
//        d3Service.d3().then(function (d3){
//
//          var data = [
//            {
//              "year": "2020",
//              "3 Mile": 399328,
//              "1 Mile": 94083,
//              "1/2 Mile": 24890,
//              "1/4 Mile": 6705
//            },
//            {
//              "year": "2015",
//              "3 Mile": 344464,
//              "1 Mile": 81157,
//              "1/2 Mile": 21470,
//              "1/4 Mile": 5784,
//            },
//            {
//              "year": "2010",
//              "3 Mile": 292794,
//              "1 Mile": 68983,
//              "1/2 Mile": 18250,
//              "1/4 Mile": 4916,
//            },
//            {
//              "year": "2000",
//              "3 Mile": 192900,
//              "1 Mile": 45448,
//              "1/2 Mile": 12023,
//              "1/4 Mile": 3239,
//
//            }
//          ];
//          //
//          //var labelVar = 'year';
//          //var varNames = d3.keys(data[0])
//          //  .filter(function (key) { return key !== labelVar;});
//          //color.domain(varNames);
//          //data.forEach(function (d) {
//          //  var y0 = 0;
//          //  d.mapping = varNames.map(function (name) {
//          //    return {
//          //      name: name,
//          //      label: d[labelVar],
//          //      y0: y0,
//          //      y1: y0 += +d[name]
//          //    };
//          //  });
//          //  d.total = d.mapping[d.mapping.length - 1].y1;
//          //});
//
//console.log(data);
//
//          var n = 4, // number of layers
//          //m = 4, // number of samples per layer
//          stack = d3.layout.stack(),
//          layers = stack(["3 Mile", "1 Mile", "1/2 Mile", "1/4 Mile"].map(function(layer) {
//            return data.map(function(d){
//              return {x: d.year, y: +d[layer]}
//            })
//          })),
//          yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); }),
//          yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; });
//          });
//
//          console.log(stack);
//          console.log(layers);
//
//          var margin = {top: 40, right: 10, bottom: 20, left: 10},
//            width = 200 - margin.left - margin.right,
//            height = 200 - margin.top - margin.bottom;
//
//
//
//          var x = d3.scale.ordinal()
//            .domain(d3.range(layers[0].map(function(d) { return d.x; })))
//            .rangeRoundBands([0, width], .08);
//
//          var y = d3.scale.linear()
//            .domain([0, yStackMax])
//            .range([height, 0]);
//
//          //var color = d3.scale.linear()
//          //  .domain([0, n - 1])
//          //  .range(["#aad", "#556"]);
//
//          var color = d3.scale.ordinal()
//            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
//
//
//          var xAxis = d3.svg.axis()
//            .scale(x)
//            .tickSize(0)
//            .tickPadding(6)
//            .orient("bottom");
//
//          var svg = d3.select("body").append("svg")
//            .attr("width", width + margin.left + margin.right)
//            .attr("height", height + margin.top + margin.bottom)
//            .append("g")
//            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
//          var layer = svg.selectAll(".layer")
//            .data(layers)
//            .enter().append("g")
//            .attr("class", "layer")
//            .style("fill", function(d, i) { return color(i); });
//
//          var rect = layer.selectAll("rect")
//            .data(function(d) { return d; })
//            .enter().append("rect")
//            .attr("x", function(d) { return x(d.x); })
//            .attr("y", height)
//            .attr("width", x.rangeBand())
//            .attr("height", 0);
//
//          rect.transition()
//            .delay(function(d, i) { return i * 10; })
//            .attr("y", function(d) { return y(d.y0 + d.y); })
//            .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); });
//
//          svg.append("g")
//            .attr("class", "x axis")
//            .attr("transform", "translate(0," + height + ")")
//            .call(xAxis);
//
//          d3.selectAll("input").on("change", change);
//
//          var timeout = setTimeout(function() {
//            d3.select("input[value=\"grouped\"]").property("checked", true).each(change);
//          }, 2000);
//
//          function change() {
//            clearTimeout(timeout);
//            if (this.value === "grouped") transitionGrouped();
//            else transitionStacked();
//          }
//
//          function transitionGrouped() {
//            y.domain([0, yGroupMax]);
//
//            rect.transition()
//              .duration(500)
//              .delay(function(d, i) { return i * 10; })
//              .attr("x", function(d, i, j) { return x(d.x) + x.rangeBand() / n * j; })
//              .attr("width", x.rangeBand() / n)
//              .transition()
//              .attr("y", function(d) { return y(d.y); })
//              .attr("height", function(d) { return height - y(d.y); });
//          }
//
//          function transitionStacked() {
//            y.domain([0, yStackMax]);
//
//            rect.transition()
//              .duration(500)
//              .delay(function(d, i) { return i * 10; })
//              .attr("y", function(d) { return y(d.y0 + d.y); })
//              .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
//              .transition()
//              .attr("x", function(d) { return x(d.x); })
//              .attr("width", x.rangeBand());
//          }
//
//// Inspired by Lee Byron's test data generator.
//          function bumpLayer(n, o) {
//
//            function bump(a) {
//              var x = 1 / (.1 + Math.random()),
//                y = 2 * Math.random() - .5,
//                z = 10 / (.1 + Math.random());
//              for (var i = 0; i < n; i++) {
//                var w = (i / n - y) * z;
//                a[i] += x * Math.exp(-w * w);
//              }
//            }
//
//            var a = [], i;
//            for (i = 0; i < n; ++i) a[i] = o + o * Math.random();
//            for (i = 0; i < 5; ++i) bump(a);
//            return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
//          }
//        })
//      }
//    }
//  }])
//  //http://bl.ocks.org/mbostock/3943967
//  .directive('stackedGroupedBarChart', ['d3Service', function(d3Service) {
//    return {
//      restrict: 'A',
//      link: function (scope, element, attr) {
//        d3Service.d3().then(function (d3){
//
//          var n = 4, // number of layers
//          m = 4, // number of samples per layer
//          stack = d3.layout.stack(),
//          layers = stack(d3.range(n).map(function() { return bumpLayer(m, .1); }));
//          yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); }),
//          yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });
//
//          console.log(bumpLayer(m, .1));
//          //console.log(stack);
//          console.log(layers);
//
//          var margin = {top: 40, right: 10, bottom: 20, left: 10},
//            width = 200 - margin.left - margin.right,
//            height = 200 - margin.top - margin.bottom;
//
//          var x = d3.scale.ordinal()
//            .domain(d3.range(m))
//            .rangeRoundBands([0, width], .08);
//
//          var y = d3.scale.linear()
//            .domain([0, yStackMax])
//            .range([height, 0]);
//
//          var color = d3.scale.linear()
//            .domain([0, n - 1])
//            .range(["#aad", "#556"]);
//
//          var xAxis = d3.svg.axis()
//            .scale(x)
//            .tickSize(0)
//            .tickPadding(6)
//            .orient("bottom");
//
//          var svg = d3.select("body").append("svg")
//            .attr("width", width + margin.left + margin.right)
//            .attr("height", height + margin.top + margin.bottom)
//            .append("g")
//            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
//          var layer = svg.selectAll(".layer")
//            .data(layers)
//            .enter().append("g")
//            .attr("class", "layer")
//            .style("fill", function(d, i) { return color(i); });
//
//          var rect = layer.selectAll("rect")
//            .data(function(d) { return d; })
//            .enter().append("rect")
//            .attr("x", function(d) { return x(d.x); })
//            .attr("y", height)
//            .attr("width", x.rangeBand())
//            .attr("height", 0);
//
//          rect.transition()
//            .delay(function(d, i) { return i * 10; })
//            .attr("y", function(d) { return y(d.y0 + d.y); })
//            .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); });
//
//          svg.append("g")
//            .attr("class", "x axis")
//            .attr("transform", "translate(0," + height + ")")
//            .call(xAxis);
//
//          d3.selectAll("input").on("change", change);
//
//          var timeout = setTimeout(function() {
//            d3.select("input[value=\"grouped\"]").property("checked", true).each(change);
//          }, 2000);
//
//          function change() {
//            clearTimeout(timeout);
//            if (this.value === "grouped") transitionGrouped();
//            else transitionStacked();
//          }
//
//          function transitionGrouped() {
//            y.domain([0, yGroupMax]);
//
//            rect.transition()
//              .duration(500)
//              .delay(function(d, i) { return i * 10; })
//              .attr("x", function(d, i, j) { return x(d.x) + x.rangeBand() / n * j; })
//              .attr("width", x.rangeBand() / n)
//              .transition()
//              .attr("y", function(d) { return y(d.y); })
//              .attr("height", function(d) { return height - y(d.y); });
//          }
//
//          function transitionStacked() {
//            y.domain([0, yStackMax]);
//
//            rect.transition()
//              .duration(500)
//              .delay(function(d, i) { return i * 10; })
//              .attr("y", function(d) { return y(d.y0 + d.y); })
//              .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
//              .transition()
//              .attr("x", function(d) { return x(d.x); })
//              .attr("width", x.rangeBand());
//          }
//
//// Inspired by Lee Byron's test data generator.
//          function bumpLayer(n, o) {
//
//            function bump(a) {
//              var x = 1 / (.1 + Math.random()),
//                y = 2 * Math.random() - .5,
//                z = 10 / (.1 + Math.random());
//              for (var i = 0; i < n; i++) {
//                var w = (i / n - y) * z;
//                a[i] += x * Math.exp(-w * w);
//              }
//            }
//
//            var a = [], i;
//            for (i = 0; i < n; ++i) a[i] = o + o * Math.random();
//            for (i = 0; i < 5; ++i) bump(a);
//            return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
//          }
//        })
//      }
//    }
//  }])
//  .directive('barChart', ['d3Service', function(d3Service) {
//    return {
//      restrict: 'E',
//      scope: { data: '=' },
//      link: function (scope, element, attr) {
//        d3Service.d3().then(function (d3) {
//
//        var data = scope.data;
//
//          console.log(data);
//
//
//          var margin = {top: 20, right: 20, bottom: 30, left: 40},
//            width = 900 - margin.left - margin.right,
//            height = 900 - margin.top - margin.bottom;
//
//          var svg = d3.select("body").append("svg")
//            .attr("width", width + margin.left + margin.right)
//            .attr("height", height + margin.top + margin.bottom);
//
//          var g = svg.append("g")
//            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
//          var g2 = svg.append("g")
//            .attr("transform", "translate(" + 400 + "," + margin.top + ")");
//
//
//
//          var bars = barChart()
//            .data(data)
//            .width(200)
//            .height(200);
//          bars(g);
//
//
//          bars
//            .data(data)
//            .width(400)
//            .height(400);
//
//          bars(g2);
//
//          function barChart() {
//            var data=[];
//            var width = 300;
//            var height = 300;
//
//            var chart = function (g) {
//
//              var x = d3.scale.ordinal()
//                .rangeRoundBands([0, width], .1);
//
//              var y = d3.scale.linear()
//                .range([height, 0]);
//
//              var xAxis = d3.svg.axis()
//                .scale(x)
//                .orient("bottom");
//
//              var yAxis = d3.svg.axis()
//                .scale(y)
//                .orient("left")
//                .ticks(10, "%");
//
//
//              x.domain(data.map(function (d) {
//                return d.letter;
//              }));
//              y.domain([0, d3.max(data, function (d) {
//                return d.frequency;
//              })]);
//
//              g.append("g")
//                .attr("class", "x axis")
//                .attr("transform", "translate(0," + height + ")")
//                .call(xAxis);
//
//              g.append("g")
//                .attr("class", "y axis")
//                .call(yAxis)
//                .append("text")
//                .attr("transform", "rotate(-90)")
//                .attr("y", 6)
//                .attr("dy", ".71em")
//                .style("text-anchor", "end")
//                .text("Frequency");
//
//              g.selectAll(".bar")
//                .data(data)
//                .enter().append("rect")
//                .attr("class", "bar")
//                .attr("x", function (d) {
//                  return x(d.letter);
//                })
//                .attr("width", x.rangeBand())
//                .attr("y", function (d) {
//                  return y(d.frequency);
//                })
//                .attr("height", function (d) {
//                  return height - y(d.frequency);
//                });
//
//            };
//
//            chart.data = function(value) {
//              if(!arguments.length) return data;
//              data = value;
//              return chart;
//            };
//
//            chart.width = function(value) {
//              if(!arguments.length) return width;
//              width = value;
//              return chart;
//            };
//
//            chart.height = function(value) {
//              if(!arguments.length) return height;
//              height = value;
//              return chart;
//            };
//
//
//
//            return chart;
//          };
//
//        function type(d) {
//          d.frequency = +d.frequency;
//          return d;
//        };
//
//
//
//
//        })
//      }
//    }
//  }])
//
////  .directive('barChartCodePen', ['d3Service', function(d3Service) {
////    return {
////      restrict: 'E',
////      //scope: { data: '=' },
////      link: function (scope, element, attr) {
////        d3Service.d3().then(function (d3) {
////
////
////          //http://codepen.io/superpikar/pen/xCeiu
////
////          var margin ={top:20, right:30, bottom:30, left:40},
////            width=900-margin.left - margin.right,
////            height=500-margin.top-margin.bottom;
////
////// scale to ordinal because x axis is not numerical
////          var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
////
//////scale to numerical value by height
////          var y = d3.scale.linear().range([height, 0]);
////
////          var chart = d3.select(element[0])
////            .append("svg")  //append svg element inside #chart
////            .attr("width", width+(2*margin.left)+margin.right)    //set width
////            .attr("height", height+margin.top+margin.bottom);  //set height
////          var xAxis = d3.svg.axis()
////            .scale(x)
////            .orient("bottom");  //orient bottom because x-axis will appear below the bars
////
////          var yAxis = d3.svg.axis()
////            .scale(y)
////            .orient("left");
////
////
////          d3.json("http://codepen.io/superpikar/pen/kcJDf.js", function(error, data){
////            x.domain(data.map(function(d){ return d.letter}));
////            y.domain([0, d3.max(data, function(d){return d.frequency})]);
////
////            var bar = chart.selectAll("g")
////              .data(data)
////              .enter()
////              .append("g")
////              .attr("transform", function(d, i){
////                return "translate("+x(d.letter)+", 0)";
////              });
////
////            bar.append("rect")
////              .attr("y", function(d) {
////                return y(d.frequency);
////              })
////              .attr("x", function(d,i){
////                return x.rangeBand()+(margin.left/4);
////              })
////              .attr("height", function(d) {
////                return height - y(d.frequency);
////              })
////              .attr("width", x.rangeBand());  //set width base on range on ordinal data
////
////            //bar.append("text")
////            //  .attr("x", x.rangeBand()+margin.left )
////            //  .attr("y", function(d) { return y(d.frequency) -10; })
////            //  .attr("dy", ".75em")
////            //  .text(function(d) { return d.frequency; });
////
////            chart.append("g")
////              .attr("class", "x axis")
////              .attr("transform", "translate("+margin.left+","+ height+")")
////              .call(xAxis);
////
////            chart.append("g")
////              .attr("class", "y axis")
////              .attr("transform", "translate("+margin.left+",0)")
////              .call(yAxis)
////              .append("text")
////              .attr("transform", "rotate(-90)")
////              .attr("y", 6)
////              .attr("dy", ".71em")
////              .style("text-anchor", "end")
////              .text("Frequency");
////          });
////
////          function type(d) {
////            d.letter = +d.letter; // coerce to number
////            return d;
////          }
////        })
////      }
////    }
////  }])
////  .directive('barChartBoxOffice', ['d3Service', function(d3Service) {
////    return {
////      restrict: 'E',
////      scope: { data: '=' },
////      link: function (scope, element, attr) {
////        d3Service.d3().then(function (d3) {
////
////
////          //http://codepen.io/superpikar/pen/xCeiu
////
////          var margin ={top:20, right:30, bottom:30, left:40},
////            width=500-margin.left - margin.right,
////            height=400-margin.top-margin.bottom;
////
////// scale to ordinal because x axis is not numerical
////          var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
////
//////scale to numerical value by height
////          var y = d3.scale.linear().range([height, 0]);
////
////          var chart = d3.select(element[0])
////            .append("svg")  //append svg element inside #chart
////            .attr("width", width+(2*margin.left)+margin.right)    //set width
////            .attr("height", height+margin.top+margin.bottom);  //set height
////          var xAxis = d3.svg.axis()
////            .scale(x)
////            .orient("bottom");  //orient bottom because x-axis will appear below the bars
////
////          var yAxis = d3.svg.axis()
////            .scale(y)
////            .orient("left");
////
////          scope.$watch('data', function(data){
////            console.log(data);
////            if(!data){ return; }
////
////            x.domain(data.map(function(d){ return d.title}));
////            y.domain([0, d3.max(data, function(d){return d.score})]);
////
////            var bar = chart.selectAll("g")
////              .data(data)
////              .enter()
////              .append("g")
////              .attr("transform", function(d, i){
////                return "translate("+x(d.title)+", 0)";
////              });
////
////            bar.append("rect")
////              .attr("y", function(d) {
////                return y(d.score);
////              })
////              .attr("x", function(d,i){
////                return x.rangeBand()+(margin.left/4);
////              })
////              .attr("height", function(d) {
////                return height - y(d.score);
////              })
////              .attr("width", x.rangeBand());  //set width base on range on ordinal data
////
////            bar.append("text")
////              .attr("x", x.rangeBand()+margin.left )
////              .attr("y", function(d) { return y(d.score) -10; })
////              .attr("dy", ".75em")
////              .text(function(d) { return d.score; });
////
////            chart.append("g")
////              .attr("class", "x axis")
////              .attr("transform", "translate("+margin.left+","+ height+")")
////              .call(xAxis)
////              .append("text")
////              .style("text-anchor", "end")
////              .text("Movie Title");
////
////            chart.append("g")
////              .attr("class", "y axis")
////              .attr("transform", "translate("+margin.left+",0)")
////              .call(yAxis)
////              .append("text")
////              .attr("transform", "rotate(-90)")
////              .attr("y", 6)
////              .attr("dy", ".71em")
////              .style("text-anchor", "end")
////              .text("Ratings");
////          });
////
////          function type(d) {
////            d.title = +d.title; // coerce to number
////            return d;
////          }
////        })
////      }
////    }
////  }])
////  .directive('marketDataGraph', ['d3Service', function(d3Service) {
////    return {
////      restrict: 'AE',
////      scope: {data: '='},
////      link: function (scope, element, attr) {
////        d3Service.d3().then(function (d3) {
////
////// Parameters
////// Set the dimensions of the canvas / graph
////          var margin = {top: 30, right: 20, bottom: 30, left: 20},
////            width = 300 - margin.left - margin.right,
////            height = 150 - margin.top - margin.bottom;
////
////
////// Parse the date / time
////          var parseDate = d3.time.format("%0m/%0d/%Y").parse;
////
////// Set the ranges
////          var x = d3.time.scale().range([0, width]);
////          var yScl = d3.scale.linear();
////          var y1 = yScl.range([height, 0]);
////          var y2 = d3.scale.linear().range([height, 0]);
////
////// Define the axes
////          var xAxis = d3.svg.axis().scale(x)
////            .orient("bottom").ticks(5);
////
////          var yAxis1 = d3.svg.axis().scale(y1)
////            .orient("left").ticks(5);
////
////          var yAxis2 = d3.svg.axis().scale(y2)
////            .orient("right").ticks(5);
////
////
////// Adds the svg canvas
////          var svg = d3.select("body")
////            .append("svg")
////            .attr("width", width + margin.left + margin.right)
////            .attr("height", height + margin.top + margin.bottom)
////            .append("g")
////            .attr("transform",
////            "translate(" + margin.left + "," + margin.top + ")");
////
////// clip outside viewport
////          var clip = svg.append("defs").append("clipPath")
////            .attr("id", "clipBox");
////
////          svg.append('rect') // outline for reference
////            .attr({
////              width: width,
////              height: height,
////              id: "viewport",
////              fill: "white"
////            }); // attributes in JS list format
////
////          clip.append("use").attr("xlink:href", "#viewport");
////
////
////// Fore-ground Data
////          /*
////           data = [
////           {date:"1-May-12",close:58.13},
////           {date:"30-Apr-12",close:53.98},
////           {date:"27-Apr-12",close:67.00},
////           {date:"26-Apr-12",close:89.70},
////           */
////
////
////// Background Code
////          allBaseLines = [];
////          /*
////
////           arrayOfPolygons = [{
////           "name": "polygon 1",
////           "points": [{
////           "date": "8/1/1929",
////           "y": 0
////           }, {
////           "date": "8/1/1929",
////           "y": 1
////           }, {
////           "date": "3/1/1933",
////           "y": 0
////           }, {
////           "date": "3/1/1933",
////           "y": 1
////           }]
////           }, {
////           "name": "polygon 2",
////           "points": [{
////           "date": "5/1/1937",
////           "y": 0
////           }, {
////           */
////
////
////// Determine Domain
////          d3.json("data/fredHomePriceIndex-BOX.json", function (error, data) {
////            data.forEach(function (d) {
////              d.date = parseDate(d.date);
////              d.close = +d.close;
////            });
////
////
////            d3.json("data/fredPerCapitaPerInc_BOST625PCPI.json", function (error2, data2) {
////
////              data2.forEach(function (d) {
////                d.date = parseDate(d.date);
////                d.close = +d.close;
////              });
////
////              // Scale the range of the data
////              x.domain(d3.extent(data, function (d) {
////                return d.date;
////              }));
////              y1.domain([0, d3.max(data, function (d) {
////                return d.close;
////              })]);
////              y2.domain([0, d3.max(data2, function (d) {
////                return d.close;
////              })]);
////
////// Decompose Array
//////arrayOfPolygons.forEach( function(d){console.log( d) } )
//////arrayOfPolygons.forEach( function(d){d.points.forEach(function(d){console.log(d.date)}) } )
////
////              d3.json("data/fredRecessionDates.json", function (errorPolygonArray, arrayOfPolygons) {
////                arrayOfPolygons.forEach(function (d) {
////                  d.points.forEach(function (d) {
////                    d.date = x(parseDate(d.date))
////                  })
////                })
////                arrayOfPolygons.forEach(function (d) {
////                  d.points.forEach(function (d) {
////                    d.y = d.y * y1.domain()[1]
////                  })
////                })
////
////// Add Background
////                svg.selectAll("polygon")
////                  .data(arrayOfPolygons)
////                  .enter().append("polygon")
////                  .attr("points", function (d) {
////                    return getConvexHull(d.points.map(function (d) {
////                      return [d.date, d.y]
////                    })).map(function (d) {
////                      return [(d[1][0]), y1(d[1][1])].join(",");
////                    }).join(" ");
////                  })
////                  .attr("fill", "lightgray")
////                  .attr("stroke", "lightgray")
////                  .attr("stroke-width", 0)
////                  .attr("clip-path", "url(#clipBox)");
////
////                var poly = d3.selectAll("polygon");
////                poly
////                  .attr("class", "poly")
////                  .attr("fill", "#EBF2FC")
////
////
////// Axes
////                svg.append("g")
////                  .attr("transform",
////                  "translate(" + margin.left + "," + margin.top + ")");
////
////
////                // horizontal lines
////                svg.selectAll("line.horizontalGrid").data(yScl.ticks(5)).enter()
////                  .append("line")
////                  .attr(
////                  {
////                    "class": "horizontalGrid",
////                    "x1": 0,
////                    "x2": width,
////                    "y1": function (d) {
////                      return yScl(d);
////                    },
////                    "y2": function (d) {
////                      return yScl(d);
////                    },
////                    "fill": "none",
////                    "shape-rendering": "crispEdges",
////                    "stroke": "lightgray",
////                    "stroke-width": "1px"
////                  });
////
////                // Add the X Axis
////                svg.append("g")
////                  .attr("class", "x axis")
////                  .attr("transform", "translate(0," + height + ")")
////                  .call(xAxis);
////
////                // Add the Y Axis1
////                svg.append("g")
////                  .attr("class", "y axis")
////                  .call(yAxis1);
////
////                // Add the Y Axis2
////                svg.append("g")
////                  .attr("class", "y axis")
////                  .attr("transform", "translate(" + (width) + ",0)")
////                  .call(yAxis2);
////
////
////// Fore-ground Display
////// Define the line
////                var valueline1 = d3.svg.line()
////                  .interpolate("basis")
////                  .x(function (d) {
////                    return x(d.date);
////                  })
////                  .y(function (d) {
////                    return y1(d.close);
////                  });
////
////                var valueline2 = d3.svg.line()
////                  .interpolate("basis")
////                  .x(function (d) {
////                    return x(d.date);
////                  })
////                  .y(function (d) {
////                    return y2(d.close);
////                  });
////
////                //.attr(
////                //{
////                //  "fill": "none",
////                //  "stroke": "grey",
////                //  "stroke-width": "1",
////                //  "shape-rendering": "crispEdges"
////                //});
////
////
////// Add the valueline path.
////                svg.append("path")
////                  //.attr("class", "line1")
////                  //.attr("d", valueline1(data))
////                  .attr(
////                  {
////                    "class": "line1",
////                    "d": valueline1(data),
////                    "stroke": "steelblue",
////                    "stroke-width": "2",
////                    "fill": "none"
////                  });
////
////                svg.append("path")
////                  .attr("class", "line2")
////                  .attr("d", valueline2(data2))
////                  .attr("id", "path2")
////                  .attr("clip-path", "url(#clipBox)")
////                  .attr(
////                  {
////                    //"stroke": "steelblue",
////                    "stroke-width": "2",
////                    "fill": "none",
////                    "stroke": "lightblue",
////                    "stroke-dasharray": "3, 3"
////                  });
////
////// REFERENCES --------------------------------------------------
////// Convex hull Algorithm for ordering vertices in a polygon
////
////                function getDistant(cpt, bl) {
////                  Vy = bl[1][0] - bl[0][0];
////                  Vx = bl[0][1] - bl[1][1];
////                  return (Vx * (cpt[0] - bl[0][0]) + Vy * (cpt[1] - bl[0][1]))
////                }
////
////                function findMostDistantPointFromBaseLine(baseLine, points) {
////                  var maxD = 0;
////                  var maxPt = new Array();
////                  var newPoints = new Array();
////                  for (var idx in points) {
////                    var pt = points[idx];
////                    var d = getDistant(pt, baseLine);
////
////                    if (d > 0) {
////                      newPoints.push(pt);
////                    } else {
////                      continue;
////                    }
////
////                    if (d > maxD) {
////                      maxD = d;
////                      maxPt = pt;
////                    }
////
////                  }
////                  return {
////                    'maxPoint': maxPt,
////                    'newPoints': newPoints
////                  }
////                }
////
////                function buildConvexHull(baseLine, points) {
////
////                  //plotBaseLine(baseLine,'rgb(180,180,180)');
////                  allBaseLines.push(baseLine)
////                  var convexHullBaseLines = new Array();
////                  var t = findMostDistantPointFromBaseLine(baseLine, points);
////                  if (t.maxPoint.length) {
////                    convexHullBaseLines = convexHullBaseLines.concat(buildConvexHull([baseLine[0], t.maxPoint], t.newPoints));
////                    convexHullBaseLines = convexHullBaseLines.concat(buildConvexHull([t.maxPoint, baseLine[1]], t.newPoints));
////                    return convexHullBaseLines;
////                  } else {
////                    return [baseLine];
////                  }
////                }
////
////                function getConvexHull(points) {
////                  //find first baseline
////                  var maxX, minX;
////                  var maxPt, minPt;
////                  for (var idx in points) {
////                    var pt = points[idx];
////                    if (pt[0] > maxX || !maxX) {
////                      maxPt = pt;
////                      maxX = pt[0];
////                    }
////                    if (pt[0] < minX || !minX) {
////                      minPt = pt;
////                      minX = pt[0];
////                    }
////                  }
////                  var ch = [].concat(buildConvexHull([minPt, maxPt], points),
////                    buildConvexHull([maxPt, minPt], points))
////                  return ch;
////                }
////
////              }) //end d3.JSON data
////            }) //end d3.JSON data2
////          }) //end of arrayOfPolygons
////        }) //end d3 service return function
////      } //end link function
////    } //end return function of directive
////  }])
//  .directive('donutChart', ['d3Service', function(d3Service) {
//    return {
//      restrict: 'E',
//      scope: { data: '=' },
//      link: function (scope, element, attr) {
//
//
//
//        d3Service.d3().then(function (d3) {
//
//
//
//          var width = 150;
//          var height = 150;
//
//          var svg = d3.select(element[0]).append('svg')
//            ;
//
//          var g = svg.append('g');
//
//
//
//          var thisChart = piechart();
//          thisChart(g);
//
//
//          function piechart() {
//
//            var chart = function(g){
//
//              g.attr({width: width, height: height});
//
//              var color = d3.scale.category10();
//              var data = scope.data;
//              var min = Math.min(width, height);
//
//              var pie = d3.layout.pie().sort(null);
//              var arc = d3.svg.arc()
//                .outerRadius(min / 2 * 0.9)
//                .innerRadius(min / 2 * 0.5);
//
//              g.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
//
//              //add the <paths>s for each arc slive
//              g.selectAll('path').data(pie(data))
//                .enter().append('path')
//                .style('stroke', 'white')
//                .attr('d', arc)
//                .attr('fill', function(d, i){ return color(i) });
//
//
//            };
//
//            return chart;
//          };
//
//        });
//      }
//    }
//  }])
//
////  .directive('barChartBoxOffice', ['d3Service', function(d3Service) {
////    return {
////      restrict: 'E',
////      scope: { data: '=' },
////      link: function (scope, element, attr) {
////        d3Service.d3().then(function (d3) {
////
////          //http://codepen.io/superpikar/pen/xCeiu
////
////          var margin ={top:20, right:30, bottom:30, left:40},
////            width=960-margin.left - margin.right,
////            height=500-margin.top-margin.bottom;
////
////// scale to ordinal because x axis is not numerical
////          var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
////
//////scale to numerical value by height
////          var y = d3.scale.linear().range([height, 0]);
////
////          var chart = d3.select(element[0])
////            .append("svg")  //append svg element inside #chart
////            .attr("width", width+(2*margin.left)+margin.right)    //set width
////            .attr("height", height+margin.top+margin.bottom);  //set height
////          var xAxis = d3.svg.axis()
////            .scale(x)
////            .orient("bottom");  //orient bottom because x-axis will appear below the bars
////
////          var yAxis = d3.svg.axis()
////            .scale(y)
////            .orient("left");
////
////          scope.$watch('data', function(data){
////            console.log(data);
////            if(!data){ return; }
////
////            x.domain(data.map(function(d){ return d.title}));
////            y.domain([0, d3.max(data, function(d){return d.score})]);
////
////            var bar = chart.selectAll("g")
////              .data(data)
////              .enter()
////              .append("g")
////              .attr("transform", function(d, i){
////                return "translate("+x(d.title)+", 0)";
////              });
////
////            bar.append("rect")
////              .attr("y", function(d) {
////                return y(d.score);
////              })
////              .attr("x", function(d,i){
////                return x.rangeBand()+(margin.left/4);
////              })
////              .attr("height", function(d) {
////                return height - y(d.score);
////              })
////              .attr("width", x.rangeBand());  //set width base on range on ordinal data
////
////            bar.append("text")
////              .attr("x", x.rangeBand()+margin.left )
////              .attr("y", function(d) { return y(d.score) -10; })
////              .attr("dy", ".75em")
////              .text(function(d) { return d.score; });
////
////            chart.append("g")
////              .attr("class", "x axis")
////              .attr("transform", "translate("+margin.left+","+ height+")")
////              .call(xAxis)
////              .append("text")
////              .style("text-anchor", "end")
////              .text("Movie Title");
////
////            chart.append("g")
////              .attr("class", "y axis")
////              .attr("transform", "translate("+margin.left+",0)")
////              .call(yAxis)
////              .append("text")
////              .attr("transform", "rotate(-90)")
////              .attr("y", 6)
////              .attr("dy", ".71em")
////              .style("text-anchor", "end")
////              .text("Ratings");
////          });
////
////          function type(d) {
////            d.title = +d.title; // coerce to number
////            return d;
////          }
////        })
////      }
////    }
////  }])
// ;
//
