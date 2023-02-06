window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0); 
});

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}

// Get the button element
const button = document.querySelector('button');

// Get the <link> element
const link = document.querySelector('link');
var styleElement = document.getElementById("secondaryStyleSheet");

// Define the two stylesheet paths
const style1 = '/css/style.css';
const style2 = '/css2/style.css';

// Create a toggle function
let currentStyle = style1;
function toggleStyles() {
  if (currentStyle === style1){
    currentStyle = style2;
    styleElement.setAttribute("href","/css2/index.html");
  }
  else{
    currentStyle = style1;
  }
  link.setAttribute('href', currentStyle);
}

// Add a click event listener to the button
button.addEventListener('click', toggleStyles);