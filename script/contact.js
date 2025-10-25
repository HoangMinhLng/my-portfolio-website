// Nội dung file: script/contact.js

export function contactFormFunctionality() {
  const form = document.querySelector('#contact-section form');
  const submitButton = document.querySelector('#submit-btn');
  const statusMessage = document.querySelector('.form-status'); // Lấy thẻ <p> vừa tạo

  if (!form) return; // Dừng lại nếu không tìm thấy form

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Ngăn chặn form tự động submit (rất quan trọng)

    const formAction = form.getAttribute('action');
    const formData = new FormData(form);
    
    try {
      // Vô hiệu hóa nút và hiển thị "Đang gửi..."
      submitButton.disabled = true;
      submitButton.textContent = 'Đang gửi...';
      statusMessage.textContent = ''; // Xóa thông báo cũ

      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json' // Yêu cầu Formspree trả về JSON
        }
      });

      if (response.ok) {
        // Gửi thành công
        statusMessage.textContent = 'Thank you! Your message has been successfully sent.';
        statusMessage.style.color = 'green';
        form.reset(); // Xóa nội dung trong các ô input
      } else {
        // Lỗi từ server (ví dụ: lỗi xác thực của Formspree)
        statusMessage.textContent = 'An error occurred while sending. Please try again.';
        statusMessage.style.color = 'red';
      }

    } catch (error) {
      // Lỗi mạng (không kết nối được)
      statusMessage.textContent = 'A network error occurred. Please check your connection.';
      statusMessage.style.color = 'red';
    } finally {
      // Kích hoạt lại nút submit
      submitButton.disabled = false;
      submitButton.textContent = 'Submit';
    }
  });
}