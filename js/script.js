// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
    setupSmoothScrolling();
    setupScrollAnimations();
    setupNavbarEffects();
    setupFormHandling();
    setupLanguageToggle();
    setupInteractiveEffects();
}

// Translations object
const translations = {
    'nav-inicio': { es: 'Inicio', en: 'Home' },
    'logo-main-text': { es: 'JBerroa Multiservices LLC', en: 'JBerroa Multiservices LLC' }, // Added for logo text
    'nav-servicios': { es: 'Servicios', en: 'Services' },
    'nav-nosotros': { es: 'Nosotros', en: 'About Us' },
    'nav-contacto': { es: 'Contacto', en: 'Contact' },
    'hero-title': { es: 'Servicios Médicos e Inmigración', en: 'Medical & Immigration Services' },
    'hero-subtitle': { es: 'Tu salud y tu futuro en Estados Unidos son nuestra prioridad. Ofrecemos atención médica de calidad y asesoría legal especializada en inmigración.', en: 'Your health and future in the United States are our priority. We offer quality medical care and specialized legal advice on immigration.' },
    'cta-button': { es: 'Solicitar Consulta', en: 'Request Consultation' },
    'section-services-title': { es: 'Nuestros Servicios', en: 'Our Services' },
    'section-services-subtitle': { es: 'Ofrecemos una amplia gama de servicios médicos y legales para apoyarte en tu vida en Estados Unidos.', en: 'We offer a wide range of medical and legal services to support you in your life in the United States.' },
    'service-general': { es: 'Consultas Médicas Generales', en: 'General Medical Consultations' },
    'service-general-desc': { es: 'Atención médica integral con profesionales certificados para toda la familia.', en: 'Comprehensive medical care with certified professionals for the whole family.' },
    'service-specialties': { es: 'Especialidades Médicas', en: 'Medical Specialties' },
    'service-specialties-desc': { es: 'Cardiología, pediatría, ginecología y otras especialidades con equipos modernos.', en: 'Cardiology, pediatrics, gynecology, and other specialties with modern equipment.' },
    'service-immigration-exams': { es: 'Exámenes Médicos para Inmigración', en: 'Medical Exams for Immigration' },
    'service-immigration-exams-desc': { es: 'Exámenes médicos oficiales requeridos para procesos de inmigración y visa.', en: 'Official medical exams required for immigration and visa processes.' },
    'service-legal-advice': { es: 'Asesoría Legal en Inmigración', en: 'Legal Immigration Advice' },
    'service-legal-advice-desc': { es: 'Representación legal especializada en casos de inmigración y naturalización.', en: 'Specialized legal representation for immigration and naturalization cases.' },
    'service-family-reunification': { es: 'Reunificación Familiar', en: 'Family Reunification' },
    'service-family-reunification-desc': { es: 'Asistencia completa para traer a tu familia a Estados Unidos legalmente.', en: 'Complete assistance to bring your family to the United States legally.' },
    'service-citizenship': { es: 'Trámites de Ciudadanía', en: 'Citizenship Procedures' },
    'service-citizenship-desc': { es: 'Te ayudamos en todo el proceso para obtener la ciudadanía estadounidense.', en: 'We help you through the entire process to obtain U.S. citizenship.' },
    'section-about-title': { es: 'Sobre Nosotros', en: 'About Us' },
    'about-p1': { es: 'Somos un equipo de profesionales médicos y legales comprometidos con brindar servicios de la más alta calidad a la comunidad hispana. Nuestra misión es proporcionar atención médica accesible y asesoría legal especializada en inmigración.', en: 'We are a team of medical and legal professionals committed to providing the highest quality services to the Hispanic community. Our mission is to provide accessible medical care and specialized legal advice on immigration.' },
    'about-p2': { es: 'Con años de experiencia sirviendo a familias inmigrantes, entendemos los desafíos únicos que enfrentas. Ofrecemos servicios en español, con un enfoque personalizado y culturalmente sensible. Tu bienestar y éxito en Estados Unidos son nuestra prioridad.', en: 'With years of experience serving immigrant families, we understand the unique challenges you face. We offer services in Spanish, with a personalized and culturally sensitive approach. Your well-being and success in the United States are our priority.' },
    'stat-families-number': { es: '500+', en: '500+' },
    'stat-families-label': { es: 'Familias Atendidas', en: 'Families Served' },
    'stat-cases-number': { es: '95%', en: '95%' },
    'stat-cases-label': { es: 'Casos Exitosos', en: 'Successful Cases' },
    'stat-experience-number': { es: '10+', en: '10+' },
    'stat-experience-label': { es: 'Años de Experiencia', en: 'Years of Experience' },
    'stat-support-number': { es: '24/7', en: '24/7' },
    'stat-support-label': { es: 'Soporte de Emergencia', en: 'Emergency Support' },
    'about-image-alt': { es: 'Equipo Profesional Médico y Legal', en: 'Professional Medical and Legal Team' },
    'section-contact-title': { es: 'Solicitar Consulta', en: 'Request Consultation' },
    'section-contact-subtitle': { es: 'Complete el formulario y nos pondremos en contacto con usted en breve.', en: 'Fill out the form and we will contact you shortly.' },
    'form-name-label': { es: 'Nombre Completo', en: 'Full Name' },
    'form-phone-label': { es: 'Número de Teléfono', en: 'Phone Number' },
    'form-email-label': { es: 'Correo Electrónico', en: 'Email' },
    'form-service-label': { es: 'Tipo de Servicio', en: 'Type of Service' },
    'form-service-placeholder': { es: 'Seleccione un servicio', en: 'Select a service' },
    'service-option-general': { es: 'Consulta Médica General', en: 'General Medical Consultation' },
    'service-option-specialties': { es: 'Especialidades Médicas', en: 'Medical Specialties' },
    'service-option-immigration': { es: 'Exámenes Médicos para Inmigración', en: 'Medical Exams for Immigration' },
    'service-option-legal': { es: 'Asesoría Legal en Inmigración', en: 'Legal Immigration Advice' },
    'service-option-reunification': { es: 'Reunificación Familiar', en: 'Family Reunification' },
    'service-option-citizenship': { es: 'Trámites de Ciudadanía', en: 'Citizenship Procedures' },
    'service-option-other': { es: 'Otro', en: 'Other' },
    'form-message-label': { es: 'Mensaje (Opcional)', en: 'Message (Optional)' },
    'form-message-placeholder': { es: 'Cuéntenos más sobre su consulta...', en: 'Tell us more about your inquiry...' },
    'submit-btn': { es: 'Enviar Solicitud', en: 'Send Request' },
    'contact-info-title': { es: 'Información de Contacto', en: 'Contact Information' },
    'location-title': { es: 'Ubicación', en: 'Location' },
    'phone-title': { es: 'Teléfono', en: 'Phone' },
    'email-title': { es: 'Email', en: 'Email' },
    'hours-title': { es: 'Horarios', en: 'Hours' },
    'schedule-monday-friday': { es: 'Lunes - Viernes:', en: 'Monday - Friday:' },
    'schedule-saturday': { es: 'Sábados:', en: 'Saturdays:' },
    'schedule-sunday': { es: 'Domingos:', en: 'Sundays:' },
    'schedule-monday-friday-hours': { es: '9:00 AM - 6:00 PM', en: '9:00 AM - 6:00 PM' },
    'schedule-saturday-hours': { es: '10:00 AM - 4:00 PM', en: '10:00 AM - 4:00 PM' },
    'schedule-sunday-hours': { es: 'Cerrado', en: 'Closed' },
    'footer-logo': { es: 'MedCare & Immigration', en: 'MedCare & Immigration' },
    'footer-text': { es: 'Servicios médicos e inmigración con profesionalidad y cuidado personalizado.', en: 'Medical and immigration services with professionalism and personalized care.' },
    'footer-copyright': { es: '&copy; 2025 MedCare & Immigration. Todos los Derechos Reservados.', en: '&copy; 2025 MedCare & Immigration. All Rights Reserved.' },
    'facebook-title': { es: 'Facebook', en: 'Facebook' },
    'instagram-title': { es: 'Instagram', en: 'Instagram' },
    'whatsapp-title': { es: 'WhatsApp', en: 'WhatsApp' },
    'notification-success-form': { es: '¡Gracias! Hemos recibido su solicitud. Nos pondremos en contacto con usted pronto.', en: 'Thank you! We have received your request. We will contact you soon.' },
    'notification-error-form': { es: 'Por favor, complete todos los campos requeridos.', en: 'Please fill in all required fields.' },
    'notification-spanish-selected': { es: 'Idioma español seleccionado', en: 'Spanish language selected' },
    'email-invalid': { es: 'Email no válido', en: 'Invalid email' },
    'phone-invalid': { es: 'Teléfono no válido', en: 'Invalid phone' },
    'field-required': { es: 'Este campo es requerido', en: 'This field is required' },
    'name-short': { es: 'El nombre debe tener al menos 2 caracteres', en: 'Name must be at least 2 characters' }
};

