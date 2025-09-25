const drawScene = () => {
    //alert("Drawing Scene");
    var paint = document.getElementById("painting");
    var brush = paint.getContext("2d");
    var body = document.getElementsByTagName("body")[0];
    //Sun and Moon
    const time = new Date();
    let hour = time.getHours();
    if (hour <= 6 && hour > 18) {
        //nighttime
        //alert("nighttime");
        body.style.backgroundColor = "black";
        brush.fillStyle = "gold";
        brush.beginPath();
        brush.arc(275, 25, 20, 0, 2 * Math.PI);
        brush.fill();
        brush.closePath();
        brush.fillStyle = "black";
        brush.beginPath();
        brush.arc(290, 25, 15, 0, 2 * Math.PI);
        brush.fill();
        brush.closePath();

    } else {
        //daytime
        //alert("daytime");
        brush.fillStyle = "yellow";
        brush.beginPath();
        brush.arc(275, 25, 20, 0, 2 * Math.PI);
        brush.fill();
        brush.closePath();
    }
    

    let trunkSpace = 0;
    //for loop for trees/clouds
    for (let a=1; a<7; a++) {
        //tree leaves
        brush.fillStyle = "green";
        brush.beginPath();
        brush.arc((35 * a), 120, 10, 0, 2 * Math.PI);
        brush.fill();
        //alert("drew circle");
        brush.closePath();

        //tree trunk
        brush.fillStyle = "brown";
        brush.fillRect((31 + trunkSpace), 130, 8, 10);
        brush.closePath();
        

        //clouds
        brush.fillStyle = "white";
        brush.beginPath();
        brush.arc((35 + trunkSpace), 60, 10, 0, 2 * Math.PI);
        brush.fill();
        brush.closePath();
        brush.beginPath();
        brush.arc((45 + trunkSpace), 65, 10, 0, 2 * Math.PI);
        brush.fill();
        brush.closePath();
        brush.beginPath();
        brush.arc((55 + trunkSpace), 60, 10, 0, 2 * Math.PI);
        brush.fill();
        brush.closePath();

        trunkSpace = trunkSpace + 35;
    }
    

}


window.onload = () => {


}