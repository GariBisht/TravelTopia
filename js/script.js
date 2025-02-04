//WOW init
//new WOW().init();

const headerMenu = document.querySelector("#header");
const burgerMenu = headerMenu.querySelector(".burger");
const closeMenu = headerMenu.querySelector(".close-menu");
const headerBackdrop = headerMenu.querySelector(".header-backdrop");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && headerMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    headerMenu.classList.toggle("menu-is-active");
    document.body.classList.toggle("overflow-hidden");
  });

  closeMenu.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active");
    headerMenu.classList.remove("menu-is-active");
    document.body.classList.remove("overflow-hidden");
  });

  headerBackdrop.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active");
    headerMenu.classList.remove("menu-is-active");
    document.body.classList.remove("overflow-hidden");
  });
}

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
  if (this.scrollY >= 50) {   
    // vertically scroll
    headerMenu.classList.add("on-scroll");
  } else {
    headerMenu.classList.remove("on-scroll");
  }
});



















// new WOW().init();

// const headerMenu = document.querySelector(".header");
// const burgerMenu = document.querySelector(".burger");
// const headerBackdrop= headerMenu.querySelector(".header-backdrop");
// const closeMenu = headerMenu.querySelector(".close-menu");

// if(headerMenu & burgerMenu){
//     burgerMenu.addEventListener("click" , () => {
//         // console.log("Now Clicked");
//         burgerMenu.classList.toggle("is-active");
//         headerMenu.classList.toggle("menu-is-active");
//         document.body.classList.toggle("overflow-hidden");
//         // console.log("hh");
        
//     });


//  closeMenu.addEventListener("click", () => {
//     burgerMenu.classList.remove("is-active");
//     headerMenu.classList.remove("menu-is-active");
//     document.body.classList.remove("overflow-hidden");
//   });

//   headerBackdrop.addEventListener("click", () => {
//     burgerMenu.classList.remove("is-active");
//     headerMenu.classList.remove("menu-is-active");
//     document.body.classList.remove("overflow-hidden");
//   });
// }

// // Change Header Background on Scrolling
// window.addEventListener("scroll", () => {
//     if (this.scrollY >= 50) {
//       headerMenu.classList.add("on-scroll");
//     } else {
//       headerMenu.classList.remove("on-scroll");
//     }
//   });