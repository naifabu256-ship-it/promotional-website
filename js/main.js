const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('primary-navigation');

navToggle.addEventListener('click', ()=>{
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  // Toggle visibility for mobile nav
  const isHidden = nav.getAttribute('aria-hidden') === 'true';
  nav.setAttribute('aria-hidden', String(!isHidden));
});

// Close nav when a link is clicked (mobile)
nav.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click', ()=>{
    if(window.innerWidth <= 800){
      navToggle.setAttribute('aria-expanded','false');
      nav.setAttribute('aria-hidden','true');
    }
  });
});

// Initialize aria-hidden state
if(window.innerWidth <= 800){
  nav.setAttribute('aria-hidden','true');
} else {
  nav.setAttribute('aria-hidden','false');
}

// Update on resize
window.addEventListener('resize', ()=>{
  if(window.innerWidth <= 800){
    nav.setAttribute('aria-hidden','true');
  } else {
    nav.setAttribute('aria-hidden','false');
  }
});
