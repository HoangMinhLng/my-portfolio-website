export function servicesFunctionality() {
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      const serviceName = card.querySelector('.service-name').textContent.toLowerCase();
      const projectCards = document.querySelectorAll('.project-card');
      const filterType = serviceName === 'designer' ? 'ui-design' : serviceName;

      // Hiển thị tab Projects
      document.querySelectorAll('section').forEach(section => {
        section.style.display = section.id === 'projects-section' ? 'block' : 'none';
      });

      // Đặt lại trạng thái mặc định cho tất cả dự án trước khi lọc
      projectCards.forEach(card => {
        card.style.display = 'block';
      });

      // Áp dụng bộ lọc dựa trên loại dịch vụ
      projectCards.forEach(card => {
        const cardType = card.classList[1]; // Giả sử type là class thứ hai
        if (filterType !== 'all' && cardType !== filterType) {
          card.style.display = 'none';
        }
      });

      // Cập nhật nút nav active
      const topNav = document.querySelectorAll('.top-nav .nav-btn');
      topNav.forEach(nav => {
        nav.classList.remove('active');
        if (nav.classList[1] === 'projects') {
          nav.classList.add('active');
        }
      });
    });
  });
}