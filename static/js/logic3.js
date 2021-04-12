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
      var avg_poverty = [];
      var pop_per_100k = [];

      for (var i = 0; i < initialChart.length; i++) {
          county.push(initialChart[i].county);
          avg_poverty.push(initialChart[i].avg_poverty_percentage);
          pop_per_100k.push(initialChart[i].pop_per_100k);

          console.log(county);
          console.log(avg_poverty);
          console.log(pop_per_100k);
      }
      
      //initial charts
      //bubble chart - AVG AQI DAYS VS CANCER RATES
      var bubbleTrace = {
        x: avg_poverty,
        y: pop_per_100k,
        mode: "markers",
        marker: {
          color: pop_per_100k,
          size: avg_poverty,
        },
        text: county
      }

      var bubbleData = [bubbleTrace];

      var bubbleLayout = {
        title: "Avg Poverty Percent Vs. Lung Cancer Rates",
        hovermode: "closest",
        // width: 600,
        // height: 350,
        yaxis: { title: "Lung Cancer Rate Per 100k" },
        xaxis: { title: "Avg Poverty Percent"}
      };

      Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    });
}



//function to update charts when new state is selected
function stateOptionChanged(stateData) {
  currentState = stateData
  chartData(currentState);
};

init()