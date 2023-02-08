// Used to activcate sticky in header
window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0); 
});

// Menu Toggle for second style
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


// Define the two stylesheet paths
const style1 = 'css/styles.css';
const style2 = 'css2/styles.css';


var currentStyle;

// Initial Load
function loadStyle() {
    currentStyle = localStorage.getItem("page");
    if(currentStyle=== null){
        currentStyle = style1;
    }
    console.log("Restarting Page")
    console.log(currentStyle)
    document.getElementById("styles").setAttribute("href", currentStyle);
}

// Toggles styles
function toggleStyles() {

    page_style = localStorage.getItem("page");

    if (currentStyle === style1){
        currentStyle = style2;
    }
    else{
        currentStyle = style1;
    }

    localStorage.setItem("page", currentStyle);
    document.getElementById("styles").setAttribute("href", currentStyle);
}

function update(e){
    
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)

// Load Style Immediately
loadStyle();