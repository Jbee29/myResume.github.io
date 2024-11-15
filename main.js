// Function for image animation
const scrollElements = document.querySelectorAll(".image");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

//
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

// Function for dropdown
const dropDownBtn = document.querySelector(".dropdown-content")
const btnIcon = document.querySelector(".dropdown-content i")
const dropDownMenu = document.querySelector(".dropdown-menu")

dropDownBtn.onclick = function() {
  dropDownMenu.classList.toggle("open")
  const isOpen = dropDownMenu.classList.contains("open")

  btnIcon.classList = isOpen
    ?"fa-solid fa-xmark"
    :"fa-solid fa-bars"

}