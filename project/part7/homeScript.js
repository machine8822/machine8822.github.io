const toggleNavDropdown = () => {
    const dropDown = document.getElementById("main-nav-items");
    dropDown.classList.toggle("hidden");
    //alert("dropdown");
}
function emptyCart() {
    localStorage.clear();
    cartArray = [];
    location.reload();
    alert("Cart has been emptied");
}
function buyCart() {
    localStorage.clear;
    cartArray = [];
    location.reload;
    alert("Thank you for your purchase.");
}

const toggleCartDropdown = () => {
    const dropDown = document.getElementById("cart");
    dropDown.classList.toggle("hidden-cart");
    //alert("cartdropdown");
}

//Add item to cart ased on button pushed
function addCart() {
    console.log("addCart");
    const mow = 129.99;
    const rak = 9.99;
    const edg = 99.99;
    const lea = 38.99
    const spr = 49.99;

    const mul = 3.99;
    const str = 4.99;
    const tre = 32.99;
    const flo = 6.99;
    

    const cartMessage = document.getElementById("cart-txt");

    //When mower button is clicked
    if(title.localeCompare(equip) === 0 ){
       /* if(addCart.localeCompare(equip) === 0) {
            alert("Working");
        }*/

        document.querySelector(".mower-cart").onclick = function (){
            console.log("Adding Mower2");
            let temp = ["Mower", mow];
            let test = "";
            cartArray.push(temp);
            //alert("mower");
            //alert(cartArray.length);
            for(let i=0; i<cartArray.length; i++){
                test = test + "\n" + cartArray[i];
                //alert(test);

            }
            cartMessage.innerHTML = test;
            localStorage.setItem("cart-out", JSON.stringify(cartArray));
            //localStorage.cartTotal = cartArray;
            //alert(temp);

        }

        document.querySelector(".rake-cart").onclick = function (){
            let temp = ["Rake", rak];
            let test = "";
            //alert(rak);
            cartArray.push(temp);
            for(let i=0; i<cartArray.length; i++){
                test = test + "\n" + cartArray[i];
            }
            cartMessage.innerHTML = test;
            localStorage.setItem("cart-out", JSON.stringify(cartArray));

        }
        document.querySelector(".edger-cart").onclick = function (){
            let temp = ["Edger", edg];
            let test = "";
            cartArray.push(temp);
            for(let i=0; i<cartArray.length; i++){
                test = test + "\n" + cartArray[i];
            }
            cartMessage.innerHTML = test;
            localStorage.setItem("cart-out", JSON.stringify(cartArray));

        }
        document.querySelector(".leaf-cart").onclick = function (){
            let temp = ["Leaf Blower", lea];
            let test = "";
            cartArray.push(temp);
            for(let i=0; i<cartArray.length; i++){
                test = test + "\n" + cartArray[i];
            }
            cartMessage.innerHTML = test;
            localStorage.setItem("cart-out", JSON.stringify(cartArray));

        }
        document.querySelector(".spread-cart").onclick = function (){
            let temp = ["Spreader", spr];
            let test = "";
            cartArray.push(temp);
            for(let i=0; i<cartArray.length; i++){
                test = test + "\n" + cartArray[i];
            }
            cartMessage.innerHTML = test;
            localStorage.setItem("cart-out", JSON.stringify(cartArray));

        }
        
    }
    if(title.localeCompare(plants) === 0 ){
        document.querySelector(".mulch-cart").onclick = function (){
            let temp = ["Mulch", mul];
            let test = "";
            cartArray.push(temp);
            for(let i=0; i<cartArray.length; i++){
                test = test + "\n" + cartArray[i];
            }
            cartMessage.innerHTML = test;
            localStorage.setItem("cart-out", JSON.stringify(cartArray));

        }
        document.querySelector(".straw-cart").onclick = function (){
            let temp = ["Pine Straw", str];
            let test = "";
            cartArray.push(temp);
            for(let i=0; i<cartArray.length; i++){
                test = test + "\n" + cartArray[i];
            }
            cartMessage.innerHTML = test;
            localStorage.setItem("cart-out", JSON.stringify(cartArray));

        }
        document.querySelector(".tree-cart").onclick = function (){
            let temp = ["Pine Tree", tre];
            let test = "";
            cartArray.push(temp);
            for(let i=0; i<cartArray.length; i++){
                test = test + "\n" + cartArray[i];
            }
            cartMessage.innerHTML = test;
            localStorage.setItem("cart-out", JSON.stringify(cartArray));

        }
        document.querySelector(".flower-cart").onclick = function (){
            let temp = ["Flowers", flo];
            let test = "";
            cartArray.push(temp);
            for(let i=0; i<cartArray.length; i++){
                test = test + "\n" + cartArray[i];
            }
            cartMessage.innerHTML = test;
            localStorage.setItem("cart-out", JSON.stringify(cartArray));

        }
    }
    //localStorage.setItem("cart-out", JSON.stringify(cartArray));
    //alert(mow);
}