function updateContent(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[key] && translations[key][lang]) {
            // Handle input placeholders specifically
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[key][lang];
            } else if (element.tagName === 'TEXTAREA' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[key][lang];
            } else if (element.tagName === 'OPTION' && element.value === '') {
                element.textContent = translations[key][lang];
            } else if (element.tagName === 'IMG' && element.hasAttribute('alt')) {
                element.alt = translations[key][lang];
            } else if (element.tagName === 'A' && element.hasAttribute('title')) {
                element.title = translations[key][lang];
            } else {
                element.textContent = translations[key][lang];
            }
        }
    });
    // Update the lang attribute of the HTML tag
    document.documentElement.lang = lang;
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup scroll animations using Intersection Observer
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Navbar background change on scroll
function setupNavbarEffects() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Form submission handler
function setupFormHandling() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Validate required fields
            const requiredFields = ['nombre', 'telefono', 'email', 'servicio'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                const input = document.getElementById(field);
                if (!data[field] || data[field].trim() === '') {
                    input.style.borderColor = '#e74c3c';
                    input.style.backgroundColor = '#fdf2f2';
                    isValid = false;
                    
                    // Reset error styling after 3 seconds
                    setTimeout(() => {
                        input.style.borderColor = '';
                        input.style.backgroundColor = '';
                    }, 3000);
                }
            });
            
            if (isValid) {
                // Show success message
                showNotification('notification-success-form');
                
                // Reset form
                form.reset();
                
                // In a real application, you would send the data to your server here
                console.log('Form submitted with data:', data);
            } else {
                showNotification('notification-error-form');
            }
        });
    }
}

