window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;


const findNextSibling = (elem, selector) => {
  while (elem !== null) {
    elem = elem.nextElementSibling;
    if (elem.matches(selector)) return elem;
  }
  return elem;
};


const toggleBetween = (elem, a, b) => {
  return elem.classList.replace(a, b) || elem.classList.replace(b, a);
};

const calcHeights = function (elems) {
  let height = 0;


  if (elems instanceof Element) elems = [elems];

  for (const elem of elems) {

    if (elem.matches(".dropdown, .open")) {
      const parentHeight = calcHeights(elem.children);

      if (elem.matches(".open")) {
        elem.style.setProperty("--calc-height", parentHeight + "px");
      }

      height += parentHeight;
    } else {
   
      const elemHeight = elem.getBoundingClientRect().height;

      height += elem.matches(".closed") ? 0 : elemHeight;
    }
  }
  return height;
};

const toggleMenu = (dropdown, rootElem) => {
  if (!toggleBetween(dropdown, "open", "closed")) {
   
    dropdown.classList.add("open");
  }
  calcHeights(rootElem);
};

window.addEventListener("DOMContentLoaded", () => {
  const rootElem = document.querySelector("#accordion .dropdown-menu");

  document.documentElement.style.setProperty("--calc-height", "0px");

  document.querySelectorAll("#accordion .toggle").forEach((toggle) => {
    const dropdown = findNextSibling(toggle, ".dropdown-menu");

    toggle.addEventListener("click", (event) => {
      toggleMenu(dropdown, rootElem);
    });
  });

  document.querySelector("#toggle-01").click();
});
