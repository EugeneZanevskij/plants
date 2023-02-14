const navLinks = document.querySelectorAll(".nav__link");
const serviceBtns = document.querySelectorAll(".service__btn");
const serviceProjects = document.querySelectorAll(".service__project");
const accordions = document.querySelectorAll(".accordion");


console.log(navLinks);
navLinks.forEach(navLink => {
    navLink.addEventListener("click", (e) => {
        navLinks.forEach(navLinkItem => {
            navLinkItem.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});
console.log(serviceBtns);
serviceBtns.forEach(serviceBtn => {
    serviceBtn.addEventListener("click", (e) => {
        const type = e.target.dataset.type;
        console.log(type);
        //to deactivate buttons
        serviceBtns.forEach(serviceBtnItem => {
            if (serviceBtnItem !== e.target) {
                serviceBtnItem.classList.remove("active");
            }
        });
        //to make button active
        e.target.classList.toggle("active");
        //transform to array to check num of ACTIVE btns
        const serviceBtnsArr = Array.from(serviceBtns);
        const numActive = serviceBtnsArr.filter(item => item.classList.contains("active")).length;
        console.log(numActive);
        //to check which projects have other type
        serviceProjects.forEach(serviceProject => {
            serviceProject.classList.remove("blur");
            if (numActive===0) {
                return;
            } else if (serviceProject.dataset.type !== type) {
                serviceProject.classList.add("blur");
            }
        })
    });
});

accordions.forEach(accordion => {
    accordion.addEventListener("click", (e) => {
        //to deactivate buttons
        accordions.forEach(accordionItem => {
            if (accordionItem !== e.target) {
                accordionItem.classList.remove("active");
            }
        });
        //to make button active
        e.target.classList.toggle("active");
    });
});
