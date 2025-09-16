function exercise1Dis() {
    //alert("exercise1 display");
    const exer1 = document.getElementById("exercise1");
    const exer2 = document.getElementById("exercise2");
    exer1.style.display = "block";
    exer2.style.display = "none";
}
function exercise2Dis() {
    //alert("exercise2 display");
    const exer1 = document.getElementById("exercise1");
    const exer2 = document.getElementById("exercise2");
    exer1.style.display = "none";
    exer2.style.display = "block";
    exercise2();
}

const exercise1 = () => {
    const plantRange = document.getElementById("plantRange");
    const plantText = document.getElementById("plant-text");
    const plantImg = document.getElementById("plant-img");
    const plantHelp = document.getElementById("plant-help");
    //alert(plantRange.value);
    plantText.innerHTML = "It's been " + plantRange.value + " days since watering your plant.";
    if(plantRange.value <= 2){
        //alert("working");
        plantImg.src = "images/plant1.png";
        plantHelp.innerHTML = "Your plant is healthy and happy";
    }
    if(plantRange.value <= 5 && plantRange.value >= 3){
        plantImg.src = "images/plant2.png";
        plantHelp.innerHTML = "Your plant needs watering";
    }
    if(plantRange.value <= 9 && plantRange.value >= 6){
        plantImg.src = "images/plant3.png";
        plantHelp.innerHTML = "Leaves are dropping and the color is changing, water soon";
    }
    if(plantRange.value >= 10){
        plantImg.src = "images/plant4.png";
        plantHelp.innerHTML = "Sorry, your plant is no longer with us";
    }

};
const exercise2 = () => {
    const clockText = document.getElementById("clock");
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    if(hour > 12){
        hour = hour - 12;
    }
    clockText.innerHTML = "The current time is " + hour + ":" + (minute < 10 ? '0' : '') + minute;
};

const toggleDropdown = () => {
    //alert("dropdown");
    const arrow = document.getElementById("arrow");
    const hidden = document.getElementById("main-nav");
    //if up arrow, make down arrow
    if(arrow.style.borderColor == "transparent transparent black"){
        arrow.style.borderColor = "black transparent transparent transparent";
        
        //alert("arrow now down");
    } else {
        arrow.style.borderColor = "transparent transparent black transparent";
        //alert("arrow now up");
        //hidden.classList.toggle("hidden");
    }
    hidden.classList.toggle("hidden");
    //alert(arrow.style.borderColor);
};

window.onload = () => {
    document.getElementById("plantRange").addEventListener("input", exercise1);
    document.getElementById("arrow").onpointerdown = toggleDropdown
}
