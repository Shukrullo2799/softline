import "animate.css";
import "../scss/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const compensations = document.querySelectorAll(".compensation_item");
  compensations.forEach((item, i) => {
    item.style.backgroundImage = `url('../img/${i + 1}.png')`;
  });

  const offices = document.querySelectorAll(".office_name");
  const map = document.querySelector(".map");

  offices.forEach((office, i) => {
    office.addEventListener("click", () => {
      offices.forEach((item, i) => {
        item.classList.remove("active");
        office.classList.add("active");
      });
      map.src = `./img/map/${i + 1}.png`;
    });
  });

  const dropdown = document.querySelector(".office_dropdown");
  const dd_svg = document.querySelector(".office_dropdown-svg");
  const office_list = document.querySelector(".office_list");
  const offices_div = document.querySelector(".offices");
  dropdown.addEventListener("click", () => {
    office_list.classList.toggle("active");
    dd_svg.classList.toggle("rotate");
    offices_div.classList.toggle("opacity");
  });

  const office_list_items = document.querySelectorAll(".office_list-item");
  const svgs = document.querySelectorAll(".office_list-item_svg");
  office_list_items.forEach((item, i) => {
    item.addEventListener("click", () => {
      office_list_items.forEach((el) => {
        el.children[1]?.classList.remove("active");
        item.children[1].classList.add("active");
      });
      svgs[i].classList.toggle("rotate");
    });
  });
});
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  loop: true,

  pagination: {
    el: ".slider_footer",
    clickable: true,
  },

  navigation: {
    nextEl: ".right",
    prevEl: ".left",
  },
});
