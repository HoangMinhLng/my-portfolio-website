export function projectFuntionality(){
  // ------project navigation functionality---- //
  const filterButtons = document.querySelectorAll('.project-nav .btn');
  const projectCards = document.querySelectorAll('.project-card');

  // biome-ignore lint/complexity/noForEach: <explanation>
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // biome-ignore lint/complexity/noForEach: <explanation>
      filterButtons.forEach(btn => btn.classList.remove('selected'));

      button.classList.add('selected');

      const filterType = button.getAttribute('data-filter');

      // biome-ignore lint/complexity/noForEach: <explanation>
      projectCards.forEach(card => {
        if (filterType === 'all' || card.classList.contains(filterType)) {
          card.style.display = 'block'; 
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

}





