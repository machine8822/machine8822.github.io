const toggleNavDropdown = () => {
    const dropDown = document.getElementById("main-nav");
    dropDown.classList.toggle("hidden");
    //alert("dropdown");
}
//JSON Cheese
const getCheese = async() => {
    const url = "https://machine8822.github.io/json/cheese.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch(error) {
        console.log(error);
    }
};
//Create Table; just setup header and use another function for each
const showCheese = async () => {
    let che = await getCheese();
    let cheeseSect = document.getElementById("main-content");

    const cheTable = document.createElement("table");
    const tHead = document.createElement("thead");
    const headRow = document.createElement("tr");
    
    const th1 = document.createElement("th");
    th1.textContent = "Image";
    const th2 = document.createElement("th");
    th2.textContent = "Name";
    const th3 = document.createElement("th");
    th3.textContent = "Type";
    const th4 = document.createElement("th");
    th4.textContent = "Location Produced";
    const th5 = document.createElement("th");
    th5.textContent = "Time Aged";
    const th6 = document.createElement("th");
    th6.textContent = "Price";

    //Create the header row and append to table
    headRow.appendChild(th1);
    headRow.appendChild(th2);
    headRow.appendChild(th3);
    headRow.appendChild(th4);
    headRow.appendChild(th5);
    headRow.appendChild(th6);
    tHead.appendChild(headRow);
    cheTable.appendChild(tHead);

    //Create table body; create new row for each item
    const tBody = document.createElement("tbody");
    che.forEach((che) => {
        const row = document.createElement("tr");
        const imgCell = document.createElement("td");
        const img = document.createElement("img");
        img.src = che.img1;
        imgCell.appendChild(img);
        row.appendChild(imgCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = che.name;
        row.appendChild(nameCell);

        const typeCell = document.createElement("td");
        typeCell.textContent = che.type;
        row.appendChild(typeCell);

        const locCell = document.createElement("td");
        locCell.textContent = che.location;
        row.appendChild(locCell);

        const ageCell = document.createElement("td");
        ageCell.textContent = che.aged;
        row.appendChild(ageCell);

        const priceCell = document.createElement("td");
        priceCell.textContent = che.price;
        row.appendChild(priceCell);
        
        tBody.appendChild(row);
    });
    cheTable.appendChild(tBody);
    cheeseSect.appendChild(cheTable);
    console.log(che);
};
//JSON Wine
const getWine = async() => {
    const url = "https://machine8822.github.io/json/wine.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch(error) {
        console.log(error);
    }
};
const showWine = async() => {
    let win = await getWine();
    let wineSect = document.getElementById("main-content");

    const winTable = document.createElement("table");
    const tHead = document.createElement("thead");
    const headRow = document.createElement("tr");
    
    const th1 = document.createElement("th");
    th1.textContent = "Image";
    const th2 = document.createElement("th");
    th2.textContent = "Name";
    const th3 = document.createElement("th");
    th3.textContent = "Type";
    const th4 = document.createElement("th");
    th4.textContent = "Location Produced";
    const th5 = document.createElement("th");
    th5.textContent = "Price";
    const th6 = document.createElement("th");
    th6.textContent = "Pairs well with"

    headRow.appendChild(th1);
    headRow.appendChild(th2);
    headRow.appendChild(th3);
    headRow.appendChild(th4);
    headRow.appendChild(th5);
    headRow.appendChild(th6);
    tHead.appendChild(headRow);
    winTable.appendChild(tHead);

    //Create table body; create new row for each item
    const tBody = document.createElement("tbody");
    win.forEach((win) => {
        const row = document.createElement("tr");
        const imgCell = document.createElement("td");
        const img = document.createElement("img");
        img.src = win.img1;
        imgCell.appendChild(img);
        row.appendChild(imgCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = win.name;
        row.appendChild(nameCell);

        const typeCell = document.createElement("td");
        typeCell.textContent = win.type;
        row.appendChild(typeCell);

        const locCell = document.createElement("td");
        locCell.textContent = win.location;
        row.appendChild(locCell);

        const priceCell = document.createElement("td");
        priceCell.textContent = win.price;
        row.appendChild(priceCell);

        const pairCell = document.createElement("td");
        pairCell.textContent = win.pair;
        row.append(pairCell);
        
        tBody.appendChild(row);
    });
    winTable.appendChild(tBody);
    wineSect.appendChild(winTable);
    console.log(win);
};
//JSON Cigars
const getCigars = async() => {
    const url = "https://machine8822.github.io/json/cigars.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch(error) {
        console.log(error);
    }
};
const showCigars = async() => {
    let cig = await getCigars();
    let cigSect = document.getElementById("main-content");

    const cigTable = document.createElement("table");
    const tHead = document.createElement("thead");
    const headRow = document.createElement("tr");
    
    const th1 = document.createElement("th");
    th1.textContent = "Image";
    const th2 = document.createElement("th");
    th2.textContent = "Name";
    const th3 = document.createElement("th");
    th3.textContent = "Type";
    const th4 = document.createElement("th");
    th4.textContent = "Location Produced";
    const th5 = document.createElement("th");
    th5.textContent = "Price";

    headRow.appendChild(th1);
    headRow.appendChild(th2);
    headRow.appendChild(th3);
    headRow.appendChild(th4);
    headRow.appendChild(th5);
    tHead.appendChild(headRow);
    cigTable.appendChild(tHead);

    //Create table body; create new row for each item
    const tBody = document.createElement("tbody");
    cig.forEach((cig) => {
        const row = document.createElement("tr");
        const imgCell = document.createElement("td");
        const img = document.createElement("img");
        img.src = cig.img1;
        imgCell.appendChild(img);
        row.appendChild(imgCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = cig.name;
        row.appendChild(nameCell);

        const typeCell = document.createElement("td");
        typeCell.textContent = cig.type;
        row.appendChild(typeCell);

        const locCell = document.createElement("td");
        locCell.textContent = cig.location;
        row.appendChild(locCell);

        const priceCell = document.createElement("td");
        priceCell.textContent = cig.price;
        row.appendChild(priceCell);
        
        tBody.appendChild(row);
    });
    cigTable.appendChild(tBody);
    cigSect.appendChild(cigTable);
    console.log(cig);
};
//Gallery
let count = 0;
function toggleGallery() {
    const gall = document.getElementById("gallery");
    
    if(count === 0) {
        gall.src = "images/wine5.jpg";
        count++;
        //alert("count0");
        return;
    }
    if(count === 1) {
        gall.src = "images/logoRed.png";
        count++;
        //alert("count1");
        return;
    }
    if(count === 2) {
        gall.src = "images/Humboldt.jpg";
        count = 0;
        //alert("count2")
        return;
    }
}

let title = document.title;
window.onload = () => {
    document.getElementById("arrow").onpointerdown = toggleNavDropdown;
    toggleNavDropdown();
    
    if(title.localeCompare("Cheese") === 0) {
        //alert("Cheese table loading");
        showCheese();
    }
    if(title.localeCompare("Wine") === 0) {
        showWine();
    }
    if(title.localeCompare("Cigar") === 0) {
        showCigars();
    }

    document.getElementById("gallery").onpointerdown = toggleGallery;
}


