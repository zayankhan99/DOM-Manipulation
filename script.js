
document.addEventListener('DOMContentLoaded', () => {

    // Creating NavBar

    function createNav() {
        const app = document.getElementById('app');
        const navbar = document.createElement('nav');
        navbar.className = 'navbar';

        const logo = document.createElement('a');
        logo.href = '#';
        logo.className = 'logo';
        logo.textContent = 'LOGO';

        const navLinks = document.createElement('ul');
        navLinks.className = 'nav-links';

        const links = [
            { name: 'Home', href: '#' },
            { name: 'Features', href: '#features' },
            { name: 'About', href: '#about' },
            { name: 'Contact', href: '#contact' },
        ];

        links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.name;

            li.appendChild(a);
            navLinks.appendChild(li);
        });

        navbar.appendChild(logo);
        navbar.appendChild(navLinks);
        app.appendChild(navbar);
    }

    createNav();

    // Creating  Hero
    function createHero() {
        const Hero = document.createElement('div');
        Hero.className = 'Hero';

        const HeroHeading = document.createElement('h1');
        HeroHeading.textContent = 'Welcome to Our Page';

        const HeroButton = document.createElement('a');
        HeroButton.href = '#';
        HeroButton.className = 'button';
        HeroButton.textContent = 'Get Started';


        Hero.appendChild(HeroHeading);
        Hero.appendChild(HeroButton);
        app.appendChild(Hero);
    };

    createHero()

    // Creating Services
    function createServices() {
        const ServicesSection = document.createElement('section');
        const ServicesHeading = document.createElement('div');
        ServicesHeading.className = 'services'
        const ServiceHeading = document.createElement('h1');
        ServiceHeading.textContent = 'Our Services';


        const features = document.createElement('div');

        features.className = 'features';


        const featureData = [
            {
                title: 'Service One',
                description: 'Description for feature one.',
                icon: '🔥'
            },
            {
                title: 'Service Two',
                description: 'Description for feature two.',
                icon: '🚀'
            },
            {
                title: 'Service Three',
                description: 'Description for feature three.',
                icon: '💡'
            },
        ];

        featureData.forEach(item => {
            const feature = document.createElement('div');
            feature.className = 'feature';

            const icon = document.createElement('div');
            icon.style.fontSize = '2em';
            icon.textContent = item.icon;

            const title = document.createElement('h2');
            title.textContent = item.title;

            const desc = document.createElement('p');
            desc.textContent = item.description;


            features.appendChild(ServiceHeading);
            feature.appendChild(icon);
            feature.appendChild(title);
            feature.appendChild(desc);
            features.appendChild(feature);
        });

        app.appendChild(features);
    }

    createServices()

    function CreateAbout() {
        const aboutContainer = document.createElement('div');
        aboutContainer.className = 'about-container';

        const aboutText = document.createElement('div');
        aboutText.className = 'about-text';

        const aboutHeading = document.createElement('h1');
        aboutHeading.textContent = 'About Us';
        aboutText.appendChild(aboutHeading);

        const aboutParagraph = document.createElement('p');
        aboutParagraph.textContent =
            'Welcome to our company! We are a team of passionate individuals dedicated to delivering top-quality products and services. ';
        aboutText.appendChild(aboutParagraph);

        const aboutImg = document.createElement('div');
        aboutImg.className = 'about-img';

        const imgElement = document.createElement('img');
        imgElement.src = 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg';
        imgElement.alt = 'About Us pic';
        aboutImg.appendChild(imgElement);

        aboutContainer.appendChild(aboutText);
        aboutContainer.appendChild(aboutImg);

        const app = document.getElementById('app');
        app.appendChild(aboutContainer);
    }
    CreateAbout()

    // Creating ContactForm
    function CreateContact() {
        const formContainer = document.getElementById('contact-form-container');
    
        const form = document.createElement('form');
        form.className = 'form-container';
    
        const nameField = document.createElement('div');
        nameField.className = 'form-group';
        const nameLabel = document.createElement('label');
        nameLabel.textContent = 'Name:';
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.placeholder = 'Your Name';
        nameInput.required = true;
        nameField.appendChild(nameLabel);
        nameField.appendChild(nameInput);
    
        const emailField = document.createElement('div');
        emailField.className = 'form-group';
        const emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';
        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.placeholder = 'Your Email';
        emailInput.required = true;
        emailField.appendChild(emailLabel);
        emailField.appendChild(emailInput);
    
        const messageField = document.createElement('div');
        messageField.className = 'form-group';
        const messageLabel = document.createElement('label');
        messageLabel.textContent = 'Message:';
        const messageTextarea = document.createElement('textarea');
        messageTextarea.placeholder = 'Your Message';
        messageTextarea.required = true;
        messageField.appendChild(messageLabel);
        messageField.appendChild(messageTextarea);
    
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.type = 'submit';
    
        form.appendChild(nameField);
        form.appendChild(emailField);
        form.appendChild(messageField);
        form.appendChild(submitButton);
    
        formContainer.appendChild(form);
    
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission
            alert('Form submitted!'); // Placeholder for form processing logic
        });
    }
    
  
    document.addEventListener('DOMContentLoaded', function() {
        CreateContact();
    });
    
    
    // Creating foooterr 
    function CreateFooter() {
        const footer = document.createElement('div');
        footer.className = 'footer';

        const footerText = document.createElement('p');
        footerText.textContent = '© 2024 Your Company. All rights reserved.';

        footer.appendChild(footerText);
        app.appendChild(footer);
    }
    CreateFooter()
});

