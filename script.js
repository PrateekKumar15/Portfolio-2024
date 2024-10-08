

// ---------------------------------- Home Section ----------------------------

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





repeatedTyping('.animation',['<i>Engineer</i>','<i>FrontEnd Developer</i>', '<i>Web Designer</i>'], 80,100,500,true)

    gsap.from('.svg path', { 
        duration: 5,
         opacity: 0,
         ease: Circ,
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

// ----------------------------------------------Navbar

let menuBar = document.querySelector('.menubar')
let unmenubar = document.querySelector('.close-menubar')
const sidebar = document.querySelector('.sidebar')

menuBar.addEventListener('click', function(e) {
    e.preventDefault()
      sidebar.style.display = 'flex'
      menuBar.style.display= 'none'
        })

unmenubar.addEventListener('click', function (e) {
e.preventDefault()
  sidebar.style.display = 'none'
  menuBar.style.display= 'block'
})


// ---------------------------------Project---------------------------
let scrollCont = document.querySelector('.gallery')
let skillsScroll = document.querySelector('.skills-wrapper')
let backBtn = document.querySelectorAll('.prevbtn')
let nextBtn = document.querySelectorAll('.nextbtn')

let a = document.getElementsByClassName("gallery")

console.log(a);




nextBtn[1].addEventListener("click", () => {
    skillsScroll.style.scrollBehavior = 'smooth';
    skillsScroll.scrollLeft += 50;
});
backBtn[1].addEventListener("click", () => {
    skillsScroll.style.scrollBehavior = 'smooth';
    skillsScroll.scrollLeft -= 50;
});




nextBtn[0].addEventListener("click", () => {
    scrollCont.style.scrollBehavior = 'smooth';
    scrollCont.scrollLeft += 50;
});
backBtn[0].addEventListener("click", () => {
    scrollCont.style.scrollBehavior = 'smooth';
    scrollCont.scrollLeft -= 50;
});



//-----------------------------------------------Skills----------------------------------------- 
addEventListener ('DOMContentLoaded',function () {
    function progressBar (a,b,c) {
        // Get all progress bars
        const number = document.querySelector(a);

        let counter =0
        let interval =  setInterval(()=>{
            if (counter == b) {
                clearInterval(interval)
            } else {
                 counter++
            number.textContent = counter + '%'
            }

        },c)
    }
    progressBar('.number1', 65,30)
    progressBar('.number2', 90,23)
    progressBar('.number3', 90,23)
    progressBar('.number4', 85,25)
    progressBar('.number5', 80,27)
})

// ---------------------------------------------------------------------- Contact Form------------------------------------------------------------------------

const formSubmit = document.getElementById('contactForm')

function sendMail() {


    function validateForm() {
        // Get form elements by their IDs
        let fname = document.getElementById('fname').value.trim();
        let  lname = document.getElementById('lname').value.trim();
        let  message = document.getElementById('message').value.trim();
        let  email = document.getElementById('email').value.trim();
        let  phone = document.getElementById('phone').value.trim();
        
        // Regular expression for email validation
        let  emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Regular expression for phone number validation (digits only)
        let  phonePattern = /^\d{10}$/; // Adjust as necessary for your requirements
    
        // Check if any field is empty
        if (!fname || !lname || !message || !email || !phone) {
            alert('All fields are required.');
            return false;
        }
    
        // Check if email is valid
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
    
        // Check if phone number is valid
        if (!phonePattern.test(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return false;
        }
    
        return true;
    }

if(validateForm()) { 

 let params = {
        to_name: "Prateek",
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

function reset (){
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
}

    const serviceID = "service_5fpcjm9";
    const templateID = "template_3brxu6o";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
         reset()
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
}
// Call the function to send the email
    formSubmit.addEventListener('submit',function (event){
        event.preventDefault();
        sendMail();
    });
  