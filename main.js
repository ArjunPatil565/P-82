var mouse_event = "empty";
canvas=document.getElementById ("my_canvas");
ctx=canvas.getContext("2d");
radius=20;
color="orange";
width=2;
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(){
    mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(){
    mouse_event="mouseleave";
}
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(){
    mouse_event="mousedown";
    radius=document.getElementById("radius").value;
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){

    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;


if (mouse_event=="mousedown"){
    console.log("current position of x and y=");
    console.log("x = "+current_position_of_x+" y = "+current_position_of_y);
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(current_position_of_x,current_position_of_y,radius,0,2*Math.PI);
    ctx.stroke();
}