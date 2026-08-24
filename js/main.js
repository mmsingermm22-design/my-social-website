// My Social Website JavaScript


document.addEventListener("DOMContentLoaded",()=>{



// Smooth scroll for internal links

const links = document.querySelectorAll('a[href^="#"]');


links.forEach(link=>{


link.addEventListener("click",(e)=>{


const target =
document.querySelector(link.getAttribute("href"));



if(target){


e.preventDefault();



target.scrollIntoView({

behavior:"smooth"

});


}



});


});







// Scroll animation


const sections =
document.querySelectorAll(
".hero, .about-preview, .features-preview, .founder-preview"
);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}



});


},{

threshold:0.15

});



sections.forEach(section=>{


observer.observe(section);


});








// Current year footer update


const year =
document.querySelector("footer p");



if(year){


const currentYear =
new Date().getFullYear();


year.innerHTML =
`© ${currentYear} My Social. All Rights Reserved.`;


}





});
