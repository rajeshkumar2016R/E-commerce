const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const resisterLink = document.querySelector(".resister-link");
const loginbtn = document.querySelector(".active-popup");
const closebtn = document.querySelector(".closeBtn");
const menu = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");


// =============== login ======================
loginbtn.addEventListener("click", () => {
    wrapper.classList.add("log-active");
})
closebtn.addEventListener("click", () => {
    wrapper.classList.remove("log-active");
})
loginLink.addEventListener("click", () => {
    wrapper.classList.add("active");
});
resisterLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
});

// ========= mobile-navbar ==============
menu.addEventListener("click", () => {
    menu.classList.toggle("fa-xmark");
    navbar.classList.toggle("mobile-navbar");
})


// =============== slider img ======================
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// =============== change img ======================
const bimg = document.getElementById("B-img");
const sImg = document.getElementById("s-img");
const sImg1 = document.getElementById("s-img1");
const sImg2 = document.getElementById("s-img2");
const sImg3 = document.getElementById("s-img3");

sImg.onclick = function () {
    bimg.src = sImg.src;
}
sImg1.onclick = function () {
    bimg.src = sImg1.src;
}
sImg2.onclick = function () {
    bimg.src = sImg2.src;
}
sImg3.onclick = function () {
    bimg.src = sImg3.src;
}

