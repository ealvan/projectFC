
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
var train  = document.querySelector("#train");
train.onclick = move;
function move(){
    animate({
        duration: 1000,
        timing: function(timeFraction) {
            // console.log(x);
            return timeFraction;

        },
        draw: function(progress) {
            train.style.left = progress * 900 + 'px';
        }
    });

}
var train2 = document.querySelector("#train2");
train2.onclick = move2;
function move2(){
    animate({
        duration: 1000,
        timing: function(timeFraction) {
            return Math.pow(timeFraction, 2);
        },
        draw: function(progress) {
            train2.style.left = progress * 900 + 'px';
        }
    });
}

//----------------------------------------------------------------------------------
var buttonEvaluar = document.getElementById("evaluar");

buttonEvaluar.onclick = evaluar;
{/* <div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div> */}
function evaluar(){
    const errors = Array.from(document.getElementsByClassName('alert alert-danger'));
    errors.forEach(err => {
        err.remove();
    });
    const success = Array.from(document.getElementsByClassName('alert alert-success'));
    success.forEach(s => {
        s.remove();
    });

    let questions_txt = [
        document.getElementById("q1"),
        document.getElementById("q2"),
        document.getElementById("q3"),
        document.getElementById("q4"),
    ];
    
    questions = [
        document.getElementsByName("p1Options"),
        document.getElementsByName("p2Options"),
        document.getElementsByName("p3Options"),
        document.getElementsByName("p4Options")];
    true_answers = ["option5","option4","option1","option2"];
    let counter = 0;
    for(item of questions){
        if(getChecked(item) != true_answers[counter]){
            let child = document.createElement("div");
            // child.setAttribute("class","error");
            child.className = "alert alert-danger";
            child.innerHTML = "Respuesta incorrecta";

            let grandParent = questions_txt[counter];
            grandParent.appendChild(child);
        }else{
            let child = document.createElement("div");
            // child.setAttribute("class","error");
            child.className = "alert alert-success";
            child.innerHTML = "Respuesta correcta!";
            let grandParent = questions_txt[counter];
            grandParent.appendChild(child);
        }
        counter++;
    }
    // console.log(p4, getChecked(p4));
}

function getChecked(radioButton){
    var value;
    for(var i = 0; i < radioButton.length; i++){
        if(radioButton[i].checked){
            value = radioButton[i].value;
            return value;
        }
    }
    return null;
}






















