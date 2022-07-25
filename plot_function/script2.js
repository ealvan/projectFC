
function plot() {
    console.log("plot 1***")
    let parameters = {
        target: '#myFunction',
        data: [{
          fn: 'sin(x)', 
          color: 'red'
       }],
        grid: true,
        yAxis: {domain: [-1, 1]},
        xAxis: {domain: [0, 2*Math.PI]}
    };
    
    //`${name} is ${age} years old and likes ${food}`
    let velocity = document.querySelector("#velocidad").value;
    let initTime = 0;
    let initY = 0;
    let final_time = document.querySelector("#tiempo").value;
    let f = `x*${velocity}`
    let maxDistancia = document.querySelector("#distancia").value;

    let color = document.querySelector("#color").value;
    console.log(f); 
    console.log(velocity,final_time);    
    parameters.data[0].fn = f;
    parameters.xAxis.domain = [initTime, final_time];
    parameters.yAxis.domain = [initY, maxDistancia];
    parameters.data[0].color = color;
    parameters.target = "#myFunction";
    functionPlot(parameters);
    console.log("hello**");
}

function plot2() {    
    let parameters2 = {
        target: '#myFunction2',
        data: [{
          fn: 'sin(x)', 
          color: 'red',
       }],
        grid: true,
        yAxis: {domain: [-1, 1]},
        xAxis: {domain: [0, 2*Math.PI]}
      };
    
    let final_time = document.querySelector("#tiempo2").value;
    let maxDistancia = document.querySelector("#distancia2").value;
    let initVelocidad = document.querySelector("#V0").value;
    let aceleracion = document.querySelector("#aceleracion2").value;
    let initTime = -2;
    let initY = -1;

    let f = `${initVelocidad}*x + (1/2)*${aceleracion}*x*x`

    let color = document.querySelector("#color2").value;
    console.log(f);
    console.log(initVelocidad,final_time,f,aceleracion);
    parameters2.data[0].fn = f;
    parameters2.xAxis.domain = [initTime, final_time];
    parameters2.yAxis.domain = [initY, maxDistancia];
    parameters2.data[0].color = color;
    parameters2.target="#myFunction2";
    functionPlot(parameters2);
    console.log("hello**");
}
// plot();
// plot2();