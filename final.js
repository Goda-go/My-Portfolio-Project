

// downloading my cv when click on the btn
function downloadCv(){
let fbtn = document.querySelector(".fbtn")
fbtn.addEventListener("click", link)
function link (){
    let fileId = '16S4GMuNlaCM0ez0hvK7FX6mfZnFbqk3W'
    let downloadUrl = 'https://drive.google.com/uc?export=download&id=16S4GMuNlaCM0ez0hvK7FX6mfZnFbqk3W'
    const link = document.createElement('a');
    link.href = downloadUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
}
downloadCv()

// adding the Skill part 
function skillPart(){
    let items = document.querySelector(".items")
    let arryOfObject = [
    {
        icon:'class="fa-solid fa-network-wired icon"',
        skill:"Networking"
    } , 
    {
        icon: 'class="fa-solid fa-user-tie icon"', 
        skill:"System Admin" 
    }, 
    {
        icon:'class="fa-solid fa-wrench icon"', 
        skill:'Troubleshooting'
    },
    {
        icon:' class="fa-solid fa-bug icon"',
        skill:'Pentesting'
    },
    {
        icon:'class="fa-solid fa-shield icon"',
        skill:'Web Secruity'
    },
    {
        icon:'class="fa-solid fa-bug icon"' ,
        skill:'Vulnerability Assessment'
    },
    {
        icon: 'class="fa-solid fa-code icon"',
        skill:'Scripting'
    }
]

for (let element of arryOfObject){
    items.innerHTML += `
    <div>
    <i ${element.icon}></i>
    <p class="descrip">${element.skill}</p>
    </div>
    `
}
}
skillPart()
// The Modal Part 
function modalPart (){
    // Get the modal
let modal = document.getElementById("myModal");
let btn = document.querySelector(".items");
let span = document.querySelector(".close")
let modalIcon = document.querySelector(".modal-icon");
let modalTitle = document.querySelector(".modal-title");
let modalDesc = document.querySelector(".modal-diesc");

let skillsData = [
    {
        icon: 'fa-solid fa-network-wired',
        skill: "Networking",
        desc: "Basic understanding of networking concepts, protocols, and how devices communicate within a network." 
    },
    {
        icon: 'fa-solid fa-user-tie',
        skill: "System Admin",
        desc: "Managing Windows servers, users, and system settings to ensure smooth operation"
    },
    {
        icon: 'fa-solid fa-wrench',
        skill: 'Troubleshooting',
        desc: "Diagnosing and resolving hardware, software, and network issues effectively"
    },
    {
        icon: 'fa-solid fa-bug',
        skill: 'Pentesting',
        desc: "Performing basic penetration testing to identify security weaknesses in systems"
    },
    {
        icon: 'fa-solid fa-shield',
        skill: 'Web Secruity',
        desc: "Testing web applications to detect common vulnerabilities and improve security"
    },
    {
        icon: 'fa-solid fa-bug',
        skill: 'Vulnerability Assessment',
        desc: "Identifying and assessing potential security risks in systems and networks."
    },
    {
        icon: 'fa-solid fa-code',
        skill: 'Scripting',
        desc: "Writing simple scripts using Bash or Python to automate tasks and improve efficiency"
    }
];

// When the user clicks on the button, open the modal
btn.addEventListener("click", function(e) {
    
    // We're looking for the nearest Element containing the word "skill
    let clickedElement = e.target.closest('[data-name]') || e.target.closest('.skil-card') || e.target.closest('div');
    
    // We get the name of the skill from the text inside the element that was stepped on
    let skillName = clickedElement.innerText.trim();

    // We're looking through data
    let data = skillsData.find(item => item.skill === skillName);

    if (data) {
        // We clean up the old classes and add the new ones to the icon.
        modalIcon.className = "modal-icon " + data.icon.replace('class="', '').replace('"', '');
        
        modalTitle.innerText = data.skill;
        modalDesc.innerText = data.desc; // Or data.desc if you added it
        
        modal.style.display = "block";
    }
});

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", close)
function close() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Finishing the Modal Part 
}
modalPart()

// Starting the Porject loop section

function projects(){  
let porject = document.querySelector('.myprojects')
let arrayOfProjects = [
    {
        imgPath: './photo3.png' ,
        h3:  'Portfolio Website' ,
        Overview: 'A fully responsive personal portfolio website built with HTML, CSS, and JavaScript. It features smooth scrolling navigation, dynamically generated content sections, and a clean academic design theme.' ,
    } , 
    {
        imgPath: './photo0.png' , 
        h3: 'Network Simulation Project using Cisco Packet Tracer' , 
        Overview: 'Designed and configured a network topology using Cisco Packet Tracer, Implemented a router connected to three switches, each supporting 15 devices.' ,
    }
]

for (let projects of arrayOfProjects) {
    porject.innerHTML += `
                <div class='main' >
                    <img src="${projects.imgPath}" alt="error" width='300' height="100" >
                    <div class="projectCon">
                        <h3 class="protitle">${projects.h3}</h3>
                        <p class="proDescrip">${projects.Overview}</p>
                    </div>
                </div>    
    `

}
}
projects()

// The Contact Validation 
function contactMeValidation(){
    let contact = document.querySelector('.contactMe')
    let contact0 = document.querySelector('.contact_content')
    let name = document.querySelector('.name0')
    let email= document.querySelector('.email')
    let texterea = document.querySelector('.textarea')
    let ebtn = document.querySelector('.ebtn')
    let errorName = document.querySelector('.nameError')
    let errormail = document.querySelector('.emailError')
    let errormessge = document.querySelector('.messagError')


    ebtn.addEventListener('click' , check )
    function check() {
        function validateEmail(mail) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(mail);
        }
        // validate the name
        let isValid = true;
        if (name.value !== " " && name.value.length > 2 && isNaN(name.value)) {
            name.style.borderColor = ''
            errorName.style.display = 'none'
        } else {
            isValid = false
            errorName.innerHTML = 'Enter a valid name'
            name.style.borderColor  = 'red'
            name.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'
            errorName.style.color =  'red'
            errorName.style.display = ''
        }
        // validate the email
        if (validateEmail(email.value)) {
            email.style.borderColor = ''
            errormail.style.display = 'none'           
        } else {
            isValid = false
            errormail.innerHTML = 'Enter a vaild email'
            email.style.borderColor  = 'red'
            email.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'
            errormail.style.color =  'red'
            errormail.style.display = ''
        }
        // validate the  Message 
        if (texterea.value !==""  && texterea.value.length > 10 )  {

            texterea.style.borderColor =  ''
            errormessge.style.display = 'none'   

        } else {
            isValid = false
            errormessge.innerHTML = 'Your message should be at least 10 characters'
            texterea.style.borderColor  = 'red'
            texterea.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'
            errormessge.style.color =  'red'
            errormessge.style.display = ''      
        }
        if (isValid === true ) {
            alert("done")
            name.value = ''
            email.value = ''
            texterea.value = ''
        } else {
            alert('error')
        }

    }
        window.addEventListener('click', function(event) {
            if (event.target == contact || event.target == contact0 ) {
                //name
                name.style.borderColor = ''
                errorName.style.display = 'none'
                //email
                email.style.borderColor = ''
                errormail.style.display = 'none'
                //text box
                texterea.style.borderColor =  ''
                errormessge.style.display = 'none'   
            }
        })    
}
contactMeValidation()


// Mobile Menu Navigation Part
function mobileNavbar() {
    let menuToggle = document.getElementById('mobile-menu');
    let nav = document.querySelector('nav');
    let navLinks = document.querySelectorAll('nav ol li a');
    let icons = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        if (nav.classList.contains('active')) {
            icons.classList.remove('fa-bars');
            icons.classList.add('fa-xmark');
        } else {
            icons.classList.remove('fa-xmark');
            icons.classList.add('fa-bars');
        }
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            icons.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
}

mobileNavbar();