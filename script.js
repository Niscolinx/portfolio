//NAV BAR SHRINK ON SCROLL
const navBackground = () =>{
  let navBar = document.querySelector('#navbar');
  window.onscroll = function() { 
      if (document.documentElement.scrollTop) {
        navBar.classList.add("nav-background");
      } else {
        navBar.classList.remove("nav-background");
      }
  }
}  
//SLIDING THE NAV BAR ON SMALLER SCREENS
  const navSlide = () =>{
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-list');
    const navEl = document.querySelectorAll('.nav-list__el');

    menu.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      menu.classList.toggle('toggle');
      navEl.forEach((link, index) => {
        if(link.style.animation){
          link.style.animation = '';
        }
        else{
          link.style.animation = `navLinkSlide 1s ease forwards ${index / 7 + 0}s`
        }
      })
    })
  }

  const app = () =>{
    navBackground()
    navSlide()
  }

  app();
