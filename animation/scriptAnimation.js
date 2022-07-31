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