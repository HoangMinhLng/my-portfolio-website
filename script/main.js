import { renderMainPage } from "./render-contents.js";
     import { topNav } from "./top-nav.js";
     import { contactFormFunctionality } from "./contact.js";
     import { aboutFunctionality } from "./about.js";
     import { projectFuntionality } from "./projects.js";
     import { servicesFunctionality } from "./services.js"; 

     renderMainPage();

     document.addEventListener('DOMContentLoaded', () => {
       topNav();
       aboutFunctionality();
       projectFuntionality();
       servicesFunctionality(); 
       contactFormFunctionality();
     });

     // Show more details functionality
     const showMoreDetailBtn = document.querySelector('.show-more-detail-btn');
     const sectionContainer = document.querySelector('.section-container');

     showMoreDetailBtn.addEventListener('click', () => {
       showMoreDetailBtn.style.display = 'none';
       sectionContainer.style.display = 'block';
     });

     const copyright = `&copy;${new Date().getFullYear()} Hoàng Minh. All Rights Reserved.`;
     document.querySelector('footer .copyright-txt').innerHTML = copyright;