let title = document.getElementById("title").innerHTML;
let equip = "Equipment";
let plants = "Plants";
let check = "Checkout";

function tableInput() {
    let iN = document.getElementById("item-name");
    let iP = document.getElementById("item-price");
    let fT = document.getElementById("final-total");

    let test = "";
    let final = "";
    let final2 = 0;

    for(let i=0; i<cartArray.length; i++){
        test = test + "\n" + cartArray[i][0];
        final = final + "\n"+ cartArray[i][1];
        let num = cartArray[i][1];
        final2 = parseFloat(final2) + parseFloat(num);
        //alert(final2);
    }
    iN.innerHTML = test;
    iP.innerHTML = final;
    fT.innerHTML = "Total Price: $" + final2;
    
}


//JSON Plant Area
const getPlant = async () => {
    const url = "https://machine8822.github.io/json/plants.json";
    
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};
const showPlant = async () => {
    let plant1 = await getPlant();
    let plantSection = document.getElementById("plant-section");

    plant1.forEach((plant1) => {
        //console.log(equip1);
        plantSection.append(getPlantItem(plant1));
    });

    //console.log(equip1);
};
const getPlantItem = (plant1) => {
    let section = document.createElement("section");

    let h3 = document.createElement("h3");
    h3.innerText = plant1.name;
    section.append(h3);

    let ul = document.createElement("ul");
    section.append(ul);
    ul.append(getLi(plant1.description));
    ul.append(getLi(`Price: $${plant1.price}`));
    ul.append(getLi(`Rating: ${plant1.rating}`));
    
    let picItem = document.createElement("img");
    picItem.src = plant1.img1;
    section.append(picItem);
    if(plant1._id === "1") {
        //alert(equip1._id);
        let butItem = document.createElement("button");
        butItem.textContent = "Add to Cart";
        butItem.classList.add("mulch-cart");
        butItem.addEventListener("click", function() {
            addCart();
        });
        section.append(butItem);
    }
    if(plant1._id === "2") {
        //alert(equip1._id);
        let butItem = document.createElement("button");
        butItem.textContent = "Add to Cart";
        butItem.classList.add("straw-cart");
        butItem.addEventListener("click", function() {
            addCart();
        });
        section.append(butItem);
    }
    if(plant1._id === "3") {
        //alert(equip1._id);
        let butItem = document.createElement("button");
        butItem.textContent = "Add to Cart";
        butItem.classList.add("tree-cart");
        butItem.addEventListener("click", function() {
            addCart();
        });
        section.append(butItem);
    }
    if(plant1._id === "4") {
        //alert(equip1._id);
        let butItem = document.createElement("button");
        butItem.textContent = "Add to Cart";
        butItem.classList.add("flower-cart");
        butItem.addEventListener("click", function() {
            addCart();
        });
        section.append(butItem);
    }
    
    let footer = document.createElement("footer");
    footer.innerHTML = "`";
    section.append(footer);
    
    return section;
};
//JSON Equip Area
const getEquip = async () => {
    const url = "https://machine8822.github.io/json/equip.json";
    
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};
const showEquip = async () => {
    let equip1 = await getEquip();
    let mowerSection = document.getElementById("mow-section");

    equip1.forEach((equip1) => {
        //console.log(equip1);
        mowerSection.append(getEquipItem(equip1));
    });

    //console.log(equip1);
};
const getEquipItem = (equip1) => {
    let section = document.createElement("section");

    let h3 = document.createElement("h3");
    h3.innerText = equip1.name;
    section.append(h3);

    let ul = document.createElement("ul");
    section.append(ul);
    ul.append(getLi(equip1.description));
    ul.append(getLi(`Price: $${equip1.price}`));
    ul.append(getLi(`Rating: ${equip1.rating}`));
    
    let picItem = document.createElement("img");
    picItem.src = equip1.img1;
    section.append(picItem);
    if(equip1._id === "1") {
        //alert(equip1._id);
        let butItem = document.createElement("button");
        butItem.textContent = "Add to Cart";
        butItem.classList.add("mower-cart");
        butItem.addEventListener("click", function() {
            addCart();
            console.log("Adding Mower1");
        });
        section.append(butItem);
    }
    if(equip1._id === "2") {
        //alert(equip1._id);
        let butItem = document.createElement("button");
        butItem.textContent = "Add to Cart";
        butItem.classList.add("rake-cart");
        butItem.addEventListener("click", function() {
            addCart();
        });
        section.append(butItem);
    }
    if(equip1._id === "3") {
        //alert(equip1._id);
        let butItem = document.createElement("button");
        butItem.textContent = "Add to Cart";
        butItem.classList.add("edger-cart");
        butItem.addEventListener("click", function() {
            addCart();
        });
        section.append(butItem);
    }
    if(equip1._id === "4") {
        //alert(equip1._id);
        let butItem = document.createElement("button");
        butItem.textContent = "Add to Cart";
        butItem.classList.add("leaf-cart");
        butItem.addEventListener("click", function() {
            addCart();
        });
        section.append(butItem);
    }
    if(equip1._id === "5") {
        //alert(equip1._id);
        let butItem = document.createElement("button");
        butItem.textContent = "Add to Cart";
        butItem.classList.add("spread-cart");
        butItem.addEventListener("click", function() {
            addCart();
        });
        section.append(butItem);
    }

    //footer is there for a divider
    let footer = document.createElement("footer");
    footer.innerHTML = "`";
    section.append(footer);

    
    return section;
};
const getLi = data => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
}
let mower;

