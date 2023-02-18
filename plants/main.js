//adresses for contacts section
const adresses = {
  canandaigua: {
    city: "Canandaigua, NY",
    phone: "+1	585	393 0001",
    adress: "151 Charlotte Street",
  },
  nyc: {
    city: "New York City",
    phone: "+1	212	456 0002",
    adress: "9 East 91st Street",
  },
  yonkers: {
    city: "Yonkers, NY",
    phone: "+1	914	678 0003",
    adress: "511 Warburton Ave",
  },
  sherrill: {
    city: "Sherrill, NY",
    phone: "+1	315	908 0004",
    adress: "14 WEST Noyes BLVD",
  },
};

const navLinks = document.querySelectorAll(".nav__link");
const serviceBtns = document.querySelectorAll(".service__btn");
const serviceProjects = document.querySelectorAll(".service__project");
const accordions = document.querySelectorAll(".accordion");
const accordionBtns = document.querySelectorAll(".accordion__btn");
const toggle = document.querySelector(".header__toggle");
const headerNav = document.querySelector(".header__nav");
const dropdown = document.querySelector(".dropdown");
const contactsAdress = document.querySelector(".contacts__adress");
const contactsImage = document.querySelector(".contacts__image");

//active links
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    navLinks.forEach((navLinkItem) => {
      navLinkItem.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

//service is blur if not active
serviceBtns.forEach((serviceBtn) => {
  serviceBtn.addEventListener("click", (e) => {
    const type = e.target.dataset.type;
    //to deactivate buttons
    serviceBtns.forEach((serviceBtnItem) => {
      if (serviceBtnItem !== e.target) {
        serviceBtnItem.classList.remove("active");
      }
    });
    //to make button active
    e.target.classList.toggle("active");
    //transform to array to check num of ACTIVE btns
    const serviceBtnsArr = Array.from(serviceBtns);
    const numActive = serviceBtnsArr.filter((item) =>
      item.classList.contains("active")
    ).length;
    //to check which projects have other type
    serviceProjects.forEach((serviceProject) => {
      serviceProject.classList.remove("blur");
      if (numActive === 0) {
        return;
      } else if (serviceProject.dataset.type !== type) {
        serviceProject.classList.add("blur");
      }
    });
  });
});

accordions.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {
    const accordionBtn = accordion.querySelector(".accordion__btn");
    //to deactivate accordions
    if(e.target === accordionBtn) {
      accordions.forEach((accordionItem) => {
        if (accordionItem !== e.currentTarget) {
          accordionItem.classList.remove("active");
        }
      });
      //to make accordion active
      accordion.classList.toggle("active");
    }
  });
});

//toggle button
toggle.addEventListener("click", () => {
  headerNav.classList.toggle("active");
  toggle.classList.toggle("active");
  headerNav.addEventListener("click", () => {
    headerNav.classList.remove("active");
    toggle.classList.remove("active");
  });
});

//if click outside nav, it closes
window.addEventListener("click", (e) => {
  if (e.target !== headerNav && e.target !== toggle) {
    if (headerNav.classList.contains("active")) {
      headerNav.classList.remove("active");
      toggle.classList.remove("active");
    }
  }
});

dropdown.addEventListener("click", () => {
  dropdown.classList.add("active");
});

// dropdown.addEventListener("click", () => {
//   // if default value is changed
// });
dropdown.addEventListener("change", () => {
  // if value switched by client
  contactsImage.classList.add("hidden");
      displayAdress(dropdown.value);
  });


function displayAdress(value) {
    const adress = adresses[value];
    //to create div based on chosen value
    const adressResult = 
    `<div class="adress">
        <div class="adress__box">
            <div class="adress__line">
                <span class="adress__name">City:</span>
                <span class="adress__value">${adress.city}</span>
            </div>
            <div class="adress__line">
                <span class="adress__name">Phone:</span>
                <span class="adress__value">${adress.phone}</span>
            </div>
            <div class="adress__line">
                <span class="adress__name">Office adress:</span>
                <span class="adress__value">${adress.adress}</span>
            </div>
        </div>
        <a href="tel:${adress.phone}" class="adress__call">Call us</a>
    </div>`;
    contactsAdress.innerHTML = adressResult;
}