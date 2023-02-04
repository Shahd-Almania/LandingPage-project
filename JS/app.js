
 // * Define Global Variables
const sections = document.querySelectorAll('section');
const ul = document.getElementById('navbar__list');
 // * End Global Variables


 /////////////////////////////////////////////////////////////////

 // * Start Helper Functions

 // ** function for create a section and add content inside it
const createSection = () => {

  let counter = '';
  sections.forEach(section => {
      const sectionID = section.id;
      const sectionName = section.dataset.nav;
      counter += `<li><a class="menu__link" href="#${sectionID}">${sectionName}</a></li>`;

  });
  ul.innerHTML = counter;
};
createSection();

 /////////////////////////////////////////////////////////////////

 // ** section is being viewed while scrolling through the page
 // *** The element location relative to the (viewport using .getBoundingClientRect() built-in function.
 const viewport  = (section) => {
  let sectionSc = (section.getBoundingClientRect());
  return(sectionSc.top >= 0);
 }

const activeClass = () => {
  sections.forEach(section => {
 
    if(viewport(section)){
      if(!section.classList.contains('your-active-class'));
      // ***adding the active class
      section.classList.add('your-active-class');
    }
    else
    {
      // ***remove the active class
      section.classList.remove('your-active-class');
    }
});
  }
  
  document.addEventListener('scroll',activeClass);



 // * End Helper Functions


