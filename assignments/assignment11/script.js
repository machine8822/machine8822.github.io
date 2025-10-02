class Painting {
    constructor(name, artist, image, framed) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.framed = framed;
    }
    get item() {
        modalSection = document.createElement("section");
        modalSection.classList.add("mod");

        const head = document.createElement("h1");
        head.innerText = this.name;
        modalSection.appendChild(head);

        const subHead = document.createElement("h3");
        subHead.innerText = `by ${this.artist}`;
        modalSection.appendChild(subHead);

        modalSection.appendChild(this.picture(this.image));
        

        return modalSection;
    }
    picture(image, framed) {
        const imgItem = document.createElement("img");
        
        if(this.framed == "true") {
            imgItem.style.border = "10px solid black";
            //alert("framed");
        }
        if(this.framed == "false") {
            imgItem.style.border = "none";
            //alert("not framed");
        }
        imgItem.src = image;
        return imgItem;
    }
}

const game = () => {
    paintList.append(paints[0].item);
    disModal();
}
const life = () => {
    paintList.append(paints[1].item);
    disModal();
}
const graham = () => {
    paintList.append(paints[2].item);
    disModal();
}
const master = () => {
    paintList.append(paints[3].item);
    disModal();
}
const wander = () => {
    paintList.append(paints[4].item);
    disModal();
}
function disModal() {
    document.getElementById("id01").style.display="block";
}
const clearPopup = () => {
    while(modalSection.hasChildNodes()){
        modalSection.removeChild(modalSection.firstChild);
    }
}
let modalSection;
let paints;
let paintList;
window.onload = () => {
    paints = [];
    paintList = document.getElementById("paintList");
    
    paints.push(new Painting("The Game", "Kristoffer Zetterstrand", "images/The_game,_painting_by_Kristoffer_Zetterstrand.jpg", "true"));
    paints.push(new Painting("Artist and still life", "Kristoffer Zetterstrand", "images/Artist_and_stillife,_painting_by_Kristoffer_Zetterstrand.jpg", "false"));
    paints.push(new Painting("Graham", "Kristoffer Zetterstrand", "images/Graham._Painting_by_Kristoffer_Zetterstrand.jpg", "true"));
    paints.push(new Painting("The master", "Kristoffer Zetterstrand", "images/The_master,_painting_by_Kristoffer_Zetterstrand.jpg", "false"));
    paints.push(new Painting("Wanderer", "Kristoffer Zetterstrand", "images/Wanderer,_painting_by_Kristoffer_Zetterstrand.jpg", "true"));

    for(let i in paints) {
        console.log(`Painting: ${paints[i].name}, Artist: ${paints[i].artist}, Image: ${paints[i].image}, Framed: ${paints[i].framed}`);
    }

}


