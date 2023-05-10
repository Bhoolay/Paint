let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 1200
canvas.height = window.innerHeight;

let CurrentColor;

function paint(){
    $("#canvas").mousedown(function(event){
        ctx.beginPath();

        $("#canvas").mousemove(function(event){
            ctx.lineTo(event.pageX,event.pageY)
            console.log("X" ,event.pageX,"Y" ,event.pageY)
            ctx.stroke();
        })

        $("#canvas").mouseup(function(event){
            $("#canvas").unbind("mousemove");
        })
    })
}

function changeColor(color){
    CurrentColor = color.value
    ctx.strokeStyle = CurrentColor;
}

function ChangeWidth(width){
    ctx.lineWidth = width.value;
}

    // function clearScreen(){
    //     ctx.fillstyle = "white";
    //     ctx.fillRect(0,0,window.innerHeight,1200);
    // }