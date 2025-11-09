export function aboutFunctionality(){
  //------------Display and hide tech-stack and tools skills--------------//
  const codeBtn =  document.querySelector('.code-btn');
  const editBtn =  document.querySelector('.edit-btn');
  const toolsBtn = document.querySelector('.tools-btn');
  const skillCards =  document.querySelectorAll('.skill-card');

  codeBtn.addEventListener('click', ()=> {
    // biome-ignore lint/complexity/noForEach: <explanation>
    skillCards.forEach(skill => {
      const codeSkill = skill.classList[1] === 'code';

      if(codeSkill){
        skill.style.display = 'flex';
        codeBtn.classList.add('selected');
        toolsBtn.classList.remove('selected');
        editBtn.classList.remove('selected');     
      }
      else{
        skill.style.display = 'none'
      }
    });
  });
  
  editBtn.addEventListener('click', ()=> {
    // biome-ignore lint/complexity/noForEach: <explanation>
    skillCards.forEach(skill => {
      const editSkill = skill.classList[1] === 'edit';

      if(editSkill){
        skill.style.display = 'flex';
        editBtn.classList.add('selected');
        toolsBtn.classList.remove('selected'); 
        codeBtn.classList.remove('selected');    
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
        codeBtn.classList.remove('selected');
        editBtn.classList.remove('selected');
      }
      else{
        skill.style.display = 'none'
      }
    });
  });

}
