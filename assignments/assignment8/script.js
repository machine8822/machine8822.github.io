const toggleDropdown = () => {
    //document.getElementById("main-nav-items").classList.toggle("hidden");
    const exercises = document.getElementById("main-nav-items");
    exercises.classList.toggle("hidden");
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
    /*
    if(arrowDirection = "up"){
        arrow.style.borderColor = "transparent transparent black transparent";
        let arrowDirection = "down";
        alert("work");
    }*/
    //arrow.style.borderColor = "transparent transparent black transparent";

    
    alert(arrowDirection);

};

function exercise1(){
    alert("working");
}

window.onload = () => {
    document.getElementById("nav-toggle").onpointerdown = toggleDropdown;
    arrowDirection = "down";

};