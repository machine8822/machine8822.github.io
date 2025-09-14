//Sunny
const toggleSunnyText = () => {
    const sunnyText = document.getElementById("sunny-text");
    sunnyText.classList.toggle("hidden");
    //alert("toggled");
    
}
//Image Change
function imgChange() {
    //alert("Image Change");
    const sunnyImg = document.getElementById("sunny-img");
    const cloudyImg = document.getElementById("cloudy-img");
    sunnyImg.style.display = "block";
    cloudyImg.style.display = "none";
}

window.onload = () => {
    document.getElementById("sunny").onclick = toggleSunnyText;
    document.getElementById("imgchange").onclick = imgChange;
}