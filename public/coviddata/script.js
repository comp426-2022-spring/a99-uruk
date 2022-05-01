const showDataButtonUS = document.getElementById('showDataButtonUS')
console.log(document.getElementById('test'))
showDataButtonUS.addEventListener("click",fetchUsData)
function fetchUsData() {
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
        
        // OUTCOMES  //

        // Hospitalized
        document.getElementById("totalHosp").innerHTML = result.data[0].outcomes.hospitalized.currently.value;
        document.getElementById("population_percent_hosp").innerHTML = result.data[0].outcomes.hospitalized.currently.calculated.population_percent;
        document.getElementById("change_from_prior_day_hosp").innerHTML = result.data[0].outcomes.hospitalized.currently.calculated.change_from_prior_day;
        document.getElementById("seven_day_change_percent_hosp").innerHTML = result.data[0].outcomes.hospitalized.currently.calculated.seven_day_change_percent;
        document.getElementById("seven_day_average_hosp").innerHTML = result.data[0].outcomes.hospitalized.currently.calculated.seven_day_average;

        // In the ICU
        document.getElementById("totalICU").innerHTML = result.data[0].outcomes.hospitalized.in_icu.currently.value;
        document.getElementById("population_percent_icu").innerHTML = result.data[0].outcomes.hospitalized.in_icu.currently.calculated.population_percent;
        document.getElementById("change_from_prior_day_icu").innerHTML = result.data[0].outcomes.hospitalized.in_icu.currently.calculated.change_from_prior_day;
        document.getElementById("seven_day_change_percent_icu").innerHTML = result.data[0].outcomes.hospitalized.in_icu.currently.calculated.seven_day_change_percent;
        document.getElementById("seven_day_average_icu").innerHTML = result.data[0].outcomes.hospitalized.in_icu.currently.calculated.seven_day_average;

        // On Ventilator
        document.getElementById("totalVent").innerHTML = result.data[0].outcomes.hospitalized.on_ventilator.currently.value;
        document.getElementById("population_percent_vent").innerHTML = result.data[0].outcomes.hospitalized.on_ventilator.currently.calculated.population_percent;
        document.getElementById("change_from_prior_day_vent").innerHTML = result.data[0].outcomes.hospitalized.on_ventilator.currently.calculated.change_from_prior_day;
        document.getElementById("seven_day_change_percent_vent").innerHTML = result.data[0].outcomes.hospitalized.on_ventilator.currently.calculated.seven_day_change_percent;
        document.getElementById("seven_day_average_vent").innerHTML = result.data[0].outcomes.hospitalized.on_ventilator.currently.calculated.seven_day_average;

        // Deaths
        document.getElementById("totalDeaths").innerHTML = result.data[0].outcomes.death.total.value;
        document.getElementById("population_percent_deaths").innerHTML = result.data[0].outcomes.death.total.calculated.population_percent;
        document.getElementById("change_from_prior_day_deaths").innerHTML = result.data[0].outcomes.death.total.calculated.change_from_prior_day;
        document.getElementById("seven_day_change_percent_deaths").innerHTML = result.data[0].outcomes.death.total.calculated.seven_day_change_percent;
        document.getElementById("seven_day_average_deaths").innerHTML = result.data[0].outcomes.hospitalized.on_ventilator.currently.calculated.seven_day_average;

        let hospitalized = result.data[0].outcomes.hospitalized.currently.value;
        let icu = result.data[0].outcomes.hospitalized.in_icu.currently.value;
        let vent = result.data[0].outcomes.hospitalized.on_ventilator.currently.value;
        let dead = result.data[0].outcomes.death.total.calculated.change_from_prior_day;
        

        let labels1 = ["Hospitalized", "In ICU", "On Ventilator", "Deaths"];
        let data1 = [hospitalized, icu, vent, dead];
        
        let colors1 = ['#0000FF', '#7FFF00', '#FF7F50', '#6495ED',];
        
        let myChart1 = document.getElementById("myChart").getContext('2d');
        let chart1 = new Chart(myChart1, {
            type: 'bar',
            data: {
                labels: labels1, 
                datasets: [ {
                    data: data1, 
                    backgroundColor: colors1
                }]
            },
            options: {
                title: {
                    text: "CURRENT SEVERITY CHART",
                    display: true
                },
                legend: {
                    display: false
                }
            }
        });

    })
}

