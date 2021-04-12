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
      var cancer_pop = [];

      for (var i = 0; i < initialChart.length; i++) {
          county.push(initialChart[i].county);
          avg_poverty.push(initialChart[i].avg_poverty_percentage);
          cancer_pop.push(initialChart[i].pop_per_100k);
      }








    });
}



//function to update charts when new state is selected
function stateOptionChanged(stateData) {
  currentState = stateData
  chartData(currentState);
};

init()