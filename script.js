"use strict";
// Mobile nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const brandSec = document.querySelector(".brands-section");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// 瞭解方案 button
const btnScrollTo = document.querySelector(".btn--scroll-to");
const sectionPlan = document.querySelector(".plans-freedom-section");

btnScrollTo.addEventListener("click", function (e) {
  e.preventDefault();
  sectionPlan.scrollIntoView({
    behavior: "smooth",
  });
});

// Sticky nav
// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) headerEl.classList.add("sticky");
//   else headerEl.classList.remove("sticky");
// };

// const obsOptions = {
//   root: null,
//   threshold: 0,
//   rootMargin: "-90px",
// };

// const brandsObserver = new IntersectionObserver(stickyNav, obsOptions);
// brandsObserver.observe(brandSec);
