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
    });
}



//function to update charts when new state is selected
function stateOptionChanged(stateData) {
    currentState = stateData
    chartData(currentState);
};

init()