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
    true_answers = ["option4","option2","option1","option4"];
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
