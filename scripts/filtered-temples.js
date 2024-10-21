console.log("JavaScript file is linked and running.");

// Copyright and Last Modified dates

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear; 

const lastModified = document.lastModified; 
document.getElementById("modifiedDate").textContent = lastModified;

// Responsive Menu

const mainnav = document.querySelector('nav'); 
const hambutton = document.querySelector('#menuburger');
const headerTitle = document.querySelector('header h1');


// Add a click event listener to the hamburger
hambutton.addEventListener('click', () => {

    mainnav.classList.toggle('show'); 
    hambutton.classList.toggle('show'); 
    console.log('Menu toggled'); // Debugging to check if the click event works

    // Hide or show the header title based on menu state
    // if (mainnav.classList.contains('show')) {
    //     headerTitle.style.display = 'none'; // Hide the title when menu is shown
    // } else {
    //     headerTitle.style.display = 'block'; // Show title when menu is hidden
    // }

});

// Connect Menu Links to PageTitle

const menuLinks = document.querySelectorAll('.navigation a');
const pageTitle = document.querySelector('h2'); 

menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent page reload
        
        // Remove 'active' class from all links
        menuLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        event.target.classList.add('active');

        // Update the page title to the clicked link's data-title
        const newTitle = event.target.getAttribute('data-title');
        pageTitle.textContent = `${newTitle}`;
    });
});

// All the temples ('temples' array)

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg", alt: "Aba Nigeria Temple exterior view"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg", alt: "Manti Utah Temple exterior view"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg", alt: "Payson Utah Temple exterior view"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg", alt: "Yigo Guam Temple exterior view"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg", alt: "Washington D.C. Temple exterior view"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg", alt: "Lima Perú Temple exterior view"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg", alt: "Mexico City Mexico Temple exterior view"
    },

    // Adding: Hamilton NZ, Apia Samoa and the Tonga temple 

    {
        templeName: "Hamilton New Zealand",
        location: "Hamilton, New Zealand",
        dedicated: "1958, April, 20-22",
        area: 45251,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/hamilton-new-zealand-temple/hamilton-new-zealand-temple-29744-main.jpg", alt: "Hamilton New Zealand Temple exterior view"
    },   
    {
        templeName: "Apia Samoa",
        location: "Apia, Samoa",
        dedicated: "1983, August, 5-7",
        area: 18691,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg", alt: "Apia Samoa Temple exterior view"
    }, 
    {
        templeName: "Nuku'alofa Tonga",
        location: "Tongatapu, Tonga",
        dedicated: "1983, August, 9-11",
        area: 21184,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/nuku'alofa-tonga-temple/nuku'alofa-tonga-temple-12094-main.jpg", alt: "Nuku'alofa Tonga Temple exterior view"
    },  

  ];


  // Display the temples in the temple-grid
  function displayTemples(filteredTemples) {
    const container = document.getElementById("temple-grid");
    container.innerHTML = ""; // clear the grid befpre new filter


    filteredTemples.forEach((temple) => {
      const card = `
          <div class="temple-card">
              <h3>${temple.templeName}</h3>
              <p>LOCATION: ${temple.location}</p>
              <p>DEDICATED: ${temple.dedicated}</p>
              <p>SIZE: ${temple.area} sq ft</p>
              <img src="${temple.imageUrl}" alt="${temple.alt}" loading="lazy">
          </div>
          `;
          container.innerHTML += card; // add another card to the grid 
    });

}

// EventListener for each filter

displayTemples(temples); 
pageTitle.textContent = "Home";

document.getElementById("filter-old").addEventListener("click", () => {
  const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  displayTemples(oldTemples);
  pageTitle.textContent = "Older Temples"; 
});

document.getElementById("filter-new").addEventListener("click", () => {
  const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
  displayTemples(newTemples);
  pageTitle.textContent = "Newer Temples"; 
});

document.getElementById("filter-large").addEventListener("click", () => {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
  pageTitle.textContent = "Larger Temples"; 
});

document.getElementById("filter-small").addEventListener("click", () => {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
  pageTitle.textContent = "Smaller Temples"; 
});

document.getElementById("filter-home").addEventListener("click", () => {
  displayTemples(temples); // no filter 
  pageTitle.textContent = "All Temples"; 
});
  