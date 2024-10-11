

const app = document.getElementById('app');

// Creating NavBar
function createNav() {
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

// Creating Hero
function createHero() {
    const Hero = document.createElement('div');
    Hero.className = 'Hero ';

    const HeroHeading = document.createElement('h1');
    HeroHeading.textContent = 'Welcome to Our Page';

    const HeroButton = document.createElement('a');
    HeroButton.href = '#';
    HeroButton.className = 'button';
    HeroButton.textContent = 'Get Started';

    Hero.appendChild(HeroHeading);
    Hero.appendChild(HeroButton);
    app.appendChild(Hero);
}

createHero();

// Creating Services
function createServices() {
    const ServicesSection = document.createElement('section');
    const ServicesHeading = document.createElement('div');
    ServicesHeading.className = 'services container';
    const ServiceHeading = document.createElement('h1');
    ServiceHeading.textContent = 'Our Services';

    ServicesHeading.appendChild(ServiceHeading);
    ServicesSection.appendChild(ServicesHeading);

    const features = document.createElement('div');
    features.className = 'features';

    const featureData = [
        {
            title: 'Service One',
            description: 'Description for Service one. ',
            icon: '🔥'
        },
        {
            title: 'Service Two',
            description: 'Description for Service two.',
            icon: '🚀'
        },
        {
            title: 'Service Three',
            description: 'Description for Service three.',
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

        feature.appendChild(icon);
        feature.appendChild(title);
        feature.appendChild(desc);
        features.appendChild(feature);
    });

    ServicesSection.appendChild(features);
    document.getElementById('app').appendChild(ServicesSection);
}

createServices();
// Creating About Section
function CreateAbout() {
    const aboutContainer = document.createElement('div');
    aboutContainer.className = 'about-container container ';

    const aboutText = document.createElement('div');
    aboutText.className = 'about-text';

    const aboutHeading = document.createElement('h1');
    aboutHeading.textContent = 'About Us';
    aboutText.appendChild(aboutHeading);

    const aboutParagraph = document.createElement('p');
    aboutParagraph.textContent =
        'Welcome to our company! We are a team of passionate individuals dedicated to delivering top-quality products and services.';
    aboutText.appendChild(aboutParagraph);

    const aboutImg = document.createElement('div');
    aboutImg.className = 'about-img';

    const imgElement = document.createElement('img');
    imgElement.src = 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg';
    imgElement.alt = 'About Us pic';
    aboutImg.appendChild(imgElement);

    aboutContainer.appendChild(aboutText);
    aboutContainer.appendChild(aboutImg);

    app.appendChild(aboutContainer);
}
CreateAbout();
function CreateTestimonials() {
    const testimonialContainer = document.getElementById('app');

    const heading = document.createElement('h2');
    heading.textContent = 'What Our Customers Say';
    heading.className = 'TestHeading';
    testimonialContainer.appendChild(heading);

    const TestimonialMain = document.createElement('div');
    TestimonialMain.className = 'TestimonialMain container';
    testimonialContainer.appendChild(TestimonialMain);


    const TestimonialData = [
        {
            name: 'Zayan',
            message: 'Wonderful staff. Clean office. Thorough wellness check. As a mother, I felt “seen” for the first time in 10 years. 5/5'
        },
        {
            name: 'Khizer',
            message: 'This service was outstanding'
        },
        {
            name: 'Qasim',
            message: 'Canton Medical Center is a great place for your Primary Care needs. The staff is small but are all very friendly and helpful.'
        },
        {
            name: 'Joshua',
            message: 'Really satisfied with the product.'
        }
    ];


    TestimonialData.forEach((testimonial, index) => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial-card';
        testimonialDiv.style.display = index === 0 ? 'block' : 'none';

        const nameElement = document.createElement('h4');
        nameElement.textContent = testimonial.name.toUpperCase();

        const messageElement = document.createElement('p');
        messageElement.textContent = testimonial.message;

        testimonialDiv.appendChild(nameElement);
        testimonialDiv.appendChild(messageElement);
        TestimonialMain.appendChild(testimonialDiv);
    });

    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'buttons';
    const prevButton = document.createElement('button');
    prevButton.className = 'prev';
    prevButton.textContent = '<<<';

    const nextButton = document.createElement('button');
    nextButton.className = 'next ';
    nextButton.textContent = '>>>';

    testimonialContainer.appendChild(buttonDiv);
    testimonialContainer.appendChild(prevButton);
    testimonialContainer.appendChild(nextButton);

    let currentIndex = 0;
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    const showTestimonial = (index) => {
        testimonialCards.forEach(card => card.style.display = 'none');
        testimonialCards[index].style.display = 'block';
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? testimonialCards.length - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === testimonialCards.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });
}

CreateTestimonials();


// Creating Contact Form

function CreateContact() {
    const formContainer = document.getElementById('app');

    const layout = document.createElement('div');
    layout.className = 'layout container';

    const formSection = document.createElement('div');
    formSection.className = 'form-section';

    const heading = document.createElement('h2');
    heading.textContent = 'Contact Us';
    heading.className = 'contact-heading'
    formSection.appendChild(heading);

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

    form.appendChild(nameField);
    form.appendChild(emailField);
    form.appendChild(messageField);
    form.appendChild(submitButton);
    formSection.appendChild(form);

    const textSection = document.createElement('div');
    textSection.className = 'text-section';
    const text = document.createElement('p');
    text.textContent = 'Feel free to contact us for any queries or suggestions. We value your feedback and will get back to you as soon as possible! Feel free to contact us for any queries or suggestions. We value your feedback and will get back to you as soon as possible!';
    textSection.appendChild(text);

    layout.appendChild(formSection);
    layout.appendChild(textSection);
    formContainer.appendChild(layout);

    form.addEventListener('submit', function () {

        const nameCons = nameInput.value;
        console.log('name=>', nameCons);

        const emailCons = emailInput.value;
        console.log('E-mail=>', emailCons);

        const msgCons = messageTextarea.value;
        console.log('Your message=>', msgCons)

        alert('Form submitted check console :)');

        nameInput.value = null
        emailInput.value = null
        messageTextarea.value = null
        console.log(messageTextarea.value)
    });
}

CreateContact();


// Creating Footer

function CreateFooter() {
    const footer = document.createElement('div');
    footer.className = 'footer';

    const footerText = document.createElement('p');
    footerText.textContent = '© 2024 Your Company. All rights reserved.';

    footer.appendChild(footerText);
    app.appendChild(footer);
}

CreateFooter();


console.log(app)