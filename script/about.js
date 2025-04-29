export function aboutFunctionality(){
  //------------Display and hide tech-stack and tools skills--------------//
  const techStackBtn =  document.querySelector('.tech-stack-btn');
  const toolsBtn = document.querySelector('.tools-btn');
  const skillCards =  document.querySelectorAll('.skill-card');

  techStackBtn.addEventListener('click', ()=> {
    // biome-ignore lint/complexity/noForEach: <explanation>
    skillCards.forEach(skill => {
      const techStackSkill = skill.classList[1] === 'tech-stack';

      if(techStackSkill){
        skill.style.display = 'flex';
        techStackBtn.classList.add('selected');
        toolsBtn.classList.remove('selected');     
      }
      else{
        skill.style.display = 'none'
      }
    });
  });

  toolsBtn.addEventListener('click', ()=> {
    // biome-ignore lint/complexity/noForEach: <explanation>
    skillCards.forEach(skill => {
      const toolsSkill = skill.classList[1] === 'tools';

      if(toolsSkill){
        skill.style.display = 'flex';
        toolsBtn.classList.add('selected');
        techStackBtn.classList.remove('selected');
      }
      else{
        skill.style.display = 'none'
      }
    });
  });

}
