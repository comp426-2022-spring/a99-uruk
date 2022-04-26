var input;
function getStateName() {
    input = document.getElementById("userInput").value;
}
const showDataButton = document.getElementById('showDataButton')
showDataButton.addEventListener("click",fetchData)
function fetchData() {
    input = document.getElementById("userInput").value
    fetch('https://api.covidtracking.com/v2/states/' + input + '/daily.json')
    .then(function(response){
        return response.json();
    }) 
    .then(function(result) {
        console.log(result);
        document.getElementById("stateName").innerHTML = result.data[0].state;
        document.getElementById("dateUpdated").innerHTML = result.data[0].date;
        document.getElementById("totalConfirmedCases").innerHTML = result.data[0].cases.confirmed.value;
        document.getElementById("population_percent").innerHTML = result.data[0].cases.confirmed.calculated.population_percent;
        document.getElementById("change_from_prior_day").innerHTML = result.data[0].cases.confirmed.calculated.change_from_prior_day;
        document.getElementById("seven_day_change_percent").innerHTML = result.data[0].cases.confirmed.calculated.seven_day_change_percent;
    })
}