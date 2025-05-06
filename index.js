document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('main-nav');
    
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mainNav.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mainNav.classList.remove('active');
      });
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
    
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Form validation using CSS
    const form = document.getElementById('booking-form');
    if (form) {
      form.setAttribute('novalidate', true);
      
      form.addEventListener('submit', (e) => {
        let isValid = true;
        
        // Remove existing validations
        form.querySelectorAll('.form-group').forEach(group => {
          group.classList.remove('error');
        });
        
        // Check each required field
        form.querySelectorAll('[required]').forEach(field => {
          if (!field.value) {
            field.parentElement.classList.add('error');
            isValid = false;
          }
          
          // Phone validation
          if (field.id === 'phone' && field.value) {
            if (!field.value.match(/^\d{10}$/)) {
              field.parentElement.classList.add('error');
              isValid = false;
            }
          }
        });
        
        if (!isValid) {
          e.preventDefault();
        }
      });
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const homeSection = document.getElementById('home');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    header.classList.remove('dark'); // Transparent when Home is in view
                } else {
                    header.classList.add('dark'); // Dark background when Home is out of view
                }
            });
        },
        {
            root: null, // Use viewport as root
            threshold: 0.1 // Trigger when 10% of Home section is visible
        }
    );

    if (homeSection) {
        observer.observe(homeSection);
    }
});