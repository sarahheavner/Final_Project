var currentState = "AL"
var currentYear = "2019"

// connect to json data file and console.log results
d3.json("Resources/clean_data/combineddata.json").then((data) => {
  console.log(data);
});

// Use d3 to read json data and state abbreviations to dropdown
function init () {
//create list with unique state abbreviations 
  d3.json("Resources/clean_data/combineddata.json").then((data) => {
    var unique = [];
    var state = [];
    for (var i = 0; i < data.length; i++) {
      if (!unique[data[i].us_state]) {
        state.push(data[i].us_state);
        unique[data[i].us_state] = 1;
    }}
    console.log(state);
    console.log(unique);
    //add each state abbreviation to dropdown menu
    state.forEach((state) => {
      d3.select("#selDataset").append("option")
      .text(state)
      .property("value", state);
    });
  });

  // list of years for second dropdown menu
  var year = ["2019", "2018", "2017", "2016"];
  //add each year to second dropdown menu
  year.forEach((year) => {
    d3.select("#selDataset2").append("option")
      .text(year)
      .property("value", year);
  });
  
  //initial chart filter 
  chartData(currentState, currentYear);
}


//function to filter data by state for charts
function chartData(stateData, chosenYear) {
  d3.json("Resources/clean_data/combineddata.json").then((data) => {
    //filter data by state
    var filterChart = data.filter((firstState) => firstState.us_state == stateData);
    //set result as variable and log in console
    var initialChart = filterChart;
    console.log(initialChart);

    //create empty lists for variables
    var county = [];
    var coDays = [];
    var no2Days = [];
    var ozoneDays = [];
    var so2Days = [];
    var pm2Days = [];
    var pm10Days = [];
    var cancer_pop = [];
    var povertyPercent = [];
    var good_days = [];
    var moderate_days = [];
    var unhealthy_sensitive_days = [];
    var unhealthy_days = [];
    var very_unhealthy_days = [];
    var hazardous_days = [];
    var days_with_aqi = [];

    // conditional loop that will store data in variables based on year selected
    if (chosenYear === "2019") {
       for (var i = 0; i < initialChart.length; i++) {
        county.push(initialChart[i].county);
        coDays.push(initialChart[i].days_co2019);
        no2Days.push(initialChart[i].days_no2_2019);
        ozoneDays.push(initialChart[i].days_ozone2019);     
        so2Days.push(initialChart[i].days_so2_2019);
        pm2Days.push(initialChart[i].days_pm2_2019);
        pm10Days.push(initialChart[i].days_pm10_2019);
        povertyPercent.push(initialChart[i].poverty_percentage2019);
        good_days.push(initialChart[i].good_days2019);
        moderate_days.push(initialChart[i].moderate_days2019);
        unhealthy_sensitive_days.push(initialChart[i].unhealthy_sensitive_days2019);
        unhealthy_days.push(initialChart[i].unhealthy_days2019);
        very_unhealthy_days.push(initialChart[i].very_unhealthy_days2019);
        hazardous_days.push(initialChart[i].hazardous_days2019);
        days_with_aqi.push(initialChart[i].days_with_aqi2019);
        cancer_pop.push(initialChart[i].pop_per_100k);
      };
    }

    else if  (chosenYear === "2018") {
      for (var i = 0; i < initialChart.length; i++) {
        county.push(initialChart[i].county);
        coDays.push(initialChart[i].days_co2018);
        no2Days.push(initialChart[i].days_no2_2018);
        ozoneDays.push(initialChart[i].days_ozone2018);     
        so2Days.push(initialChart[i].days_so2_2018);
        pm2Days.push(initialChart[i].days_pm2_2018);
        pm10Days.push(initialChart[i].days_pm10_2018);
        povertyPercent.push(initialChart[i].poverty_percentage2018);
        good_days.push(initialChart[i].good_days2018);
        moderate_days.push(initialChart[i].moderate_days2018);
        unhealthy_sensitive_days.push(initialChart[i].unhealthy_sensitive_days2018);
        unhealthy_days.push(initialChart[i].unhealthy_days2018);
        very_unhealthy_days.push(initialChart[i].very_unhealthy_days2018);
        hazardous_days.push(initialChart[i].hazardous_days2018);
        days_with_aqi.push(initialChart[i].days_with_aqi2018);
        cancer_pop.push(initialChart[i].pop_per_100k);
      };
    }

    else if  (chosenYear === "2017") {
      for (var i = 0; i < initialChart.length; i++) {
        county.push(initialChart[i].county);
        coDays.push(initialChart[i].days_co2017);
        no2Days.push(initialChart[i].days_no2_2017);
        ozoneDays.push(initialChart[i].days_ozone2017);     
        so2Days.push(initialChart[i].days_so2_2017);
        pm2Days.push(initialChart[i].days_pm2_2017);
        pm10Days.push(initialChart[i].days_pm10_2017);
        povertyPercent.push(initialChart[i].poverty_percentage2017);
        good_days.push(initialChart[i].good_days2017);
        moderate_days.push(initialChart[i].moderate_days2017);
        unhealthy_sensitive_days.push(initialChart[i].unhealthy_sensitive_days2017);
        unhealthy_days.push(initialChart[i].unhealthy_days2017);
        very_unhealthy_days.push(initialChart[i].very_unhealthy_days2017);
        hazardous_days.push(initialChart[i].hazardous_days2017);
        days_with_aqi.push(initialChart[i].days_with_aqi2017);
        cancer_pop.push(initialChart[i].pop_per_100k);
      };
    }

    else {
      for (var i = 0; i < initialChart.length; i++) {
        county.push(initialChart[i].county);
        coDays.push(initialChart[i].days_co2016);
        no2Days.push(initialChart[i].days_no2_2016);
        ozoneDays.push(initialChart[i].days_ozone2016);     
        so2Days.push(initialChart[i].days_so2_2016);
        pm2Days.push(initialChart[i].days_pm2_2016);
        pm10Days.push(initialChart[i].days_pm10_2016);
        povertyPercent.push(initialChart[i].poverty_percentage2016);
        good_days.push(initialChart[i].good_days2016);
        moderate_days.push(initialChart[i].moderate_days2016);
        unhealthy_sensitive_days.push(initialChart[i].unhealthy_sensitive_days2016);
        unhealthy_days.push(initialChart[i].unhealthy_days2016);
        very_unhealthy_days.push(initialChart[i].very_unhealthy_days2016);
        hazardous_days.push(initialChart[i].hazardous_days2016);
        days_with_aqi.push(initialChart[i].days_with_aqi2016);
        cancer_pop.push(initialChart[i].pop_per_100k);
      };
    }

    //log filtered results in console
    console.log(county);
    console.log(coDays);
    console.log(no2Days);
    console.log(ozoneDays);
    console.log(so2Days);
    console.log(pm2Days);
    console.log(pm10Days);
    console.log(povertyPercent);
    console.log(good_days);
    console.log(moderate_days);
    console.log(unhealthy_sensitive_days);
    console.log(unhealthy_days);
    console.log(very_unhealthy_days);
    console.log(hazardous_days);
    console.log(days_with_aqi);

    //inital charts
    //stacked bar chart
    //aqi days breakdown per county of filtered state 
    var cotrace= {
      x: county,
      y: coDays,
      name: "CO",
      type: "bar",
      width: 0.75,
      marker: {
        color: "#d966ff",
        opacity: 0.6,
      }
    };

    var no2trace = {
      x: county,
      y: no2Days,
      name: "NO2",
      type: "bar",
      width: 0.75,
      marker: {
        color: "#1a75ff",
        opacity: 0.6,
      }
    };

    var ozonetrace = {
      x: county,
      y: ozoneDays,
      name: "Ozone",
      type: "bar",
      width: 0.75,
      marker: {
        color:  "#2eb82e",
        opacity: 0.6,
      }
    };

    var so2trace = {
      x: county,
      y: so2Days,
      name: "SO2",
      type: "bar",
      width: 0.75,
      marker: {
        color: "#ffff1a",
        opacity: 0.6,
      }
    };

    var pm2trace = {
      x: county,
      y: pm2Days,
      name: "PM2.5",
      type: "bar",
      width: 0.75,
      marker: {
        color: "#ff6600",
        opacity: 0.6,
      }
    };

    var pm10trace = {
      x: county,
      y: pm10Days,
      name: "PM10",
      type: "bar",
      width: 0.75,
      marker: {
        color: "#ff1a1a",
        opacity: 0.6,
      }
    };

    var povertytrace = {
      x: county,
      y: povertyPercent,
      yaxis: 'y2',
      name: "Poverty %",
      type: "scatter",
      marker: {
        color: "black",
      },
    };

    var cancertrace = {
      x: county,
      y: cancer_pop,
      yaxis: 'y2',
      name: "Cancer Per 100K",
      type: "scatter",
      marker: {
        color: "#ff0066"
      },
    };

    var data = [pm10trace, pm2trace, so2trace, ozonetrace, no2trace, cotrace, povertytrace, cancertrace];

    var layout = {
      autosize: false,
      width: 1100,
      height: 400,
      barmode: "stack",
      xaxis: {title: 'County'},
      yaxis: {title: 'Days Contaminant Present'},
      yaxis2: {
        overlaying: 'y',
        side: 'right'
      }
    };
 
    Plotly.newPlot("bar", data, layout);


    //scatter plot
    //count of days  with moderate to poor AQI vs poverty percentage for filtered stateData
    // var povertytrace = {
    //   x: county,
    //   y: povertyPercent,
    //   name: "Poverty %",
    //   type: "scatter",
    //   marker: {
    //     color: "black"
    //   },
    // };

    // var cancertrace = {
    //   x: county,
    //   y: cancer_pop,
    //   name: "Cancer Per 100K",
    //   type: "scatter",
    //   marker: {
    //     color: "#ff0066"
    //   },
    // };

    // var hazardousDaysTrace = {
    //   x: county,
    //   y: hazardous_days,
    //   name: "Hazardous Days",
    //   type: "scatter",
    //   mode: 'markers',
    //   marker: {size: 12}
    // };

    // var veryUnhealthyTrace = {
    //   x: county,
    //   y: very_unhealthy_days,
    //   name: "Very Unhealthy Days",
    //   type: "scatter",
    //   mode: 'markers',
    //   marker: {size: 12}
    // }

    // var unhealthyTrace = {
    //   x: county, 
    //   y: unhealthy_days,
    //   name: "Unhealthy Days",
    //   type: "scatter", 
    //   mode: 'markers',
    //   marker: {size: 12}
    // }

    // var unhealthySensitiveTrace = {
    //   x: county,
    //   y: unhealthy_sensitive_days,
    //   name: "Unhealthy Sensitive Days",
    //   type: "scatter",
    //   mode: 'markers',
    //   marker: {size: 12}
    // }


    // layout = {
    //   title: "Count of Unhealthy to Hazardous Days Per County",
    //   yaxis: {title: "Days Per Classification"}
    // }

    // var scatterdata = [povertytrace, cancertrace, hazardousDaysTrace, veryUnhealthyTrace, unhealthyTrace, unhealthySensitiveTrace]

    // Plotly.newPlot('line', scatterdata, layout);


    //polar area chart 
    //total AQI days
    var polarData = document.getElementById("polarArea");

    //variable to store randomized colors
    var color = [];

    //function to create randomized color combinations 
    var dynamicColors = function() {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      return "rgb(" + r + "," + g + "," + b + ")";
    };

    //loop through length of data
    for (var i = 0; i < days_with_aqi.length; i++) {
      color.push(dynamicColors());
            }

    //set options for chart
    var polarData2 = {
      labels: county,
      datasets: [{
        data: days_with_aqi,
        backgroundColor: color,
        borderWidth: 4
      }]
    };

    var polarAreaChart = new Chart(polarData, {
      type: 'polarArea',
      data: polarData2
    });


    //dot plot
    var hazardousDaysTrace = {
      x: hazardous_days,
      y: county,
      name: "Hazardous",
      type: "scatter",
      mode: 'markers',
      marker: {
        size: 10,
        color: 'red'
      }
    };

    var veryUnhealthyTrace = {
      x: very_unhealthy_days,
      y: county,
      name: "Very Unhealthy",
      type: "scatter",
      mode: 'markers',
      marker: {
        size: 10,
        color: '#ff66a3'
      }
    }

    var unhealthyTrace = {
      x: unhealthy_days,
      y: county,
      name: "Unhealthy",
      type: "scatter", 
      mode: 'markers',
      marker: {
        size: 10,
        color: 'orange'
      }
    }

    var unhealthySensitiveTrace = {
      x: unhealthy_sensitive_days,
      y: county,
      name: "Unhealthy Sensitive",
      type: "scatter",
      mode: 'markers',
      marker: {
        size: 10,
        color: 'green'
      }
    }

    var moderateTrace = {
      x: moderate_days,
      y: county,
      name: "Moderate",
      type: "scatter",
      mode: 'markers',
      marker: {
        size: 10,
        color: 'blue'
      }
    }

    var goodTrace = {
      x: good_days,
      y: county,
      name: "Good",
      type: "scatter",
      mode: 'markers',
      marker: {
        size: 10,
        color: '#800060'
      }
    }

    layout = {
      title: "Count of Unhealthy to Hazardous Days Per County",
      width: 1100,
      height: 600,
      yaxis: {title: "County"},
      hovermode: 'closest',
      legend: {
        font: {
          size: 10,
        },
      }
    }

    var scatterdata = [hazardousDaysTrace, veryUnhealthyTrace, unhealthyTrace, unhealthySensitiveTrace, moderateTrace, goodTrace]

    Plotly.newPlot('dot', scatterdata, layout);

  });
}

  

//function to update charts when new state is selected
function stateOptionChanged(stateData) {
  currentState = stateData
  chartData(currentState, currentYear);
};

function yearOptionChanged(chosenYear) {
  currentYear = chosenYear
  chartData(currentState, currentYear);
};


init()


