// global identifiers
const burg = document.getElementById("navBurger-item")
 
// menu subcontent identifiers
const wbtn = document.getElementById("w-btn");
const wcontent = document.getElementById("women-content");
const mbtn = document.getElementById("m-btn");
const mcontent = document.getElementById("men-content");
const sbtn = document.getElementById("s-btn");
const scontent = document.getElementById("sale-content");


// 
// function for button clicks
const btnClicks = (anyButton, anyContent) => {
    anyButton.onclick = () => {
        toggleMenus(anyContent)
    }
}

// ID -> Style
// toggles display of menu on/off. Helper function for any button
const toggleMenus = (content) => {
    if(content.style.display !== "none") {
        content.style.display = "none";
    } else {
        content.style.display = "block"
    };
};

btnClicks(wbtn, wcontent); // click button and toggle women submenu
btnClicks(mbtn, mcontent); // click button and toggle men submenu
btnClicks(sbtn, scontent); // click button and toggle sale submenu