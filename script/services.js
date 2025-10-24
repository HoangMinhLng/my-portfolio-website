export function servicesFunctionality() {
  const serviceCards = document.querySelectorAll('.service-card');
  const projectCards = document.querySelectorAll('.project-card');
  const projectFilterButtons = document.querySelectorAll('.project-nav .btn'); // Lấy các nút lọc dự án
  const topNavButtons = document.querySelectorAll('.top-nav .nav-btn');
  const sections = document.querySelectorAll('section');

  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      // Lấy tên dịch vụ và làm sạch nó
      const serviceName = card.querySelector('.service-name').textContent.toLowerCase().trim();
      let filterType = '';

      // --- SỬA LỖI 1: Ánh xạ tên dịch vụ sang đúng class lọc ---
      // "Web Developer" -> "code"
      // "UI Designer" -> "design"
      // "Video Editor" -> "videos"
      switch (serviceName) {
        case 'web developer':
          filterType = 'code';
          break;
        case 'ui designer':
          filterType = 'design';
          break;
        case 'video editor':
          filterType = 'videos';
          break;
        default:
          filterType = 'all'; // Một fallback an toàn
      }

      // Hiển thị tab Projects (Code gốc của bạn, vẫn ổn)
      sections.forEach(section => {
        section.style.display = section.id === 'projects-section' ? 'block' : 'none';
      });

      // --- SỬA LỖI 2: Áp dụng logic lọc chính xác ---
      // Logic này giống với logic trong file projects.js của bạn
      projectCards.forEach(pCard => {
        if (filterType === 'all' || pCard.classList.contains(filterType)) {
          pCard.style.display = 'block';
        } else {
          pCard.style.display = 'none';
        }
      });

      // --- CẢI TIẾN: Cập nhật trạng thái 'selected' của các nút lọc dự án ---
      projectFilterButtons.forEach(btn => {
        btn.classList.remove('selected');
        // So sánh với data-filter mà file projects.js của bạn sử dụng
        if (btn.getAttribute('data-filter') === filterType) {
          btn.classList.add('selected');
        }
      });

      // Cập nhật nút nav active (Code gốc của bạn, vẫn ổn)
      topNavButtons.forEach(nav => {
        nav.classList.remove('active');
        if (nav.classList[1] === 'projects') {
          nav.classList.add('active');
        }
      });
    });
  });
}