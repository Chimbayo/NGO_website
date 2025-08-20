// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
        mobileMenu.classList.remove('active');
    }
});

// Contact Form Submission
function submitForm(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    const formSuccess = document.getElementById('formSuccess');
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        formSuccess.style.display = 'block';
        form.reset();
        
        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 5000);
    }, 1000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to navigation based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
