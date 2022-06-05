// icon identifiers
const hamburger = document.querySelector(".burger-menu");
const chevronWomen = document.querySelector(".fa-w");
const chevronMen = document.querySelector(".fa-m");
const chevronSale = document.querySelector(".fa-s");

// -> CSS
// animates hamberger icon
const animateBurger = () => {
    hamburger.classList.toggle("active");
    resetAllChevrons();
}

// -> CSS
// animates chevron icons
const animateWChevron = () => {
    if(chevronWomen.classList.contains("active")) {
        chevronWomen.classList.remove("active")
    } else {
        chevronWomen.classList.toggle("active");
        chevronMen.classList.remove("active");
        chevronSale.classList.remove("active");
    }

}
// -> CSS
// animates chevron icons
const animateMChevron = () => {
    if(chevronMen.classList.contains("active")) {
        chevronMen.classList.remove("active");
    } else {
        chevronMen.classList.toggle("active");
        chevronWomen.classList.remove("active");
        chevronSale.classList.remove("active");
    }
}
// -> CSS
// animates chevron icons
const animateSChevron = () => {
    if(chevronSale.classList.contains("active")) {
        chevronSale.classList.remove("active");
    } else {
        chevronSale.classList.toggle("active");
        chevronWomen.classList.remove("active");
        chevronMen.classList.remove("active");
    }
}

// -> Style
// Resets all chevron animations to initial state
const resetAllChevrons = () => {
    chevronWomen.classList.remove("active");
    chevronMen.classList.remove("active");
    chevronSale.classList.remove("active");
}

// calls animateBurger when Menu button is clicked
hamburger.addEventListener("click", animateBurger);

// Navbar identifiers
const menuBtn = document.getElementById("navBurger-item");
const navMenuContent = document.getElementById("nav-menu");

// calls animateBurger when Menu button is clicked
menuBtn.addEventListener("click", animateBurger);

// menu subcontent IDs
const wBtn = document.getElementById("w-btn");
const wcontent = document.getElementById("women-content");
const mBtn = document.getElementById("m-btn");
const mcontent = document.getElementById("men-content");
const sBtn = document.getElementById("s-btn");
const scontent = document.getElementById("sale-content");

wBtn.addEventListener("click", animateWChevron);
mBtn.addEventListener("click", animateMChevron);
sBtn.addEventListener("click", animateSChevron);

// all submenu content
const subDropdown = document.getElementsByClassName("subnav-content");

// ID ID -> Style Style
// applies onclick to any element associated with dropdown content
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
btnClicks(hamburger, navMenuContent); // click hamberger to toggle nav menu
btnClicks(wBtn, wcontent); // click button and toggle women submenu
btnClicks(mBtn, mcontent); // click button and toggle men submenu
btnClicks(sBtn, scontent); // click button and toggle sale submenu
