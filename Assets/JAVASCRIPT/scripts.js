(window.aparecer = ScrollReveal({ reset: !0 })),
  aparecer.reveal(".efeito-topo", {
    duration: 2e3,
    distance: "90px",
    origin: "left",
  }),
  aparecer.reveal(".efeito-img", {
    duration: 2e3,
    distance: "90px",
    delay: 500,
    origin: "right",
  }),
  aparecer.reveal(".titulo", {
    duration: 2e3,
    distance: "90px",
    origin: "left",
  }),
  aparecer.reveal(".efeito-txt-sobre", {
    duration: 2e3,
    distance: "90px",
    origin: "left",
  }),
  aparecer.reveal(".efeito-portifolio", {
    duration: 2e3,
    distance: "90px",
    origin: "left",
  }),
  aparecer.reveal(".efeito-contato", {
    duration: 2e3,
    distance: "90px",
    origin: "left",
  }),
  aparecer.reveal(".efeito-habilidades", {
    duration: 2e3,
    distance: "90px",
    origin: "left",
  });

/*menu celular/celular maior*/
let btnMenu = document.getElementById("abrir-menu");
let menu = document.getElementById("menu-celular");
let overlay = document.getElementById("overlay-menu");
btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});
menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});
overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});
