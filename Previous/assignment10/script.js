//Add the title and img to popup; happy birthday
const happyPopup = () => {
    //alert("Happy birthday");
    const txtPop = document.getElementById("popupTitle");
    const imgPop = document.getElementById("imgpopup");

    txtPop.innerHTML = "Happy Birthday";
    //imgPop.src = "images/birthday.jpg";
    imgPop.src = imgArray[0].image;

    disPop();
}
const crazyPopup = () => {
    //alert("Crazy");
    const txtPop = document.getElementById("popupTitle");
    const imgPop = document.getElementById("imgpopup");

    txtPop.innerHTML = "Crazy Clown";
    imgPop.src = imgArray[1].image;

    disPop();
}
const rainPopup = () => {
    //alert("Raining");
    const txtPop = document.getElementById("popupTitle");
    const imgPop = document.getElementById("imgpopup");

    txtPop.innerHTML = "It's Raining";
    imgPop.src = imgArray[2].image;

    disPop();
}
const quietPopup = () => {
    //alert("Quiet");
    const txtPop = document.getElementById("popupTitle");
    const imgPop = document.getElementById("imgpopup");

    txtPop.innerHTML = "Quiet Time";
    imgPop.src = imgArray[3].image;

    disPop();
}
const shovelPopup = () => {
    //alert("Shovel");
    const txtPop = document.getElementById("popupTitle");
    const imgPop = document.getElementById("imgpopup");

    txtPop.innerHTML = "Working hard";
    imgPop.src = imgArray[4].image;

    disPop();
}
const workPopup = () => {
    //alert("Work from home");
    const txtPop = document.getElementById("popupTitle");
    const imgPop = document.getElementById("imgpopup");

    txtPop.innerHTML = "Work from Home";
    imgPop.src = imgArray[5].image;

    disPop();
}

//Display Popup
function disPop() {
    const pop = document.getElementById("pop");
    pop.style.display = "inline-block";
}
//Close popup
function closePop() {
    //alert("Closing popup");
    const pop = document.getElementById("pop");
    pop.style.display = "none";
}

let imgArray = [
    { title: "birthday", image: "images/birthday.jpg"},
    { title: "clown", image: "images/clown.jpg"},
    { title: "rain", image: "images/rain.jpg"},
    { title: "read", image: "images/read.jpg"},
    { title: "shovel", image: "images/shovel.jpg"},
    { title: "working", image: "images/work.jpg"}
];
window.onload = () => {
    createArray();

}
