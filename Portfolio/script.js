// const ani0 = new Typed('.animation', {
//     strings: ['<i>FrontEnd Developer</i>', '<i>Web Designer</i>'],
//     typeSpeed: 80,
//     backSpeed: 100,
//     backDelay: 500,
//     loop: true
// });

function repeatedTyping (a,b,c,d,e,f) {
    new Typed( a, {
        strings: b,
        typeSpeed: c,
        backSpeed: d,
        backDelay: e,
        loop: f
    });
}

repeatedTyping('.animation',['<i>FrontEnd Developer</i>', '<i>Web Designer</i>'], 80,100,500,true)

    gsap.from('.svg path', { 
        duration: 5,
        //  opacity: 1,
         ease: Circ,
        strokeOffset: 80,
        strokeDasharray: 40
         
        })

// ScrollReveal animations
// window.sr = ScrollReveal({
//     reset: false, // Disable reset to prevent repeated animations on scroll
//     distance: '20px', // Reduced distance for smoother animations
//     duration: 600, // Reduced duration for faster animations
//     delay: 100 // Reduced delay to make animations more responsive
// });

// sr.reveal('.js--fadeInLeft', {
//     origin: 'left',
//     easing: 'ease-in-out', // Add easing for smoother effect
//     interval: 100 // Delay between animations of multiple elements
// });

// sr.reveal('.js--fadeInRight', {
//     origin: 'right',
//     easing: 'ease-in-out',
//     interval: 100
// });

// Loading page removal
// document.querySelector('.start-btn').addEventListener('click', function(e) {
//     e.preventDefault();
//     setTimeout(() => {
//         document.querySelector('.loading-section').remove();
//     }, 10);
// });

// // Ensure .revealToSpan function is defined before it's called
// function revealToSpan() {
//     document.querySelectorAll('.reveal').forEach(function(element) {
//         const parentSpan = document.createElement('span');
//         const childSpan = document.createElement('span');

//         parentSpan.className = 'parent';
//         childSpan.className = 'child';
//         childSpan.textContent = element.textContent;

//         parentSpan.appendChild(childSpan);
//         element.innerHTML = ''; // Clear the element's content
//         element.appendChild(parentSpan); // Append the new span structure
//     });
// }

// revealToSpan();

document.querySelector('.')