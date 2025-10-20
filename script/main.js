import { renderMainPage } from "./render-contents.js";
     import { topNav } from "./top-nav.js";
     import { aboutFunctionality } from "./about.js";
     import { projectFuntionality } from "./projects.js";
     import { servicesFunctionality } from "./services.js"; // Thêm dòng này

     renderMainPage();

     document.addEventListener('DOMContentLoaded', () => {
       topNav();
       aboutFunctionality();
       projectFuntionality();
       servicesFunctionality(); // Thêm dòng này
     });

     // Show more details functionality
     const showMoreDetailBtn = document.querySelector('.show-more-detail-btn');
     const sectionContainer = document.querySelector('.section-container');

     showMoreDetailBtn.addEventListener('click', () => {
       showMoreDetailBtn.style.display = 'none';
       sectionContainer.style.display = 'block';
     });

     const copyright = `&copy;${new Date().getFullYear()} Hoàng Minh Portfolio `;
     document.querySelector('footer .copyright-txt').innerHTML = copyright;