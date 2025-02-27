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
    const mow = sessionStorage.mowerValue;
    const rak = sessionStorage.rakeValue;
    const edg = sessionStorage.edgerValue;
    const lea = sessionStorage.leafValue;
    const spr = sessionStorage.spreadValue;

    const mul = sessionStorage.mulchValue;
    const str = sessionStorage.strawValue;
    const tre = sessionStorage.treeValue;
    const flo = sessionStorage.flowerValue;

    

    const cartMessage = document.getElementById("cart-txt");


    //When mower button is clicked
    if(title.localeCompare(equip) === 0 ){
    document.querySelector(".mower-cart").onclick = function (){
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
        let temp = ["Rake", mow];
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
        let temp = ["Edger", mow];
        let test = "";
        cartArray.push(temp);
        for(let i=0; i<cartArray.length; i++){
            test = test + "\n" + cartArray[i];
        }
        cartMessage.innerHTML = test;
        localStorage.setItem("cart-out", JSON.stringify(cartArray));

    }
    document.querySelector(".leaf-cart").onclick = function (){
        let temp = ["Leaf Blower", mow];
        let test = "";
        cartArray.push(temp);
        for(let i=0; i<cartArray.length; i++){
            test = test + "\n" + cartArray[i];
        }
        cartMessage.innerHTML = test;
        localStorage.setItem("cart-out", JSON.stringify(cartArray));

    }
    document.querySelector(".spread-cart").onclick = function (){
        let temp = ["Spreader", mow];
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
        let temp = ["Mulch", mow];
        let test = "";
        cartArray.push(temp);
        for(let i=0; i<cartArray.length; i++){
            test = test + "\n" + cartArray[i];
        }
        cartMessage.innerHTML = test;
        localStorage.setItem("cart-out", JSON.stringify(cartArray));

    }
    document.querySelector(".straw-cart").onclick = function (){
        let temp = ["Pine Straw", mow];
        let test = "";
        cartArray.push(temp);
        for(let i=0; i<cartArray.length; i++){
            test = test + "\n" + cartArray[i];
        }
        cartMessage.innerHTML = test;
        localStorage.setItem("cart-out", JSON.stringify(cartArray));

    }
    document.querySelector(".tree-cart").onclick = function (){
        let temp = ["Pine Tree", mow];
        let test = "";
        cartArray.push(temp);
        for(let i=0; i<cartArray.length; i++){
            test = test + "\n" + cartArray[i];
        }
        cartMessage.innerHTML = test;
        localStorage.setItem("cart-out", JSON.stringify(cartArray));

    }
    document.querySelector(".flower-cart").onclick = function (){
        let temp = ["Flowers", mow];
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
        final2 = parseInt(final2) + parseInt(num);
        //alert(final2);
    }
    iN.innerHTML = test;
    iP.innerHTML = final;
    fT.innerHTML = "Total Price: " + final2;
    
}

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
    document.getElementById("mower").onpointerdown = addCart;
    document.getElementById("rake").onpointerdown = addCart;
    document.getElementById("edger").onpointerdown = addCart;
    document.getElementById("leaf").onpointerdown = addCart;
    document.getElementById("spread").onpointerdown = addCart;
   }
   if(title.localeCompare(plants) === 0) {
    //alert("plants");
        document.getElementById("mulch").onpointerdown = addCart;
        document.getElementById("straw").onpointerdown = addCart;
        document.getElementById("tree").onpointerdown = addCart;
        document.getElementById("flower").onpointerdown = addCart;
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
