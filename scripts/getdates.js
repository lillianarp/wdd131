
console.log("JavaScript file is linked and running.");

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear; 

const lastModified = document.lastModified; 
document.getElementById("modifiedDate").textContent = lastModified;