let currentYear = document.querySelector(".jsCurrentYear");
let lastModified = document.querySelector("#lastModified");
const date = new Date();
 
currentYear.innerHTML = date.getFullYear();
lastModified.innerHTML = document.lastModified;
