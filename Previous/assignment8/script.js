const toggleDropdown = () => {
    //document.getElementById("main-nav-items").classList.toggle("hidden");
    const exercises = document.getElementById("main-nav-items");
    exercises.classList.toggle("hidden");
    /*
    let test = 0;


    let arrow = document.getElementById("arrow");

    alert(arrowDirection);
    if(arrowDirection = 'down'){
        arrow.style.borderColor = "transparent transparent black transparent";
        arrowDirection = "up";
        alert("arrow now up");
    } else if(arrowDirection = 'up') {
        arrow.style.borderColor = "black transparent transparent transparent";
        let arrowDirection = "down";
        alert("arrow now down");
    }
    */
    /*
    if(arrowDirection = "up"){
        arrow.style.borderColor = "transparent transparent black transparent";
        let arrowDirection = "down";
        alert("work");
    }*/
    //arrow.style.borderColor = "transparent transparent black transparent";
    
    
    //alert(arrowDirection);

};

function exercise1Dis(){
    //alert("exercise1");
    const pictDis = document.getElementById("picture-choose");
    //pictDis.classList.toggle("hidden-picture-choose");
    pictDis.style.display = "none";

    const travDis = document.getElementById("traveling");
    //travDis.classList.toggle("hidden-travel");
    travDis.style.display = "inline-block";
}

function exercise1() {
    const text1 = document.getElementById("txt-transport").value;
    //const messageP = document.getElementById("message");
    const bikePic = document.getElementById("bike-test")
    const scooterPic = document.getElementById("scooter-test");
    const carPic = document.getElementById("car-test");
    const skateboardPic = document.getElementById("skateboard-test");

    const bike = "bike";
    const scooter = "scooter";
    const car = "car";
    const skateboard = "skateboard";

    //messageP.innerHTML = "Input: " + text1;

    if(text1.localeCompare(bike) === 0){
        bikePic.style.display = "block";
    } else {
        bikePic.style.display = "none";
    }

    if(text1.localeCompare(scooter) === 0){
        scooterPic.style.display = "block";
    } else {
        scooterPic.style.display = "none";
    }

    if(text1.localeCompare(car) === 0){
        carPic.style.display = "block";
    } else {
        carPic.style.display = "none";
    }

    if(text1.localeCompare(skateboard) === 0){
        skateboardPic.style.display = "inline-block";
    } else {
        skateboardPic.style.display = "none";
    }

}

function exercise2Dis(){
    //alert("exercise2");
    const pictDis = document.getElementById("picture-choose");
    //pictDis.classList.toggle("hidden-picture-choose");
    pictDis.style.display = "block";

    const travDis = document.getElementById("traveling");
    //travDis.classList.toggle("hidden-travel");
    travDis.style.display = "none";
}

function exercise2() {
    //const red = document.getElementById("heart:before");
    //const red_ = document.querySelector(".redbutton");
    document.querySelector(".red-button").onclick = function (){
        //alert("red");
        //red.style.backgroundcolor = 'red';
        document.documentElement.style.setProperty('--before-bg-color', 'red');
    }
    document.querySelector(".green-button").onclick = function (){
        //alert("green");
        document.documentElement.style.setProperty('--before-bg-color', 'green');
    }
    document.querySelector(".blue-button").onclick = function (){
        //alert("blue");
        document.documentElement.style.setProperty('--before-bg-color', 'blue');
    }
    
}

window.onload = () => {
    document.getElementById("nav-toggle").onpointerdown = toggleDropdown;
    //arrowDirection = "down";
    document.getElementById("txt-transport").onkeyup = exercise1;
    document.getElementById("red").onpointerdown = exercise2;
    document.getElementById("green").onpointerdown = exercise2;
    document.getElementById("blue").onpointerdown = exercise2;

};