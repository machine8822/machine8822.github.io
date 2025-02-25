//Create the stairs itself
function makeStairs() {
    console.log("Creating stairs");

    let stairText = document.getElementById("whole-stairs");
    stairText.innerHTML = "";
    let stairSeg = "|____|";

    //Create each stair segment
    for(let i=0; i<10; i++) {
     /*   stairText.innerHTML += i;
        stairSeg = stairSeg + "\n";
        stairText.innerHTML = stairSeg; */

        const liElem = document.createElement("li");
        liElem.style.zIndex = 1;
        
        liElem.textContent = stairSeg;

        stairText.append(liElem);

        console.log(stairText.innerHTML);
    }

    //console.log(stairSeg);
    console.log("Done creating stairs");
    disStairs();
}

//Display stairs
function disStairs() {
    console.log("Displaying stairs");
    const staDis = document.getElementById("main-content");

    staDis.classList.toggle("hidden");
}

//Start the time
function climbStairs() {
    console.log("Starting climb");
    timer = setInterval(climbing, 1500);
}
//Make the image move each interval
function climbing() {
    console.log("Moving");
    var imgMov = document.getElementById("climb-test");
    temp++;
    console.log(temp);

    if(temp === 1) {
        imgMov.src = "images/hisRight.png";
        imgMov.style.top = '-280px';
        
    }
    if(temp === 2) {
        imgMov.src = "images/hisLeft.png";
        imgMov.style.top = '-360px';
        
    }
    if(temp === 3) {
        imgMov.src = "images/hisRight.png";
        imgMov.style.top = '-450px';
        
    }
    if(temp === 4) {
        imgMov.src = "images/hisLeft.png";
        imgMov.style.top = '-540px';
        
    }
    if(temp === 5) {
        clearInterval(timer);
        console.log("Done moving");
    }
}
//Stop the time
function stopClimb() {
    clearInterval(timer);
}
let timer;
let temp = 0;
window.onload = () => {
   // document.getElementById("stair").onpointerdown = disStairs;
    document.getElementById("stair").onpointerdown = makeStairs;
    document.getElementById("climb").onpointerdown = climbStairs;
}
