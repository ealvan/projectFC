var ctx = document.getElementById('myChart').getContext("2d");
var velObj = document.getElementById("velocity");
var velocity = parseFloat(velObj.valueAsNumber);
// console.log(velObj);
function main(){
    velObj.addEventListener("change",velocityGraph);
}

Chart.pluginService.register({
    beforeInit: function(chart) {
        // We get the chart data
        var data = chart.config.data;
        ctx = chart.chart.ctx;
        ctx.restore();
        console.log("****Funcion beforeInit called");
        // For every dataset ...
        //data.datasets.length
        for (let i = 0; i < 1; i++) {
            // console.log(velocity);
            // For every label ...
            for (let j = 0; j < data.labels.length; j++) {    
                // We get the dataset's function and calculate the value
                var fct = data.datasets[i].function,
                    x = data.labels[j],
                    y = fct(x);
                console.log(y);
                // Then we add the value to the dataset data
                data.datasets[i].data.push(y);
                console.log("*Item=",y);
            }
        }
        ctx.save();
    },
});


// myChart.update(); 
function velocityGraph(e){
    velocity = parseFloat(e.target.value);

    console.log("**Init function",velocity);
    let items = 5;
    const labels = [];
    // filling
    for(let i = 0; i < items; ++i){
        labels.push(i);
    }
    console.log(labels);

    var data = {
        labels: labels,
        datasets: 
        [
            {
                label: "f(x) = x", // Name it as you want
                function: function(x) { return x*velocity },
                data: [], // Don't forget to add an empty data array, or else it will break
                borderColor: "rgba(75, 192, 192, 1)",
                fill: false,
            }        
        ]
    }

    var config = {
        type: "line",
        data: data,
        options: {
            maintainAspectRatio: true,
            responsive:false,
        } 
    }

    var myChart = new Chart(ctx, config);
    
    console.log("****Sucess****");
}

function addData(chart, label, data) {
    // chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    // chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}
 
function updateConfigAsNewObject(chart) {
    chart.options = {
        options: {
            maintainAspectRatio: true,
            responsive:false,
            scales: {
                yAxes: [{
                    ticks: {
                        fontSize: 30
                    }
                }],
                xAxes:  [{
                    ticks: {
                     fontSize: 30
                    }
                   }]
            }

        } 
    };
    // removeData(chart);
    chart.update();
}
main();

// var ctx = document.getElementById('myChart').getContext("2d");
// var velObj = document.getElementById("velocity");
// var velocity = parseFloat(velObj.value);

// var data = {
//     labels: [1, 2, 3, 4, 5],
//     datasets: 
//     [
//         {
//             label: "f(x) = x", // Name it as you want
//             function: function(x) { return x },
//             data: [], // Don't forget to add an empty data array, or else it will break
//             borderColor: "rgba(75, 192, 192, 1)",
//             fill: false
//         },
//         {
//             label: "f(x) = x²",
//             function: function(x) { return x*x },
//             data: [],
//             borderColor: "rgba(153, 102, 255, 1)",
//             fill: false
//         }
//     ]
// }
// var hola="Hola amigos";
// Chart.pluginService.register({
//     beforeInit: function(chart) {
//         // We get the chart data
//         var data = chart.config.data;

//         // For every dataset ...
//         for (var i = 0; i < data.datasets.length; i++) {
//             console.log(hola,velocity);
//             // For every label ...
//             for (var j = 0; j < data.labels.length; j++) {

//                 // We get the dataset's function and calculate the value
//                 var fct = data.datasets[i].function,
//                     x = data.labels[j],
//                     y = fct(x);
//                 // Then we add the value to the dataset data
//                 data.datasets[i].data.push(y);
//             }
//         }
//     }
// });

// var config = {
//     type: "line",
//     data: data,
//     options: {
//         maintainAspectRatio: false,
//         responsive:false,
//     } 
// }

// var myChart = new Chart(ctx, config);



// var stars = [135850, 52122, 148825, 16939, 9763];
// var frameworks = ['React', 'Angular', 'Vue', 'Hyperapp', 'Omi'];

// var ctx = document.getElementById('myChart').getContext("2d");

// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: frameworks,
//         datasets: [{
//             label: 'Popular JavaScript Frameworks',
//             data: stars,
//             backgroundColor: [
//                 "rgba(255, 99, 132, 0.2)",
//                 "rgba(54, 162, 235, 0.2)",
//                 "rgba(255, 206, 86, 0.2)",
//                 "rgba(75, 192, 192, 0.2)",
//                 "rgba(153, 102, 255, 0.2)"
//                 ],
//             borderColor: [
//                 "rgba(0,0,0,0.9)",
//             ],
//             borderWidth: 1,
//             fill: false,
//             lineTension: 0
//         }],
//      },
//     options: {
//         maintainAspectRatio: false,
//         responsive:false,
//     } 
//  }
// )
// const ctx = document.getElementById('myChart').getContext('2d');

// const myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 9, 3],
//             backgroundColor: [
//                 'rgba(255, 29, 13, 0.7)',
//                 'rgba(24, 12, 235, 0.7)',
//                 'rgba(255, 103, 43, 0.7)',
//                 'rgba(23, 192, 192, 0.7)',
//                 'rgba(75, 51, 255, 0.7)',
//                 'rgba(255, 75, 32, 0.7)'
//             ],
//             borderColor: [
//                 'rgba(0,0,0, 1)',
//                 'rgba(0,0,0, 1)',
//                 'rgba(0,0,0, 1)',
//                 'rgba(0,0,0, 1)',
//                 'rgba(0,0,0, 1)',
//                 'rgba(0,0,0, 1)',
//             ],
//             borderWidth: 1,
//             fill: false,
//             lineTension: 0.5
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             },
//         },
//         maintainAspectRatio: false,
//         responsive: false,

//     }
// });
//     options: {
//         maintainAspectRatio: false,
//         responsive:false,
//     } 
