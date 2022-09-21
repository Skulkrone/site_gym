const btns = document.querySelectorAll(".btn-modale");
const modaleEquipement = document.querySelector(".bloc-modale");
const imgIndex = document.querySelector(".bloc-modale img");

window.addEventListener("resize", () => {
  responsiveModals();
});

function responsiveModals() {
  if (window.matchMedia("(min-width:850px)").matches) {
    btns.forEach((btn) => {
      btn.addEventListener("click", clickBtn);
    });

    modaleEquipement.addEventListener("click", () => {
      modaleEquipement.classList.remove("active-modale");
    });
  } else {
    btns.forEach((btn) => {
      btn.removeEventListener("click", clickBtn);
    });
  }
}
responsiveModals();

function clickBtn(e) {
  imgIndex.src = `ressources/img${e.target.getAttribute(
    "data-index"
  )}-equip.jpg`;
  modaleEquipement.classList.add("active-modale");
}

// Anim navbar

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    nav.classList.add("anim-nav");
  } else {
    nav.classList.remove("anim-nav");
  }
});

// btns.forEach(btn => {
//   btn.addEventListener('click', (e) => {

//       imgIndex.src = `ressources/img${e.target.getAttribute('data-index')}-equip.jpg`;
//       modaleEquipement.classList.add('active-modale');

//   })
// })

// modaleEquipement.addEventListener('click', () => {
//   modaleEquipement.classList.remove('active-modale');
// })

// const mqLarge = window.matchMedia( '(min-width : 850px)' );
// console.log( mqLarge.matches );

// if(mqLarge.matches){
//     btns.forEach(btn => {
//     btn.addEventListener('click', (e) => {

//         imgIndex.src = `ressources/img${e.target.getAttribute('data-index')}-equip.jpg`;
//         modaleEquipement.classList.add('active-modale');

//     })
//   })

//   modaleEquipement.addEventListener('click', () => {
//     modaleEquipement.classList.remove('active-modale');
//   })
// }
