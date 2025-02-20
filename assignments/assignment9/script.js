//Display stairs and the Climb stairs button
function drawStairs() {
    alert("Drawing stairs beg");

    let temp = "";
    let stairDis = document.getElementById("whole-stairs");

    for(let i=0; i<stairArray.length; i++) {
        stairArray[i] = "|__|";
    }

    for(let i=0; i<stairArray.length; i++) {
        stairDis.innerHTML = stairDis + "\n" + stairArray[i];
    }

    alert("Done Drawing stairs");
}


  
let stairArray = [];
window.onload = () => {
    document.getElementById("stair").onpointerdown = drawStairs;

}
