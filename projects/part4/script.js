const toggleNavDropdown = () => {
    const dropDown = document.getElementById("main-nav");
    dropDown.classList.toggle("hidden");
    //alert("dropdown");
}

window.onload = () => {
    document.getElementById("arrow").onpointerdown = toggleNavDropdown;
    toggleNavDropdown();
}


