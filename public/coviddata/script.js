window.onload = function () {
    const showDataButtonUS = document.getElementById('showDataButtonUS')
    showDataButtonUS.addEventListener("click", fetchUsData)
    const showDataButtonST = document.getElementById('showDataButtonST')
    showDataButtonST.addEventListener("click", fetchStData)
    document.getElementById("accountButton").onclick = function () {
        location.href = "http://localhost:5000/app/accountPage";
    }
}

function fetchUsData() {
    // Get current date to put into JSON for POST
    var date = new Date();
    var current_date = (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear() + " at " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    // Stringify JSON with current date and the type of interaction
    var frontend_state_interaction = JSON.stringify({ "state": "usa", "time": current_date });

    // Set options for fetch
    var options = {
        method: "POST",
        headers: { "Content-Type": 'application/json', Accept: 'application/json' },
        body: frontend_state_interaction
    }

    // Log frontend interaction
    fetch('http://localhost:5000/app/log-frontend-interaction', options)
        .then(function (response) {
            return response.json();
        });


    // Get daily USA COVID data
    fetch('https://api.covidtracking.com/v2/us/daily.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            // CASES
            document.getElementById("totalCases").innerHTML = result.data[0].cases.total.value;
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

            // Create chart
            let labels1 = ["Hospitalized", "In ICU", "On Ventilator", "Deaths"];
            let data1 = [hospitalized, icu, vent, dead];

            let colors1 = ['#0000FF', '#7FFF00', '#FF7F50', '#6495ED',];

            let myChart1 = document.getElementById("myChart").getContext('2d');
            let chart1 = new Chart(myChart1, {
                type: 'bar',
                data: {
                    labels: labels1,
                    datasets: [{
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


function fetchStData() {
    input = document.getElementById("userInput").value;

    // Get current date to put into JSON for POST
    var date = new Date();
    var current_date = (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear() + " at " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    // Stringify JSON with current date and the type of interaction
    var frontend_state_interaction = JSON.stringify({ "state": input, "time": current_date });

    // Set options for fetch
    var options = {
        method: "POST",
        headers: { "Content-Type": 'application/json', Accept: 'application/json' },
        body: frontend_state_interaction
    }

    // Calls endpoint which logs interaction
    fetch('http://localhost:5000/app/log-frontend-interaction', options)
        .then(function (response) {
            return response.json();
        });

    // Gets state data
    fetch('https://api.covidtracking.com/v2/states/' + input + '/daily.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            // CASES
            document.getElementById("stateName").innerHTML = result.data[0].state;
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
            document.getElementById("population_percent_hs_vent").innerHTML = (result.data[0].outcomes.hospitalized.on_ventilator.currently.calculated.population_percent + "");
            document.getElementById("change_from_prior_day_hs_vent").innerHTML = (result.data[0].outcomes.hospitalized.on_ventilator.currently.calculated.change_from_prior_day + "");
            document.getElementById("seven_day_change_percent_hs_vent").innerHTML = (result.data[0].outcomes.hospitalized.on_ventilator.currently.calculated.seven_day_change_percent + "");
            document.getElementById("seven_day_average_hs_vent").innerHTML = (result.data[0].outcomes.hospitalized.on_ventilator.currently.calculated.seven_day_average + "");

            // DEATHS
            document.getElementById("totalDeaths_hs").innerHTML = (result.data[0].outcomes.death.total.value + "");
            document.getElementById("population_percent_hs_death").innerHTML = (result.data[0].outcomes.death.total.calculated.population_percent + "");
            document.getElementById("change_from_prior_day_hs_death").innerHTML = (result.data[0].outcomes.death.total.calculated.change_from_prior_day + "");
            document.getElementById("seven_day_change_percent_hs_death").innerHTML = (result.data[0].outcomes.death.total.calculated.seven_day_change_percent + "");
            document.getElementById("seven_day_average_hs_death").innerHTML = (result.data[0].outcomes.death.total.calculated.seven_day_average + "");

            // Sets data for chart headers
            let labels1 = ["Positive Cases %", "Uninfected Population %"];
            let data1 = [result.data[0].cases.total.calculated.population_percent, 100 - result.data[0].cases.total.calculated.population_percent];
            let colors1 = ['#49A9EA', '#36CAAB'];

            // Gets chart element from DOM
            let myChart2 = document.getElementById("myChart2").getContext('2d');
            let chart2 = new Chart(myChart2, {
                type: 'doughnut',
                data: {
                    labels: labels1,
                    datasets: [{
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