/**
 * Created by kg on 5/31/15.
 */
angular.module('movieComparatorApp.directives', ['movieComparatorApp.d3'])
  .directive('cbdMarketData', ['d3Service', function(d3Service) {
    return {
      restrict: 'E',
      scope: { data: '=' },
      link: function (scope, element, attr) {

        d3Service.d3().then(function (d3) {

          var margin = {top: 30, right: 50, bottom: 50, left: 50},
            width = 600 - margin.left - margin.right,
            height = 270 - margin.top - margin.bottom;

          //var margin = {top: 30, right: 50, bottom: 50, left: 50},
          //  width = 400 - margin.left - margin.right,
          //  height = 200 - margin.top - margin.bottom;

          var parseDate = d3.time.format("%0m/%0d/%Y").parse,
          formatDate = d3.time.format("%d-%b"),


          //tooltip
          bisectDate = d3.bisector(function(d) { return d.date; }).left; // **

          var x = d3.time.scale().range([0, width]);
          var y0 = d3.scale.linear().range([height, 0]);
          var y1 = d3.scale.linear().range([height, 0]);

          var xAxis = d3.svg.axis().scale(x)
            .orient("bottom").ticks(5);

          var yAxisLeft = d3.svg.axis().scale(y0)
            .orient("left").ticks(5);

          var yAxisRight = d3.svg.axis().scale(y1)
            .orient("right").ticks(5);

          var valueline = d3.svg.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y0(d.vacancy); });

          var valueline2 = d3.svg.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y1(d.rent); });

          var svg = d3.select("body")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

// Get the data
          d3.json("data/data.json", function(error, data) {
            //alert(error);
            console.log(data);
            data.forEach(function(d) {
              d.date = parseDate(d.date);
              d.vacancy= +d.vacancy;
              d.rent= +d.rent;
            });

            console.log(data);

            //http://jsfiddle.net/anupvarghese/bhyvn5hv/2/
            // Scale the range of the data
            x.domain(d3.extent(data, function(d) { return d.date; }));
            //x.domain([new Date(2013,12,1), new Date(2015,4,1)]);
            y0.domain([d3.min(data, function(d) {
              return Math.min(d.vacancy); })-3, d3.max(data, function(d) {
              return Math.max(d.vacancy); })+3]);
            y1.domain([d3.min(data, function(d) {
              return Math.min(d.rent); })-3, d3.max(data, function(d) {
              return Math.max(d.rent); })+3]);

            var quarter = function(date, i){
              if(i > 0){

                var date2 = new Date();
                date2.setMonth(date.getMonth() - 1);
                q = Math.ceil(( date2.getMonth()) / 3 );
                return "Q" + q;
              }
            };


            var monthformat = d3.time.format("%B");
            var yearformat = d3.time.format("%Y");
            //var xAxis1 = d3.svg.axis()
            //  .scale(x)
            //  //.ticks(d3.time.months)
            //  .tickFormat(monthformat)
            //  .tickSize(5,0)
            //  .orient("bottom");

            var xAxis2 = d3.svg.axis()
              .scale(x)
              .ticks(d3.time.years, 1)
              .tickFormat(yearformat)
              .tickSize(5,0)
              .orient("bottom");

            var xAxis3 = d3.svg.axis()
              .scale(x)
              .orient("bottom")
              .ticks(d3.time.months, 3)
              .tickSize(5, 0)
              .tickFormat(quarter);

            // for tooltip

            var focus = svg.append("g")                                // **********
              .style("display", "none");                             // **********

            //legend stand ins

            svg.append("text")
              .attr('x', '0').attr('y','0')
              .text('Central Business District')
              .attr('font-family', 'sans-serif')
              .attr('font-size', '20px')
              .attr('fill', 'black');

            svg.append("text")
              .attr('x', '20').attr('y','20')
              .text('Total Vacancy Rate')
              .attr('font-family', 'sans-serif')
              .attr('font-size', '10px')
              .attr('fill', 'steelblue');

            svg.append("text")
              .attr('x', '20').attr('y','35')
              .text('Weight Average Asking Lease Rate')
              .attr('font-family', 'sans-serif')
              .attr('font-size', '10px')
              .attr('fill', 'red');

            svg.append("path")        // Add the valueline path.
              .attr("d", valueline(data));

            svg.append("path")        // Add the valueline2 path.
              .style("stroke", "red")
              .attr("d", valueline2(data));

            //svg.append("g")            // Add the X Axis
            //  .attr("class", "x axis")
            //  .attr("transform", "translate(0," + height + ")")
            //  .call(xAxis);

            svg.append("g")
              .attr("class", "y axis")
              .style("fill", "steelblue")
              .call(yAxisLeft);

            svg.append("g")
              .attr("class", "y axis")
              .attr("transform", "translate(" + width + " ,0)")
              .style("fill", "red")
              .call(yAxisRight);

            svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + (height + 25) + ")")
              .call(xAxis3);

            svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis2);


            // append the circle at the intersection               // **********
            focus.append("circle")                                 // **********
              .attr("class", "circy0")                                // **********
              .style("fill", "none")                             // **********
              .style("stroke", "steelblue")                           // **********
              .attr("r", 4);

            focus.append("circle")                                 // **********
              .attr("class", "circy1")                                // **********
              .style("fill", "none")                             // **********
              .style("stroke", "red")                           // **********
              .attr("r", 4);

            // place the value at the intersection
            focus.append("text")
              .attr("class", "y01")
              .style("stroke", "white")
              .style("stroke-width", "3.5px")
              .style("opacity", 0.8)
              .style("font-size", "10px")
              .attr("dx", 8)
              .attr("dy", "-.3em");
            focus.append("text")
              .attr("class", "y02")
              .attr("dx", 8)
              .attr("dy", "-.3em")
              .style("font-size", "10px");

            // place the date at the intersection
            focus.append("text")
              .attr("class", "y03")
              .style("stroke", "white")
              .style("stroke-width", "3.5px")
              .style("opacity", 0.8)
              .style("font-size", "10px")
              .attr("dx", 8)
              .attr("dy", "1em");
            focus.append("text")
              .attr("class", "y04")
              .attr("dx", 8)
              .attr("dy", "1em")
              .style("font-size", "10px");

            // Anzeige auf der Zeitleiste
            focus.append("line")
              .attr("class", "x")
              .attr("y1", height)
              .attr("y2", 0)
              .style("stroke", "black")
              .style("stroke-dasharray", "1")
              .style("opacity", 1);

            // Anzeige auf der linken Leiste
            focus.append("line")
              .attr("class", "y0")
              .attr("x1", width) // nach links
              .attr("x2", width) // nach rechts
              .style("stroke", "steelblue")
              .style("stroke-dasharray", "1")
              .style("opacity", 1);

            // Anzeige auf der rechten Leiste
            focus.append("line")
              .attr("class", "y1")
              .attr("x1", width)
              .attr("x2", width)
              .style("stroke", "red")
              .style("stroke-dasharray", "1")
              .style("opacity", 1);

            // append the rectangle to capture mouse               // **********
            svg.append("rect")                                     // **********
              .attr("width", width)                              // **********
              .attr("height", height)                            // **********
              .style("fill", "none")                             // **********
              .style("pointer-events", "all")                    // **********
              .on("mouseover", function() { focus.style("display", null); })
              .on("mouseout", function() { focus.style("display", "none"); })
              .on("mousemove", mousemove);                       // **********

            //tooltip
            function mousemove() {                                 // **********
              var x0 = x.invert(d3.mouse(this)[0]),              // **********
                i = bisectDate(data, x0, 1),                   // **********
                d0 = data[i - 1],                              // **********
                d1 = data[i],                                  // **********
                d = x0 - d0.date > d1.date - x0 ? d1 : d0;     // **********

              focus.select("circle.circy0").attr("transform","translate(" + x(d.date) + "," + y0(d.vacancy) + ")");

              focus.select("circle.circy1").attr("transform","translate(" + x(d.date) + "," + y1(d.rent) + ")");

              focus.select("text.y01").attr("transform","translate(" + x(d.date) + "," +y0(d.vacancy) + ")").text(d.vacancy);
              focus.select("text.y02").attr("transform","translate(" + x(d.date) + "," +y0(d.vacancy) + ")").text(d.vacancy);
              focus.select("text.y03").attr("transform","translate(" + x(d.date) + "," +y0(d.vacancy) + ")").text(formatDate(d.date));
              focus.select("text.y04").attr("transform","translate(" + x(d.date) + "," +y0(d.vacancy) + ")").text(formatDate(d.date));
              //focus.select(".x").attr("transform","translate(" + x(d.date) + "," +y0(d.vacancy) + ")").attr("y2", height - y0(d.vacancy));
              //focus.select(".x").attr("transform","translate(" + x(d.date) + "," + "0)").attr("y2", y0(d.vacancy));
              focus.select(".x").attr("transform","translate(" + x(d.date) + "," + "0)").attr("y2", y0(d.vacancy));
              focus.select(".y0").attr("transform","translate(" + width * -1 + ","+y0(d.vacancy) + ")").attr("x2", width +x(d.date));
              //focus.select(".y0").attr("transform","translate(" + width * -1 + "," +y0(d.vacancy) + ")").attr("x2", width + width);
              focus.select(".y1").attr("transform","translate(0, " + y1(d.rent) + ")").attr("x1", x(d.date));

              //focus.select(".y0").attr("transform", "translate(" + main_width * -1 + ", " + main_y0(d.Durchschn) + ")").attr("x2", main_width + main_x(d.Uhrzeit));
              //focus.select(".y1").attr("transform", "translate(0, " + main_y1(d.Anz) + ")").attr("x1", main_x(d.Uhrzeit));


            }

          });

        });
      }
    }
  }]);
