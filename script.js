// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Button Click Event
    const magicBtn = document.getElementById('magicBtn');
    if (magicBtn) {
      magicBtn.addEventListener('click', () => {
        alert('✨ Magic Button Clicked!');
      });
  
      // Double-Click Event
      magicBtn.addEventListener('dblclick', () => {
        alert('🎉 Secret Double-Click Action Activated!');
      });
  
      // Long Press Event
      let pressTimer;
      magicBtn.addEventListener('mousedown', () => {
        pressTimer = setTimeout(() => {
          alert('🔥 Long Press Secret Action Activated!');
        }, 1000); // Trigger after 1 second
      });
  
      magicBtn.addEventListener('mouseup', () => {
        clearTimeout(pressTimer); // Cancel if the button is released early
      });
  
      magicBtn.addEventListener('mouseleave', () => {
        clearTimeout(pressTimer); // Cancel if the mouse leaves the button
      });
    }
  
    // Hover Event
    const hoverMe = document.getElementById('hoverMe');
    if (hoverMe) {
      hoverMe.addEventListener('mouseover', () => {
        hoverMe.textContent = 'You hovered over me! 🎉';
      });
      hoverMe.addEventListener('mouseout', () => {
        hoverMe.textContent = 'Hover over me 👀';
      });
    }
  
    // Keypress Event
    const keypressOutput = document.getElementById('keypressOutput');
    if (keypressOutput) {
      document.addEventListener('keydown', (event) => {
        keypressOutput.textContent = `You pressed: ${event.key}`;
      });
    }
  
    // Gallery Navigation (Placeholder for prevImg and nextImg functions)
    window.prevImg = () => {
      alert('Previous image functionality not implemented yet.');
    };
  
    window.nextImg = () => {
      alert('Next image functionality not implemented yet.');
    };
  
    // Accordion Toggle
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    accordionToggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    });
  
    // Form Validation
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      const emailInput = document.getElementById('email');
      const emailFeedback = document.getElementById('emailFeedback');
      const passwordInput = document.getElementById('password');
      const passwordFeedback = document.getElementById('passwordFeedback');
  
      signupForm.addEventListener('submit', (event) => {
        let isValid = true;
  
        // Email Validation
        if (!emailInput.value.includes('@')) {
          emailFeedback.textContent = 'Please enter a valid email address.';
          emailFeedback.style.color = 'red';
          isValid = false;
        } else {
          emailFeedback.textContent = '';
        }
  
        // Password Validation
        if (passwordInput.value.length < 8) {
          passwordFeedback.textContent = 'Password must be at least 8 characters long.';
          passwordFeedback.style.color = 'red';
          isValid = false;
        } else {
          passwordFeedback.textContent = '';
        }
  
        if (!isValid) {
          event.preventDefault(); // Prevent form submission if validation fails
        }
      });
    }
  });