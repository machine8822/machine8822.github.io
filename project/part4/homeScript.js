const toggleDropdown = () => {
    const dropDown = document.getElementById("main-nav-items");
    dropDown.classList.toggle("hidden");
    //alert("dropdown");
}

//Add item based on button pushed


window.onload = () => {
    document.getElementById("nav-toggle").onpointerdown = toggleDropdown;
}
