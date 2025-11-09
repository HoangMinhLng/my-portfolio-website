export function topNav(){
  const topNav = document.querySelectorAll('.top-nav .nav-btn');
  const sections = document.querySelectorAll("section");

  // goto another section when click the nav //
  // biome-ignore lint/complexity/noForEach: <explanation>
    topNav.forEach(nav => {
    nav.addEventListener('click',()=> [
      // biome-ignore lint/complexity/noForEach: <explanation>
      sections.forEach(section => {
        const sectionName = section.classList[0];
        const navClass = nav.classList[1];

        if(navClass === sectionName){
          section.style.display = "block";
        }
        else{
          section.style.display = "none"
        }
      })
    ]);
  });

  
  // change the color of nav that match the section
  const sectionObserver = new IntersectionObserver((entries)=>{
    // biome-ignore lint/complexity/noForEach: <explanation>
    entries.forEach(entry => {      
      if(entry.isIntersecting){
        // biome-ignore lint/complexity/noForEach: <explanation>
        topNav.forEach(nav => {
          const sectionClass = entry.target.classList[0];  
          const navClass = nav.classList[1];
          if(sectionClass === navClass){
            nav.classList.add('active');
          }else{
            nav.classList.remove('active');
          }
        })
      }
    });
  });
  
  // biome-ignore lint/complexity/noForEach: <explanation>
    sections.forEach(section => {
    sectionObserver.observe(section);
  });
   
}

