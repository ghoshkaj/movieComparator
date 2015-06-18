/**
 * Created by kg on 6/12/15.
 */

angular.module('dcThreeVariableDirective', ['movieComparatorApp.d3'])
  .directive('donutChart', ['d3Service', function(d3Service) {
    return {
      restrict: 'E',
      scope: { data: '=' },
      link: function (scope, element, attr) {
        d3Service.d3().then(function (d3) {

        });
      }
    }
  }])

  .directive('marketDataGraph', ['d3Service', function(d3Service) {
    return {
      restrict: 'AE',
      scope: {data: '='},
      link: function (scope, element, attr) {
        d3Service.d3().then(function (d3) {

// Parameters
// Set the dimensions of the canvas / graph
          var margin = {top: 30, right: 20, bottom: 30, left: 20},
            width = 300 - margin.left - margin.right,
            height = 150 - margin.top - margin.bottom;


// Parse the date / time
          var parseDate = d3.time.format("%0m/%0d/%Y").parse;

// Set the ranges
          var x = d3.time.scale().range([0, width]);
          var yScl = d3.scale.linear();
          var y1 = yScl.range([height, 0]);
          var y2 = d3.scale.linear().range([height, 0]);

// Define the axes
          var xAxis = d3.svg.axis().scale(x)
            .orient("bottom").ticks(5);

          var yAxis1 = d3.svg.axis().scale(y1)
            .orient("left").ticks(5);

          var yAxis2 = d3.svg.axis().scale(y2)
            .orient("right").ticks(5);


// Adds the svg canvas
          var svg = d3.select("body")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

// clip outside viewport
          var clip = svg.append("defs").append("clipPath")
            .attr("id", "clipBox");

          svg.append('rect') // outline for reference
            .attr({
              width: width,
              height: height,
              id: "viewport",
              fill: "white"
            }); // attributes in JS list format

          clip.append("use").attr("xlink:href", "#viewport");


// Fore-ground Data
          /*
           data = [
           {date:"1-May-12",close:58.13},
           {date:"30-Apr-12",close:53.98},
           {date:"27-Apr-12",close:67.00},
           {date:"26-Apr-12",close:89.70},
           */


// Background Code
          allBaseLines = [];
          /*

           arrayOfPolygons = [{
           "name": "polygon 1",
           "points": [{
           "date": "8/1/1929",
           "y": 0
           }, {
           "date": "8/1/1929",
           "y": 1
           }, {
           "date": "3/1/1933",
           "y": 0
           }, {
           "date": "3/1/1933",
           "y": 1
           }]
           }, {
           "name": "polygon 2",
           "points": [{
           "date": "5/1/1937",
           "y": 0
           }, {
           */


// Determine Domain
          d3.json("data/fredHomePriceIndex-BOX.json", function (error, data) {
            data.forEach(function (d) {
              d.date = parseDate(d.date);
              d.close = +d.close;
            });


            d3.json("data/fredPerCapitaPerInc_BOST625PCPI.json", function (error2, data2) {

              data2.forEach(function (d) {
                d.date = parseDate(d.date);
                d.close = +d.close;
              });

              // Scale the range of the data
              x.domain(d3.extent(data, function (d) {
                return d.date;
              }));
              y1.domain([0, d3.max(data, function (d) {
                return d.close;
              })]);
              y2.domain([0, d3.max(data2, function (d) {
                return d.close;
              })]);

// Decompose Array
//arrayOfPolygons.forEach( function(d){console.log( d) } )
//arrayOfPolygons.forEach( function(d){d.points.forEach(function(d){console.log(d.date)}) } )

              d3.json("data/fredRecessionDates.json", function (errorPolygonArray, arrayOfPolygons) {
                arrayOfPolygons.forEach(function (d) {
                  d.points.forEach(function (d) {
                    d.date = x(parseDate(d.date))
                  })
                })
                arrayOfPolygons.forEach(function (d) {
                  d.points.forEach(function (d) {
                    d.y = d.y * y1.domain()[1]
                  })
                })

// Add Background
                svg.selectAll("polygon")
                  .data(arrayOfPolygons)
                  .enter().append("polygon")
                  .attr("points", function (d) {
                    return getConvexHull(d.points.map(function (d) {
                      return [d.date, d.y]
                    })).map(function (d) {
                      return [(d[1][0]), y1(d[1][1])].join(",");
                    }).join(" ");
                  })
                  .attr("fill", "lightgray")
                  .attr("stroke", "lightgray")
                  .attr("stroke-width", 0)
                  .attr("clip-path", "url(#clipBox)");

                var poly = d3.selectAll("polygon");
                poly
                  .attr("class", "poly")
                  .attr("fill", "#EBF2FC")


// Axes
                svg.append("g")
                  .attr("transform",
                  "translate(" + margin.left + "," + margin.top + ")");


                // horizontal lines
                svg.selectAll("line.horizontalGrid").data(yScl.ticks(5)).enter()
                  .append("line")
                  .attr(
                  {
                    "class": "horizontalGrid",
                    "x1": 0,
                    "x2": width,
                    "y1": function (d) {
                      return yScl(d);
                    },
                    "y2": function (d) {
                      return yScl(d);
                    },
                    "fill": "none",
                    "shape-rendering": "crispEdges",
                    "stroke": "lightgray",
                    "stroke-width": "1px"
                  });

                // Add the X Axis
                svg.append("g")
                  .attr("class", "x axis")
                  .attr("transform", "translate(0," + height + ")")
                  .call(xAxis);

                // Add the Y Axis1
                svg.append("g")
                  .attr("class", "y axis")
                  .call(yAxis1);

                // Add the Y Axis2
                svg.append("g")
                  .attr("class", "y axis")
                  .attr("transform", "translate(" + (width) + ",0)")
                  .call(yAxis2);


// Fore-ground Display
// Define the line
                var valueline1 = d3.svg.line()
                  .interpolate("basis")
                  .x(function (d) {
                    return x(d.date);
                  })
                  .y(function (d) {
                    return y1(d.close);
                  });

                var valueline2 = d3.svg.line()
                  .interpolate("basis")
                  .x(function (d) {
                    return x(d.date);
                  })
                  .y(function (d) {
                    return y2(d.close);
                  });

                //.attr(
                //{
                //  "fill": "none",
                //  "stroke": "grey",
                //  "stroke-width": "1",
                //  "shape-rendering": "crispEdges"
                //});


// Add the valueline path.
                svg.append("path")
                  //.attr("class", "line1")
                  //.attr("d", valueline1(data))
                  .attr(
                  {
                    "class": "line1",
                    "d": valueline1(data),
                    "stroke": "steelblue",
                    "stroke-width": "2",
                    "fill": "none"
                  });

                svg.append("path")
                  .attr("class", "line2")
                  .attr("d", valueline2(data2))
                  .attr("id", "path2")
                  .attr("clip-path", "url(#clipBox)")
                  .attr(
                  {
                    //"stroke": "steelblue",
                    "stroke-width": "2",
                    "fill": "none",
                    "stroke": "lightblue",
                    "stroke-dasharray": "3, 3"
                  });

// REFERENCES --------------------------------------------------
// Convex hull Algorithm for ordering vertices in a polygon

                function getDistant(cpt, bl) {
                  Vy = bl[1][0] - bl[0][0];
                  Vx = bl[0][1] - bl[1][1];
                  return (Vx * (cpt[0] - bl[0][0]) + Vy * (cpt[1] - bl[0][1]))
                }

                function findMostDistantPointFromBaseLine(baseLine, points) {
                  var maxD = 0;
                  var maxPt = new Array();
                  var newPoints = new Array();
                  for (var idx in points) {
                    var pt = points[idx];
                    var d = getDistant(pt, baseLine);

                    if (d > 0) {
                      newPoints.push(pt);
                    } else {
                      continue;
                    }

                    if (d > maxD) {
                      maxD = d;
                      maxPt = pt;
                    }

                  }
                  return {
                    'maxPoint': maxPt,
                    'newPoints': newPoints
                  }
                }

                function buildConvexHull(baseLine, points) {

                  //plotBaseLine(baseLine,'rgb(180,180,180)');
                  allBaseLines.push(baseLine)
                  var convexHullBaseLines = new Array();
                  var t = findMostDistantPointFromBaseLine(baseLine, points);
                  if (t.maxPoint.length) {
                    convexHullBaseLines = convexHullBaseLines.concat(buildConvexHull([baseLine[0], t.maxPoint], t.newPoints));
                    convexHullBaseLines = convexHullBaseLines.concat(buildConvexHull([t.maxPoint, baseLine[1]], t.newPoints));
                    return convexHullBaseLines;
                  } else {
                    return [baseLine];
                  }
                }

                function getConvexHull(points) {
                  //find first baseline
                  var maxX, minX;
                  var maxPt, minPt;
                  for (var idx in points) {
                    var pt = points[idx];
                    if (pt[0] > maxX || !maxX) {
                      maxPt = pt;
                      maxX = pt[0];
                    }
                    if (pt[0] < minX || !minX) {
                      minPt = pt;
                      minX = pt[0];
                    }
                  }
                  var ch = [].concat(buildConvexHull([minPt, maxPt], points),
                    buildConvexHull([maxPt, minPt], points))
                  return ch;
                }

              }) //end d3.JSON data
            }) //end d3.JSON data2
          }) //end of arrayOfPolygons
        }) //end d3 service return function
      } //end link function
    } //end return function of directive
  }])
  .directive('donutChart', ['d3Service', function(d3Service) {
    return {
      restrict: 'E',
      scope: { data: '=' },
      link: function (scope, element, attr) {

        d3Service.d3().then(function (d3) {
          var color = d3.scale.category10();
          var data = scope.data;
          var width = 150;
          var height = 150;
          var min = Math.min(width, height);
          var svg = d3.select(element[0]).append('svg');
          var pie = d3.layout.pie().sort(null);
          var arc = d3.svg.arc()
            .outerRadius(min / 2 * 0.9)
            .innerRadius(min / 2 * 0.5);

          svg.attr({width: width, height: height});



          var g = svg.append('g')
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

          //add the <paths>s for each arc slive
          g.selectAll('path').data(pie(data))
            .enter().append('path')
            .style('stroke', 'white')
            .attr('d', arc)
            .attr('fill', function(d, i){ return color(i) });
        });
      }
    }
  }])
  .directive('barChart', ['d3Service', function(d3Service) {
    return {
      restrict: 'E',
      //scope: { data: '=' },
      link: function (scope, element, attr) {
        d3Service.d3().then(function (d3) {

          //http://codepen.io/superpikar/pen/xCeiu

          var margin ={top:20, right:30, bottom:30, left:40},
            width=960-margin.left - margin.right,
            height=500-margin.top-margin.bottom;

// scale to ordinal because x axis is not numerical
          var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

//scale to numerical value by height
          var y = d3.scale.linear().range([height, 0]);

          var chart = d3.select(element[0])
            .append("svg")  //append svg element inside #chart
            .attr("width", width+(2*margin.left)+margin.right)    //set width
            .attr("height", height+margin.top+margin.bottom);  //set height
          var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");  //orient bottom because x-axis will appear below the bars

          var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

          d3.json("http://codepen.io/superpikar/pen/kcJDf.js", function(error, data){
            x.domain(data.map(function(d){ return d.letter}));
            y.domain([0, d3.max(data, function(d){return d.frequency})]);

            var bar = chart.selectAll("g")
              .data(data)
              .enter()
              .append("g")
              .attr("transform", function(d, i){
                return "translate("+x(d.letter)+", 0)";
              });

            bar.append("rect")
              .attr("y", function(d) {
                return y(d.frequency);
              })
              .attr("x", function(d,i){
                return x.rangeBand()+(margin.left/4);
              })
              .attr("height", function(d) {
                return height - y(d.frequency);
              })
              .attr("width", x.rangeBand());  //set width base on range on ordinal data

            bar.append("text")
              .attr("x", x.rangeBand()+margin.left )
              .attr("y", function(d) { return y(d.frequency) -10; })
              .attr("dy", ".75em")
              .text(function(d) { return d.frequency; });

            chart.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate("+margin.left+","+ height+")")
              .call(xAxis);

            chart.append("g")
              .attr("class", "y axis")
              .attr("transform", "translate("+margin.left+",0)")
              .call(yAxis)
              .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 6)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("Frequency");
          });

          function type(d) {
            d.letter = +d.letter; // coerce to number
            return d;
          }
        })
      }
    }
  }])
  .directive('barChartBoxOffice', ['d3Service', function(d3Service) {
    return {
      restrict: 'E',
      scope: { data: '=' },
      link: function (scope, element, attr) {
        d3Service.d3().then(function (d3) {

          //http://codepen.io/superpikar/pen/xCeiu

          var margin ={top:20, right:30, bottom:30, left:40},
            width=960-margin.left - margin.right,
            height=500-margin.top-margin.bottom;

// scale to ordinal because x axis is not numerical
          var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

//scale to numerical value by height
          var y = d3.scale.linear().range([height, 0]);

          var chart = d3.select(element[0])
            .append("svg")  //append svg element inside #chart
            .attr("width", width+(2*margin.left)+margin.right)    //set width
            .attr("height", height+margin.top+margin.bottom);  //set height
          var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");  //orient bottom because x-axis will appear below the bars

          var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

          scope.$watch('data', function(data){
            console.log(data);
            if(!data){ return; }

            x.domain(data.map(function(d){ return d.title}));
            y.domain([0, d3.max(data, function(d){return d.score})]);

            var bar = chart.selectAll("g")
              .data(data)
              .enter()
              .append("g")
              .attr("transform", function(d, i){
                return "translate("+x(d.title)+", 0)";
              });

            bar.append("rect")
              .attr("y", function(d) {
                return y(d.score);
              })
              .attr("x", function(d,i){
                return x.rangeBand()+(margin.left/4);
              })
              .attr("height", function(d) {
                return height - y(d.score);
              })
              .attr("width", x.rangeBand());  //set width base on range on ordinal data

            bar.append("text")
              .attr("x", x.rangeBand()+margin.left )
              .attr("y", function(d) { return y(d.score) -10; })
              .attr("dy", ".75em")
              .text(function(d) { return d.score; });

            chart.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate("+margin.left+","+ height+")")
              .call(xAxis)
              .append("text")
              .style("text-anchor", "end")
              .text("Movie Title");

            chart.append("g")
              .attr("class", "y axis")
              .attr("transform", "translate("+margin.left+",0)")
              .call(yAxis)
              .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 6)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("Ratings");
          });

          function type(d) {
            d.title = +d.title; // coerce to number
            return d;
          }
        })
      }
    }
  }]);

