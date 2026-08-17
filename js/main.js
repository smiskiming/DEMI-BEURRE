document.addEventListener('DOMContentLoaded', function () {
  // Dynamic year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Sticky header shadow on scroll
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // === EMAIL POPUP FUNCTIONALITY ===
  const popup = document.getElementById('email-popup');
  const popupClose = document.getElementById('popup-close');
  const emailForm = document.getElementById('email-form');
  const popupEmail = document.getElementById('popup-email');

  // Check if popup was already shown in this session
  const popupShown = sessionStorage.getItem('demiPopupShown');

  // Show popup after 3 seconds if not already shown
  if (!popupShown && popup) {
    setTimeout(() => {
      popup.classList.add('show');
    }, 3000);
  }

  // Close popup when clicking close button
  if (popupClose && popup) {
    popupClose.addEventListener('click', () => {
      popup.classList.remove('show');
      sessionStorage.setItem('demiPopupShown', 'true');
    });
  }

  // Close popup when clicking outside the modal
  if (popup) {
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.classList.remove('show');
        sessionStorage.setItem('demiPopupShown', 'true');
      }
    });
  }

  // Handle form submission
  if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = popupEmail.value;
      
      // Store email (in real implementation, send to backend)
      console.log('Email submitted:', email);
      
      // Show success message
      const popupContent = document.querySelector('.popup-content');
      popupContent.innerHTML = `
        <h2>Welcome to Demi! 🎉</h2>
        <p style="font-size: 18px; margin-bottom: 24px;">Your 5% discount code:</p>
        <div style="background: #f7efe6; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
          <code style="font-size: 24px; font-weight: 600; color: #b4312e; letter-spacing: 2px;">DEMI5</code>
        </div>
        <p>Check your email for details. Happy shopping!</p>
        <button onclick="document.getElementById('email-popup').classList.remove('show'); sessionStorage.setItem('demiPopupShown', 'true');" style="margin-top: 24px; padding: 12px 32px; background: #10283f; color: white; border: none; border-radius: 4px; cursor: pointer; font-family: 'Inter', sans-serif; font-weight: 500;">Start Shopping</button>
      `;
      
      // Mark popup as shown
      sessionStorage.setItem('demiPopupShown', 'true');
    });
  }
});
