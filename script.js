// Create floating particles
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    // Create 50 particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 5px and 15px
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration between 10s and 20s
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Create stars
function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);

    // Create 200 stars
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random size between 1px and 3px
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration between 2s and 4s
        star.style.animationDuration = `${Math.random() * 2 + 2}s`;
        
        // Random delay
        star.style.animationDelay = `${Math.random() * 2}s`;
        
        starsContainer.appendChild(star);
    }
}

// Create planets
function createPlanets() {
    const planetsContainer = document.createElement('div');
    planetsContainer.className = 'planets';
    document.body.appendChild(planetsContainer);

    // Create 5 planets
    const planetColors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
    
    for (let i = 0; i < 5; i++) {
        const planet = document.createElement('div');
        planet.className = 'planet';
        
        // Random size between 30px and 80px
        const size = Math.random() * 50 + 30;
        planet.style.width = `${size}px`;
        planet.style.height = `${size}px`;
        
        // Random position
        planet.style.left = `${Math.random() * 80 + 10}%`;
        planet.style.top = `${Math.random() * 80 + 10}%`;
        
        // Random color
        planet.style.backgroundColor = planetColors[i];
        
        // Random animation duration between 20s and 40s
        planet.style.animationDuration = `${Math.random() * 20 + 20}s`;
        
        // Add a glow effect
        planet.style.boxShadow = `0 0 20px ${planetColors[i]}`;
        
        planetsContainer.appendChild(planet);
    }
}

// Create code rain
function createCodeRain() {
    const codeRainContainer = document.createElement('div');
    codeRainContainer.className = 'code-rain';
    document.body.appendChild(codeRainContainer);

    // Create 20 code lines
    for (let i = 0; i < 20; i++) {
        const codeLine = document.createElement('div');
        codeLine.className = 'code-line';
        
        // Random position
        codeLine.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration between 8s and 15s
        codeLine.style.animationDuration = `${Math.random() * 7 + 8}s`;
        
        // Random delay
        codeLine.style.animationDelay = `${Math.random() * 5}s`;
        
        // Generate random code
        const codeLength = Math.floor(Math.random() * 20) + 10;
        let code = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]()<>/?=+-*';
        
        for (let j = 0; j < codeLength; j++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
        codeLine.textContent = code;
        
        // Random color
        const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
        codeLine.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        codeRainContainer.appendChild(codeLine);
    }
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    createStars();
    createPlanets();
    createCodeRain();
});

// Smooth scrolling for navigation links
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

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add scroll-based animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Add scroll-based header styling
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Add 3D tilt effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Toggle between hamburger and close icon
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks && navLinks.classList.contains('active') && 
            !navLinks.contains(event.target) && 
            !mobileMenuToggle.contains(event.target)) {
            navLinks.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Chatbot functionality
document.addEventListener('DOMContentLoaded', () => {
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotWindow = document.querySelector('.chatbot-window');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotMessages = document.querySelector('.chatbot-messages');
    const chatbotInput = document.querySelector('.chatbot-input input');
    const sendButton = document.querySelector('.chatbot-input button');

    // Toggle chatbot window
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.add('active');
        chatbotToggle.style.display = 'none';
    });

    chatbotClose.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
        chatbotToggle.style.display = 'block';
    });

    // Handle sending messages
    const sendMessage = () => {
        const message = chatbotInput.value.trim();
        if (message) {
            // Add user message
            addMessage(message, 'user');
            chatbotInput.value = '';

            // Process the message and get response
            const response = processMessage(message);
            setTimeout(() => {
                addMessage(response, 'bot');
            }, 500);
        }
    };

    // Add message to chat window
    const addMessage = (text, sender) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chatbot-message', sender);
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    };

    // Process user message and return appropriate response
    const processMessage = (message) => {
        const lowerMessage = message.toLowerCase();
        
        // Enhanced response logic with more comprehensive answers
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hi there! I'm excited to tell you about Erik's impressive tech journey. What would you like to know?";
        } else if (lowerMessage.includes('skill') || lowerMessage.includes('experience')) {
            return "Erik is a versatile tech professional with expertise in:\n\n" +
                   "• Full Stack Development (JavaScript, React, Node.js)\n" +
                   "• Cloud Architecture (AWS, Azure)\n" +
                   "• Machine Learning & AI\n" +
                   "• Blockchain Development\n" +
                   "• Quantitative Development\n\n" +
                   "He's particularly passionate about building scalable applications and implementing innovative solutions!";
        } else if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
            return "Erik has an impressive portfolio of projects! Here are some highlights:\n\n" +
                   "• Full Stack Web Applications\n" +
                   "• Cloud-based Solutions\n" +
                   "• Machine Learning Models for Stock Price Prediction\n" +
                   "• Blockchain Applications\n" +
                   "• Quantitative Trading Systems\n\n" +
                   "You can find detailed code examples in his GitHub repositories!";
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
            return "You can connect with Erik through:\n\n" +
                   "• LinkedIn: https://www.linkedin.com/in/erik-lorent-b949a1141/\n" +
                   "• GitHub: https://github.com/AcademicsAnalytics\n" +
                   "• Resume: Available through the document link in the footer\n\n" +
                   "He's always excited to connect with fellow tech enthusiasts!";
        } else if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
            return "You can view Erik's comprehensive resume here:\n" +
                   "https://docs.google.com/document/d/1lPpbfHze1SSLppJ-1eCq0n49ETFy5B5rRWHl1Stp8ik/edit?usp=sharing\n\n" +
                   "It details his professional experience, technical skills, and notable achievements!";
        } else if (lowerMessage.includes('education') || lowerMessage.includes('background')) {
            return "Erik has a strong academic background in Computer Science and Software Engineering. " +
                   "He combines formal education with practical experience to deliver innovative solutions.";
        } else if (lowerMessage.includes('technology') || lowerMessage.includes('tech stack')) {
            return "Erik works with a modern tech stack including:\n\n" +
                   "• Frontend: React, JavaScript, HTML5, CSS3\n" +
                   "• Backend: Node.js, Python, Java\n" +
                   "• Cloud: AWS, Azure, Docker\n" +
                   "• Data Science: Python, TensorFlow, PyTorch\n" +
                   "• Blockchain: Solidity, Web3.js\n\n" +
                   "He stays current with emerging technologies and best practices!";
        } else {
            return "I'd be happy to tell you more about Erik's skills, projects, experience, or how to contact him. " +
                   "What specific aspect would you like to know about?";
        }
    };

    // Event listeners for sending messages
    sendButton.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}); 