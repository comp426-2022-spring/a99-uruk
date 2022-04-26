const showDataButton = document.getElementById('showDataButton')
showDataButton.addEventListener("click",fetchData)
function fetchData() {
    fetch('https://api.covidtracking.com/v2/us/daily.json')
    .then(function(response){
        return response.json();
    }) 
    .then(function(result) {
    
        console.log(result);
    
        // CASES
        document.getElementById("totalCases").innerHTML = result.data[0].cases.total.value;
        document.getElementById("dateUpdated").innerHTML = result.data[0].date;
        document.getElementById("population_percent_cases").innerHTML = result.data[0].cases.total.calculated.population_percent;
        document.getElementById("change_from_prior_day_cases").innerHTML = result.data[0].cases.total.calculated.change_from_prior_day;
        document.getElementById("seven_day_change_percent_cases").innerHTML = result.data[0].cases.total.calculated.seven_day_change_percent;

        // TESTING
        document.getElementById("totalTests").innerHTML = result.data[0].testing.total.value;
        document.getElementById("population_percent_tests").innerHTML = result.data[0].testing.total.calculated.population_percent;
        document.getElementById("change_from_prior_day_tests").innerHTML = result.data[0].testing.total.calculated.change_from_prior_day;
        document.getElementById("seven_day_change_percent_tests").innerHTML = result.data[0].testing.total.calculated.seven_day_change_percent;
        

    })
}