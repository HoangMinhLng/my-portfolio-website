import { renderMainPage } from "./render-contents.js";
import { topNav } from "./top-nav.js";
import { aboutFunctionality } from "./about.js";
import { projectFuntionality } from "./projects.js";

renderMainPage();

document.addEventListener('DOMContentLoaded', ()=> {
  topNav();
  aboutFunctionality();
  projectFuntionality();
});


// Show more details functionality
const showMoreDetailBtn = document.querySelector('.show-more-detail-btn');
const sectionContainer = document.querySelector('.section-container');

showMoreDetailBtn.addEventListener('click', ()=>{
  showMoreDetailBtn.style.display = 'none';
  sectionContainer.style.display = 'block';

});


const copyright = `&copy;${new Date().getFullYear()} Portfolio Website `;
document.querySelector('footer .copyright-txt').innerHTML = copyright;

