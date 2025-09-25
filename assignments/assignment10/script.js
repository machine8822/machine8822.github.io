//Fills the divs
const displayStart = () => {
    //alert("displayStart");
    const ger = document.getElementById("ger");
    const gerText = document.getElementById("gerText");
    ger.style.backgroundImage = `url(${startArray[0].image})`;
    gerText.innerHTML = "Please adopt "+startArray[0].title;

    const spam = document.getElementById("spam");
    const spamText = document.getElementById("spamText");
    spam.style.backgroundImage = `url(${startArray[1].image})`;
    spamText.innerHTML = "Please adopt "+startArray[1].title;

    const horn = document.getElementById("horn");
    const hornText = document.getElementById("hornText");
    horn.style.backgroundImage = `url(${startArray[2].image})`;
    hornText.innerHTML = "Please adopt "+startArray[2].title;

    const hollow = document.getElementById("hollow");
    const hollowText = document.getElementById("hollowText");
    hollow.style.backgroundImage = `url(${startArray[3].image})`;
    hollowText.innerHTML = "Please adopt "+startArray[3].title;
}

//Display and remove functions for each
function disGerson() {
    //alert("testing");
    const text = document.getElementById("gerText");
    text.style.display = "block";
    text.style.backgroundColor = "green";
    document.getElementById("ger").onmouseleave = remGerson;
}
function remGerson() {
    //alert("removing Gerson");
    const text = document.getElementById("gerText");
    text.style.display = "none";
}
function disSpam() {
    const text = document.getElementById("spamText");
    text.style.display = "block";
    text.style.backgroundColor = "green";
    document.getElementById("spam").onmouseleave = remSpam;
}
function remSpam() {
    const text = document.getElementById("spamText");
    text.style.display = "none";
}
function disHorn() {
    const text = document.getElementById("hornText");
    text.style.display = "block";
    text.style.backgroundColor = "green";
    document.getElementById("horn").onmouseleave = remHorn;
}
function remHorn() {
    const text = document.getElementById("hornText");
    text.style.display = "none";
}
function disHollow() {
    const text = document.getElementById("hollowText");
    text.style.display = "block";
    text.style.backgroundColor = "green";
    document.getElementById("hollow").onmouseleave = remHollow;
}
function remHollow() {
    const text = document.getElementById("hollowText");
    text.style.display = "none";
}
//Popup
function disPop() {
    const pop = document.getElementById("pop");
    pop.style.display = "block";
}
function closePop() {
    const pop = document.getElementById("pop");
    pop.style.display = "none";
}

function gersonPop() {
    //alert("gerson popup");
    const txtPop = document.getElementById("popupTitle");
    const imgPop = document.getElementById("popupImg")
    txtPop.innerHTML = finalArray[0].title + " after adoption";
    imgPop.src = finalArray[0].image;
    disPop();
}
function spamPop() {
    const txtPop = document.getElementById("popupTitle");
    const imgPop = document.getElementById("popupImg")
    txtPop.innerHTML = finalArray[1].title + " after adoption";
    imgPop.src = finalArray[1].image;
    disPop();
}
function hornPop() {
    const txtPop = document.getElementById("popupTitle");
    const imgPop = document.getElementById("popupImg")
    txtPop.innerHTML = finalArray[2].title + " after adoption";
    imgPop.src = finalArray[2].image;
    disPop();
}
function hollowPop() {
    const txtPop = document.getElementById("popupTitle");
    const imgPop = document.getElementById("popupImg")
    txtPop.innerHTML = finalArray[3].title + " after adoption";
    imgPop.src = finalArray[3].image;
    disPop();
}


let startArray = [
    { title: "Gerson", image: "images/gerson.webp"},
    { title: "Spamton", image: "images/spamton.jpg"},
    { title: "Baby Hornet", image: "images/babyHornet.jpg"},
    { title: "Hollow Knight", image: "images/hollow.webp"},
];
let finalArray = [
    { title: "Gerson", image: "images/gersonHammer.png"},
    { title: "Spamton", image: "images/spamtonNeo.png"},
    { title: "Hornet", image: "images/hornet.jpg"},
    { title: "Hollow Knight", image: "images/hollowVoid.jpg"},
];
//window.onload = displayStart;
window.onload = () => {
    //alert("testing");
    displayStart();
    document.getElementById("ger").onmouseenter = disGerson;
    document.getElementById("spam").onmouseenter = disSpam;
    document.getElementById("horn").onmouseenter = disHorn;
    document.getElementById("hollow").onmouseenter = disHollow;

}
