
// Copyright and Last Modified dates

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear; 

const lastModified = document.lastModified; 
document.getElementById("modifiedDate").textContent = lastModified;


// Product Array

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];


  document.addEventListener("DOMContentLoaded", function() { 

    const selectOption = document.getElementById('select-product');

    if (selectOption) {  
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name; 
            option.textContent = product.name;
            selectOption.appendChild(option)
        });
    } else {
        console.error("Element with id 'select-product' not found on this page.");
    }

});



  // Review Count Logic for review.html

  let reviewCount = localStorage.getItem('reviewCount');

  // If reviewCount exists, parse it; otherwise, start with 0
  reviewCount = reviewCount ? parseInt(reviewCount) : 0;
  
  // Increment the count by 1 because this page load represents a completed review submission
  reviewCount++;
  
  // Update localStorage with the new count
  localStorage.setItem('reviewCount', reviewCount);
  
  // Display the updated review count on the page
  console.log(reviewCount);
  document.getElementById('reviewNumber').textContent = reviewCount;