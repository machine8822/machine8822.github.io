//Display stairs and the Climb stairs button
function drawStairs() {
    alert("Drawing stairs beg");

    let temp = "";
    const staDisplay = document.getElementById("main-content");
    let stairDis = document.getElementById("txt-stairs");

    staDisplay.classList.toggle("hidden");

    for(let i=0; i<stairArray.length; i++) {
        stairArray[i] = "ab";
    }

    for(let i=0; i<stairArray.length; i++) {
        temp = temp + "\n" + stairArray[i];
        console.log(temp);
        alert("logging");
    }
    stairDis = temp;


    alert("Done Drawing stairs");
}


  
let stairArray = [];
window.onload = () => {
    document.getElementById("stair").onpointerdown = drawStairs;

}
