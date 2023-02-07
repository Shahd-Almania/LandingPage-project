
// Start Global Variables
const navBar = document.querySelector('.navbar__menu');
const ul = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
// * End Global Variables


/////////////////////////////////////////////////////////////////

 // * Start build the nav

 // ** function for create a section and add content inside it

const createSection = () =>{
    sections.forEach(section => {
        const navButton = document.createElement('li');
        navButton.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        ul.appendChild(navButton);
        scrollBehavior(navButton, section);
    });
    
    navBar.appendChild(ul);
}

//Build Nav Function
createSection();


// Start of Scroll to anchor ID using scrollTO event

function scrollBehavior(navButton, section){
    navButton.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
        });
    });
}

// Start of Set the Section class 'active' when it near to the top of viewport

const activeSection = () =>{
    const navActive = document.querySelectorAll(".menu__link")
    sections.forEach((section, i)=>{
         
        const sectionBond = section.getBoundingClientRect();
        //Check if the section is in viewport or not 
        if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
           //adding the active class
            section.classList.add("your-active-class");
            section.style.cssText = "background-color:rgba(0,13,60,1);";
            navActive[i].classList.add("active_button");
            
        } else{
            //remove the active class
            section.classList.remove("your-active-class");
            section.style.cssText = "background-color:linear-gradient(0deg,  100%)"; 
            navActive[i].classList.remove("active_button");
            
        }
    })
}

//Start of the Scroll Event to execute the functions of activeSection and toggleNavBar 
window.addEventListener('scroll',(event)=>{
    activeSection();  
})

// const viewport  = (section) => {
//     let sectionSc = (section.getBoundingClientRect());
//     return(sectionSc.top >= 0);
//    }
  
  
//   const activeClass = () => {
//     sections.forEach(section => {
    
//       if(viewport(section)){
//         if(!section.classList.contains('your-active-class'));
      
//       }
//       else
//       {
//         section.style.cssText = "background-color:linear-gradient(0deg,  100%)"; 
//       }
//   });
//     }
    
//     document.addEventListener('scroll',activeClass);
  
  