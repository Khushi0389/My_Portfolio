# 💼 Khushi Gupta - Personal Portfolio Website

This is my personal portfolio website built with HTML, CSS, JavaScript, and Bootstrap. It showcases my journey as an M.Tech CSE student at NIT Bhopal, highlighting my skills, projects, coursework, and contact information.

## 🌐 Live Website

🔗 [Visit My Portfolio](https://khushi0389.github.io/My_Portfolio)

## 📁 Project Structure

My_Portfolio/
├── index.html # Main homepage

├── style.css # Custom CSS styles

├── script/script.js # JS for navbar behavior

├── thankyou.html # Thank you page after contact form submission

├── redirect.html # Redirect handler for FormSubmit

├── files/
│ └── Khushi_Gupta_CV.pdf # Resume/CV download

├── images/ # Project and UI images

└── README.md # Project info and instructions


## 🛠️ Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- Font Awesome
- FormSubmit (for contact form)

## 📬 Contact Form Setup

This website uses [FormSubmit](https://formsubmit.co/) to handle form submissions.

To redirect users to a custom thank you page after submission:

1. Place `redirect.html` in the root folder.
2. Set this in the form:
   ```html
   <input type="hidden" name="_next" value="https://khushi0389.github.io/My_Portfolio/redirect.html">
   
Inside redirect.html, use:

<meta http-equiv="refresh" content="0;url=thankyou.html">
🧠 Features
Responsive navbar and hero section

About section detailing background and interests

Coursework with certificate links

Portfolio with GitHub project links

CV download

Google Map embed

Working contact form with social icons

Fully responsive and mobile-friendly