let cartArray = [];
//let cartTotal = [];
window.onload = () => {
    localStorage.mowerValue = '129.99';
    localStorage.rakeValue = '9.99';
    localStorage.edgerValue = '99.99';
    localStorage.leafValue = '38.99';
    localStorage.spreadValue = '49.99';

    localStorage.mulchValue = '3.99';
    localStorage.strawValue = '4.99';
    localStorage.treeValue = '32.99';
    localStorage.flowerValue = '6.99';
    
    cartTotal = localStorage.getItem("cart-out");
    cartTesting = JSON.parse(cartTotal);

    


    //alert(cartTesting.length);
    if(cartTesting === null){
         //alert("testing 1");
    } else {
        //alert("testing 2");
        cartMessage = document.getElementById("cart-txt");

        //alert(cartTesting.length);
        let test1 = "";
        for(let i=0; i<cartTesting.length; i++){
            test1 = test1 + "\n" + cartTesting[i];
            //alert(test1);

        }
        cartMessage.innerHTML = test1;
        cartArray = JSON.parse(cartTotal);
        
        
    }
 /*   let title = document.getElementById("title").innerHTML;
    let equip = "equipment";
    let plants = "plants";
*/
    //alert(title);

   // document.getElementById("mower").onpointerdown = addCart;
   if(title.localeCompare(equip) === 0 ){
    //alert("equipment");
    showEquip();
    //addCart();
    //document.getElementById("mower").onpointerdown = addCart;
    //document.getElementById("rake").onpointerdown = addCart;
    //document.getElementById("edger").onpointerdown = addCart;
    //document.getElementById("leaf").onpointerdown = addCart;
    //document.getElementById("spread").onpointerdown = addCart;
   }
   if(title.localeCompare(plants) === 0) {
    //alert("plants");
    showPlant();
   }
   if(title.localeCompare(check) === 0) {
    //alert("checkout");
    document.getElementById("checkout").onpointerdown = buyCart;
    tableInput();
   }
    
    

    document.getElementById("nav-toggle").onpointerdown = toggleNavDropdown;
    document.getElementById("arrow2").onpointerdown = toggleCartDropdown;
    document.getElementById("reset").onpointerdown = emptyCart;
 /*   document.getElementById("mower").onpointerdown = addCart;
    document.getElementById("rake").onpointerdown = addCart;
    document.getElementById("edger").onpointerdown = addCart;
    document.getElementById("leaf").onpointerdown = addCart;
    document.getElementById("spread").onpointerdown = addCart;
    */
}
