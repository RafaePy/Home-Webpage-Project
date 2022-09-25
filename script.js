// Change bg and fg of button when a service block is hovered
const blocks = document.getElementById("srv-container").getElementsByTagName('div');

for (let i = 0; i < blocks.length; i++) {
    let block = blocks[i];
    let link = block.querySelector('a');
    block.addEventListener('mouseover', 
    function() {
        link.style = "background-color:#2D9CDB; \
        color:white;";
    });
    block.addEventListener('mouseout',
    function() { link.style = ""; });
    block.addEventListener('click', 
    function() { location.href = link.href });
}

// Footer content
const nav = document.querySelector('header #navmenu');
document.getElementById('footer-menu').appendChild(nav.cloneNode(true));

// Clone & Append the contact form to footer
const contactArea = document.querySelector('#contactForm');
const contactClone = contactArea.cloneNode(true);
document.getElementById('ft-contact').appendChild(contactClone);


// Mobile Nav Menu 

const header = document.querySelector('header');
const menuIcon = document.querySelector('.menuicon');
menuIcon.onclick = toggle;

function toggle() {
    if (header.className == "responsive") {
        header.classList.remove('responsive');
    } else {
        header.classList.add('responsive');
    }
}