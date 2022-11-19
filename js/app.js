/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navbar__list = document.getElementById("navbar__list");
const sectionList = Array.from(document.querySelectorAll("section"));
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
sectionList.forEach((element) => {
  let creatNewListItem = document.createElement("li");
  creatNewListItem.innerHTML = `<a href = "#${element.id}" data-nav = "${element.id}" class = "menu__link">${element.dataset.nav}</a>`;
  navbar__list.appendChild(creatNewListItem);
  // console.log(element);
});

// Add class 'active' to section when near top of viewport
window.onscroll = function () {
  sectionList.forEach((element1) => {
    if (
      element1.getBoundingClientRect().top >= -400 &&
      element1.getBoundingClientRect().top <= 150
    ) {
      element1.classList.add("your-active-class");

      const list_items = document.querySelectorAll("a");
      list_items.forEach(element=>{
        element.classList.remove("title_li");
        console.log(element1.dataset.nav)
        console.log(element.dataset.nav)
        if(element.dataset.nav === element1.dataset.nav)
        {
          element.classList.add("title_li");

        }
      });
    }
       else {
      element1.classList.remove("your-active-class");
    }
  });
};
const list_items = document.querySelectorAll("a");
// Scroll to anchor ID using scrollTO event
navbar__list.addEventListener("click", (eo) => {
  eo.preventDefault();
  if (eo.target.dataset.nav) {
    
     list_items.forEach(element=>{
      //remove all style on items 
      element.classList.remove("title_li");
    });
    // then add new style in selected list 
    eo.target.classList.add("title_li");
    document
      .getElementById(`${eo.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${eo.target.dataset.nav}`;
    }, 500);
  } else {
    // forEach(elment in eo.target.parentNode )
    // eo.target.classList.remove("title_li");
  }
});
// TODO: add more section dynamicly

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
