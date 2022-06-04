// Navbar identifiers
const menuBtn = document.getElementById("navBurger-item");
const navMenuContent = document.getElementById("nav-menu");

// menu subcontent IDs
const wBtn = document.getElementById("w-btn");
const wcontent = document.getElementById("women-content");
const mBtn = document.getElementById("m-btn");
const mcontent = document.getElementById("men-content");
const sBtn = document.getElementById("s-btn");
const scontent = document.getElementById("sale-content");

// all submenu content
const subDropdown = document.getElementsByClassName("subnav-content");

// ID ID -> Style Style
// applies onclick to any btn with dropdown content
const btnClicks = (anyButton, anyContent) => {
  anyButton.onclick = () => {
    btnToggleCheck(anyContent);
  };
};

// ID -> Style Style
// Checks whether button content was displaying prior to button click before running toggleMenus and closeDropDowns. Extens functionality from btnClicks
const btnToggleCheck = (anyContent) => {
    if(anyContent.style.display == "none") {
        closeDropdowns(subDropdown);
        toggleMenus(anyContent);
    } else {
        toggleMenus(anyContent);
    }
}

// ID -> Style
// toggles display of specific menu on/off. Extends functionality from btnClicks
const toggleMenus = (content) => {
  if (content.style.display !== "none") {
      console.log('none');
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
};

// Array -> Style
// Closes all submenu dropdowns. Extends functionality from btnClicks
const closeDropdowns = (dropDowns) => {
  for (let i = 0; i < dropDowns.length; i++) {
    dropDowns[i].style.display = "none";
  }
};

btnClicks(menuBtn, navMenuContent); // click button and toggle nav menu
btnClicks(wBtn, wcontent); // click button and toggle women submenu
btnClicks(mBtn, mcontent); // click button and toggle men submenu
btnClicks(sBtn, scontent); // click button and toggle sale submenu
