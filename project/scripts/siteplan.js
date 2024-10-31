
// Copyright and Last Modified dates

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear; 

const lastModified = document.lastModified; 
document.getElementById("modifiedDate").textContent = lastModified;


// Responsive Menu

const mainnav = document.querySelector('.navigation'); 
const hambutton = document.querySelector('#hamburger');


// Add a click event listener to the hamburger
hambutton.addEventListener('click', () => {

    mainnav.classList.toggle('show'); 
    hambutton.classList.toggle('show'); 
    console.log('Menu toggled'); 
});

// CTA button 

const button = document.getElementById('callButton');
button.addEventListener('click', function() {
    window.location.href = '#' // add the URL here 
});

// Toggle Section

const toggleTitles = document.querySelectorAll('.toggle-title');

toggleTitles.forEach(title => {
    title.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display = (content.style.display === "block") ? "none" : "block";
    });
});


