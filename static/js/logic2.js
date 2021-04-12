var currentState = "AL"

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
    //initial chart filter 
    chartData(currentState);
}

//function to filter data by state for charts
function chartData(stateData) {
    d3.json("Resources/clean_data/combineddata.json").then((data) => {
      //filter data by state
      var filterChart = data.filter((firstState) => firstState.us_state == stateData);
      //set result as variable and log in console
      var initialChart = filterChart;
      console.log(initialChart);
  
      //create empty lists for variables
      var county = [];
      var avg_aqi_days = [];
      var avg_good_days = [];
      var avg_moderate_days = [];
      var avg_unhealthy_sensitive_days = [];
      var avg_unhealthy_days = [];
      var avg_very_unhealthy_days = [];
      var avg_hazardous_days = [];
      var avg_co_days = [];
      var avg_no2_days = [];
      var avg_ozone_days = [];
      var avg_so2_days = [];
      var avg_pm2_days = [];
      var avg_pm10_days = [];
      var pop_per_100k = [];

      for (var i = 0; i < initialChart.length; i++) {
        county.push(initialChart[i].county);
        avg_aqi_days.push(initialChart[i].avg_aqi_days);
        avg_good_days.push(initialChart[i].avg_good_days);
        avg_moderate_days.push(initialChart[i].avg_moderate_days);
        avg_unhealthy_sensitive_days.push(initialChart[i].avg_unhealthy_sensitive_days);
        avg_unhealthy_days.push(initialChart[i].avg_unhealthy_days);
        avg_very_unhealthy_days.push(initialChart[i].avg_very_unhealthy_days);
        avg_hazardous_days.push(initialChart[i].avg_hazardous_days);
        avg_co_days.push(initialChart[i].avg_co_days);
        avg_no2_days.push(initialChart[i].avg_no2_days);
        avg_ozone_days.push(initialChart[i].avg_ozone_days);
        avg_so2_days.push(initialChart[i].avg_so2_days);
        avg_pm2_days.push(initialChart[i].avg_pm2_days);
        avg_pm10_days.push(initialChart[i].avg_pm10_days);
        pop_per_100k.push(initialChart[i].pop_per_100k);
      };
    
    
      //initial charts
      //bubble chart - AVG AQI DAYS VS CANCER RATES
      var bubbleTrace = {
        x: avg_aqi_days,
        y: pop_per_100k,
        mode: "markers",
        marker: {
          size: pop_per_100k,
          color: avg_aqi_days,
        },
        text: county
      }

      var bubbleData = [bubbleTrace];

      var bubbleLayout = {
        title: "Total Average AQI Days Vs. Lung Cancer Rates",
        hovermode: "closest",
        // width: 600,
        // height: 350,
        yaxis: { title: "Lung Cancer Rate Per 100k" },
        xaxis: { title: "Avg AQI Days"}
      };

      Plotly.newPlot("bubble", bubbleData, bubbleLayout);

      //AVG DAY CLASS VS CANCER RATES
      //good days
      var avg_goodTrace = {
        x: avg_good_days,
        y: county,
        type: "bar",
        name: "Day Count",
        orientation: 'h',
        marker: { 
          color: "#a64dff",
          opacity: 0.8
        }
      };
      
      var cancerTrace = {
        x: pop_per_100k,
        y: county,
        type: "scatter",
        mode: "line",
        name: "Cancer Rate",
        marker: {
          color: "black",
        }
      };

      var goodData = [avg_goodTrace, cancerTrace];

      var goodLayout = {
        title: "Avg Good Days Vs. Lung Cancer Rates",
        yaxis: { title: "County" },
        xaxis: { title: "Avg Good Days" },
        width: 500,
        height: 450
      };

      Plotly.newPlot("good-bar", goodData, goodLayout);

      //moderate days
      var avg_moderateTrace = {
        x: avg_moderate_days,
        y: county,
        type: "bar",
        name: "Day Count",
        orientation: 'h',
        marker: { 
          color: "#a64dff",
          opacity: 0.8
        }
      };

      var cancerTrace = {
        x: pop_per_100k,
        y: county,
        type: "scatter",
        mode: "line",
        name: "Cancer Rate",
        marker: {
          color: "black",
        }
      };

      var moderateData = [avg_moderateTrace, cancerTrace];

      var moderateLayout = {
        title: "Avg Moderate Days Vs. Lung Cancer Rates",
        yaxis: { title: "County" },
        xaxis: { title: "Avg Moderate Days" },
        width: 500,
        height: 450
      };

      Plotly.newPlot("moderate-bar", moderateData, moderateLayout);

      //unhealthy sensitive days
      var avg_usTrace = {
        x: avg_unhealthy_sensitive_days,
        y: county,
        type: "bar",
        name: "Day Count",
        orientation: 'h',
        marker: { 
          color: "#a64dff",
          opacity: 0.8
        }
      };

      var cancerTrace = {
        x: pop_per_100k,
        y: county,
        type: "scatter",
        mode: "line",
        name: "Cancer Rate",
        marker: {
          color: "black",
        }
      };

      var usData = [avg_usTrace, cancerTrace];

      var usLayout = {
        title: "Avg Unhealthy Sensitive Days Vs. Lung Cancer Rates",
        yaxis: { title: "County" },
        xaxis: { title: "Avg Unhealthy Sensitive Days" },
        width: 500,
        height: 450
      };

      Plotly.newPlot("us-bar", usData, usLayout);

      //unhealthy days 
      var avg_unhealthyTrace = {
        x: avg_unhealthy_days,
        y: county,
        type: "bar",
        name: "Day Count",
        orientation: 'h',
        marker: { 
          color: "#a64dff",
          opacity: 0.8
        }
      };

      var cancerTrace = {
        x: pop_per_100k,
        y: county,
        type: "scatter",
        mode: "line",
        name: "Cancer Rate",
        marker: {
          color: "black",
        }
      };

      var unhealthyData = [avg_unhealthyTrace, cancerTrace];

      var unhealthyLayout = {
        title: "Avg Unhealthy Days Vs. Lung Cancer Rates",
        yaxis: { title: "County" },
        xaxis: { title: "Avg Unhealthy Days" },
        width: 500,
        height: 450
      };

      Plotly.newPlot("unhealthy-bar", unhealthyData, unhealthyLayout);

      //very unhealthy days 
      var avg_vuTrace = {
        x: avg_very_unhealthy_days,
        y: county,
        type: "bar",
        name: "Day Count",
        orientation: 'h',
        marker: { 
          color: "#a64dff",
          opacity: 0.8
        }
      };

      var cancerTrace = {
        x: pop_per_100k,
        y: county,
        type: "scatter",
        mode: "line",
        name: "Cancer Rate",
        marker: {
          color: "black",
        }
      };

      var vuData = [avg_vuTrace, cancerTrace];

      var vuLayout = {
        title: "Avg Very Unhealthy Days Vs. Lung Cancer Rates",
        yaxis: { title: "County" },
        xaxis: { title: "Avg Very Unhealthy Days" },
        width: 500,
        height: 450
      };

      Plotly.newPlot("vu-bar", vuData, vuLayout);

      //hazardous days 
      var avg_hazardousTrace = {
        x: avg_hazardous_days,
        y: county,
        type: "bar",
        name: "Day Count",
        orientation: 'h',
        marker: { 
          color: "#a64dff",
          opacity: 0.8
        }
      };

      var cancerTrace = {
        x: pop_per_100k,
        y: county,
        type: "scatter",
        mode: "line",
        name: "Cancer Rate",
        marker: {
          color: "black",
        }
      };

      var hazardousData = [avg_hazardousTrace, cancerTrace];

      var hazardousLayout = {
        title: "Avg Hazardous Days Vs. Lung Cancer Rates",
        yaxis: { title: "County" },
        xaxis: { title: "Avg Hazardous Days" },
        width: 500,
        height: 450
      };

      Plotly.newPlot("hazardous-bar", hazardousData, hazardousLayout);
    });
  }



//function to update charts when new state is selected
function stateOptionChanged(stateData) {
    currentState = stateData
    chartData(currentState);
};

init()