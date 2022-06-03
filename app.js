// Navbar identifiers
const menuBtn = document.getElementById("navBurger-item")
const navMenuContent = document.getElementById("nav-menu");
 
// menu subcontent identifiers
const wBtn = document.getElementById("w-btn");
const wcontent = document.getElementById("women-content");
const mBtn = document.getElementById("m-btn");
const mcontent = document.getElementById("men-content");
const sBtn = document.getElementById("s-btn");
const scontent = document.getElementById("sale-content");


// 
// function for button clicks
const btnClicks = (anyButton, anyContent) => {
    anyButton.onclick = () => {
        toggleMenus(anyContent)
    }
}

// ID -> Style
// toggles display of menu on/off. Extends functionality from btnClicks
const toggleMenus = (content) => {
    if(content.style.display !== "none") {
        content.style.display = "none";
    } else {
        content.style.display = "block"
    };
};

btnClicks(menuBtn, navMenuContent) // click button and toggle nav menu
btnClicks(wBtn, wcontent); // click button and toggle women submenu
btnClicks(mBtn, mcontent); // click button and toggle men submenu
btnClicks(sBtn, scontent); // click button and toggle sale submenu