// Language toggle functionality
function setupLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const selectedLang = this.getAttribute('data-lang');
            updateContent(selectedLang);
            // Ensure no notification is shown for language change unless it's a specific error/success state
            if (selectedLang === 'es') {
                showNotification('notification-spanish-selected', 'success');
            } else {
                // No specific notification for English, as content changes directly.
                // showNotification('notification-english-soon', 'info'); // This was the problematic line
            }
        });
    });
    // Set initial language based on the active button or default to Spanish
    const initialLang = document.querySelector('.lang-btn.active')?.getAttribute('data-lang') || 'es';
    updateContent(initialLang);
}

// Interactive effects for service cards
function setupInteractiveEffects() {
    // Service cards hover effects
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add ripple effect to buttons
    document.querySelectorAll('.cta-button, .submit-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Show notification function
function showNotification(messageKey, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const message = translations[messageKey]?.[document.documentElement.lang] || messageKey; // Get translated message

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: all 0.3s ease;
        border-left: 4px solid ${getNotificationColor(type)};
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Setup close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        closeNotification(notification);
    });
    
    // Auto-close after 5 seconds
    setTimeout(() => {
        closeNotification(notification);
    }, 5000);
}

function closeNotification(notification) {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 300);
}

function getNotificationIcon(type) {
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️',
        warning: '⚠️'
    };
    return icons[type] || icons.info;
}

function getNotificationColor(type) {
    const colors = {
        success: '#50c878',
        error: '#e74c3c',
        info: '#4a90e2',
        warning: '#f39c12'
    };
    return colors[type] || colors.info;
}

// Add CSS for ripple effect
const rippleCSS = `
    .cta-button, .submit-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: auto;
        padding: 0;
        color: #666;
    }
    
    .notification-close:hover {
        color: #333;
    }
`;

// Add CSS to page
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Add loading animation for form submission
function addLoadingState(button) {
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Enviando...';
    button.style.opacity = '0.7';
    
    return function removeLoadingState() {
        button.disabled = false;
        button.textContent = originalText;
        button.style.opacity = '1';
    };
}

// Utility function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Utility function to validate phone number
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// Enhanced form validation (updated to use translations)
function enhancedFormValidation(formData) {
    const errors = [];
    const currentLang = document.documentElement.lang;
    
    if (!formData.nombre || formData.nombre.trim().length < 2) {
        errors.push(translations['name-short'][currentLang]);
    }
    
    if (!formData.email || !isValidEmail(formData.email)) {
        errors.push(translations['email-invalid'][currentLang]);
    }
    
    if (!formData.telefono || !isValidPhone(formData.telefono)) {
        errors.push(translations['phone-invalid'][currentLang]);
    }
    
    if (!formData.servicio) {
        errors.push(translations['field-required'][currentLang]);
    }
    
    return errors;
}

// Initialize enhanced form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        // Add real-time validation
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    }
});

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    const currentLang = document.documentElement.lang;
    
    switch(field.type) {
        case 'email':
            if (value && !isValidEmail(value)) {
                isValid = false;
                errorMessage = translations['email-invalid'][currentLang];
            }
            break;
        case 'tel':
            if (value && !isValidPhone(value)) {
                isValid = false;
                errorMessage = translations['phone-invalid'][currentLang];
            }
            break;
    }
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = translations['field-required'][currentLang];
    }
    
    // Update field styling
    if (isValid) {
        field.style.borderColor = '#50c878';
        field.style.backgroundColor = '#f8fff8';
        removeFieldError(field);
    } else {
        field.style.borderColor = '#e74c3c';
        field.style.backgroundColor = '#fdf2f2';
        showFieldError(field, errorMessage);
    }
}

function showFieldError(field, message) {
    removeFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #e74c3c;
        font-size: 0.8rem;
        margin-top: 0.3rem;
        display: block;
    `;
    
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function removeFieldError(field) {
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}