var input;
function getStateName() {
    input = document.getElementById("userInput").value;
}
const showDataButtonST = document.getElementById('showDataButtonST')
showDataButtonST.addEventListener("click",fetchStData)
function fetchStData() {
    input = document.getElementById("userInput").value
    fetch('https://api.covidtracking.com/v2/states/' + input + '/daily.json')
    .then(function(response){
        return response.json();
    }) 
    .then(function(result) {
        console.log(result);


        // CASES
        document.getElementById("stateName").innerHTML = result.data[0].state;
        document.getElementById("dateUpdated_hs").innerHTML = result.data[0].date;
        document.getElementById("totalCases_hs").innerHTML = result.data[0].cases.total.value;
        document.getElementById("population_percent_hs").innerHTML = result.data[0].cases.total.calculated.population_percent;
        document.getElementById("change_from_prior_day_hs").innerHTML = result.data[0].cases.total.calculated.change_from_prior_day;
        document.getElementById("seven_day_change_percent_hs").innerHTML = result.data[0].cases.total.calculated.seven_day_change_percent;
        
        // TESTING 
        document.getElementById("totalTests_hs").innerHTML = result.data[0].tests.pcr.total.value;
        document.getElementById("population_percent_hs_tests").innerHTML = result.data[0].tests.pcr.total.calculated.population_percent;
        document.getElementById("change_from_prior_day_hs_tests").innerHTML = result.data[0].tests.pcr.total.calculated.change_from_prior_day;
        document.getElementById("seven_day_change_percent_hs_tests").innerHTML = result.data[0].tests.pcr.total.calculated.seven_day_change_percent;

        // OUTCOMES  

        // ICU
        document.getElementById("totalICU_hs").innerHTML = result.data[0].outcomes.hospitalized.in_icu.currently.value;
        document.getElementById("population_percent_hs_icu").innerHTML = result.data[0].outcomes.hospitalized.in_icu.currently.calculated.population_percent;
        document.getElementById("change_from_prior_day_hs_icu").innerHTML = result.data[0].outcomes.hospitalized.in_icu.currently.calculated.change_from_prior_day;
        document.getElementById("seven_day_change_percent_hs_icu").innerHTML = result.data[0].outcomes.hospitalized.in_icu.currently.calculated.seven_day_change_percent;
        document.getElementById("seven_day_average_hs_icu").innerHTML = result.data[0].outcomes.hospitalized.in_icu.currently.calculated.seven_day_average;

        // VENTILATOR
        document.getElementById("totalVent_hs").innerHTML = (result.data[0].outcomes.hospitalized.on_ventilator.currently.value + "");
        document.getElementById("population_percent_hs_vent").innerHTML = (result.data[0].outcomes.hospitalized.on_ventilator.currently.calculated.population_percent+ "");
        document.getElementById("change_from_prior_day_hs_vent").innerHTML = (result.data[0].outcomes.hospitalized.on_ventilator.currently.calculated.change_from_prior_day+ "");
        document.getElementById("seven_day_change_percent_hs_vent").innerHTML = (result.data[0].outcomes.hospitalized.on_ventilator.currently.calculated.seven_day_change_percent+ "");
        document.getElementById("seven_day_average_hs_vent").innerHTML = (result.data[0].outcomes.hospitalized.on_ventilator.currently.calculated.seven_day_average+ "");



        // DEATHS
        document.getElementById("totalDeaths_hs").innerHTML = (result.data[0].outcomes.death.total.value + "");
        document.getElementById("population_percent_hs_death").innerHTML = (result.data[0].outcomes.death.total.calculated.population_percent+ "");
        document.getElementById("change_from_prior_day_hs_death").innerHTML = (result.data[0].outcomes.death.total.calculated.change_from_prior_day+ "");
        document.getElementById("seven_day_change_percent_hs_death").innerHTML = (result.data[0].outcomes.death.total.calculated.seven_day_change_percent+ "");
        document.getElementById("seven_day_average_hs_death").innerHTML = (result.data[0].outcomes.death.total.calculated.seven_day_average+ "");


        let labels1 = ["Positive Cases %", "Uninfected Population %"];
        let data1 = [result.data[0].cases.total.calculated.population_percent, 100 - result.data[0].cases.total.calculated.population_percent];
        let colors1 = ['#49A9EA', '#36CAAB'];

        let myChart2 = document.getElementById("myChart2").getContext('2d');
        let chart2 = new Chart(myChart2, {
            type: 'doughnut',
            data: {
                labels: labels1, 
                datasets: [ {
                    data: data1, 
                    backgroundColor: colors1
                }]
            },
            options: {
                title: {
                    text: input.toUpperCase() + " COVID DATA",
                    display: true
                }
            }
        });

    })
}

document.getElementById("accountButton").onclick = function() {
    location.href = "http://localhost:5000/app/accountPage";
}

