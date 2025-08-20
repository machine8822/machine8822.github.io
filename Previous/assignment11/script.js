//6 different attributes
class Pizza {
    constructor(name, ingredients, sauce, cheese, price, pic) {
        this.name = name;
        this.ingredients = ingredients;
        this.sauce = sauce;
        this.cheese = cheese;
        this.price = price;
        this.pic = pic;
    }

    get item() {
        popSection = document.createElement("section");
        popSection.classList.add("pop");

        const heading = document.createElement("h3");
        heading.innerText = this.name;
        popSection.appendChild(heading);

        const infoList = document.createElement("ul");
        popSection.appendChild(infoList);
        infoList.append(this.listItem(`Ingredients: ${this.ingredients}`));
        infoList.append(this.listItem(`Sauce: ${this.sauce}`));
        infoList.append(this.listItem(`Cheese: ${this.cheese}`));
        infoList.append(this.listItem(`Price: ${this.price}`));
        
        popSection.appendChild(this.picture(this.pic));

        return popSection;
    }
    listItem(info) {
        const liItem = document.createElement("li");
        liItem.innerText = info;
        return liItem;
    }
    picture(pic) {
        const picItem = document.createElement("img");
        picItem.src = pic;
        return picItem;
    }
    
}
let popSection;
//Change the information in the popup with data in the array
const haw = () => {
    //alert("Changing to Hawaiian");
    pizzaList.append(pizzas[0].item);
    disPop();
}
const pep = () => {
    //alert("Changing to pepperoni");
    pizzaList.append(pizzas[1].item);
    disPop();
}
const bbq = () => {
    pizzaList.append(pizzas[2].item);
    disPop();
}
const sup = () => {
    pizzaList.append(pizzas[3].item);
    disPop();
}
const veg = () => {
    pizzaList.append(pizzas[4].item);
    disPop();
}
function disPop() {
    //alert("Displaying Popup");
    document.getElementById("id01").style.display="block";
}

const clearPopup = () => {
    //alert("Clearing popup data");
    while (popSection.hasChildNodes()){
        popSection.removeChild(popSection.firstChild);
    }
    
    //const closer = document.getElementById("");
    //closer.remove();
}

let pizzas;
let pizzaList;
window.onload = () => {
    pizzas = [];
    pizzaList = document.getElementById("pizza-list");

    pizzas.push(new Pizza("Hawaiian", "Sliced Ham, Pineapple", "Tomato Sauce", "Mozzarella", "$10.99", "images/hawaiianPizza.jpeg"));
    pizzas.push(new Pizza("Pepperoni", "Pepperoni", "Tomato Sauce", "Mozzarella", "$12.99", "images/pepperoniPizza.jpeg"));
    pizzas.push(new Pizza("Barbeque Chicken", "Chicken, Red Onion, Cilantro", "Barbeque Sauce", "Mozzarella", "$14.99", "images/bbqPizza.jpeg"));
    pizzas.push(new Pizza("Supreme", "Pepperoni, Sausage, Mushrooms, Peppers, Onions", "Tomato Sauce", "Mozzarella", "$16.99", "images/supremePizza.jpg"));
    pizzas.push(new Pizza("Veggie", "Onions, Mushrooms, Peppers, Tomatoes", "Tomato or Cream Cheese", "Mozzarella", "$18.99", "images/veggiePizza.jpg"));

    for(let i in pizzas) {
        console.log(`Pizza: ${pizzas[i].name}, Ingredients: ${pizzas[i].ingredients}`);
        //pizzaList.append(pizzas[i].item);
    }
    
};
