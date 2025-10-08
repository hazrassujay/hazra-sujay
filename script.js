document.addEventListener('DOMContentLoaded', () => {

  // Animate sections on scroll
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('visible');}
    });
  },{threshold:0.2});
  sections.forEach(section=>observer.observe(section));

  // Animate skill bars
  const fills = document.querySelectorAll('.skill-fill');
  fills.forEach(fill=>{
    const width = fill.style.width;
    fill.style.width='0%';
    setTimeout(()=>{fill.style.width=width;},500);
  });

  // Sticky nav active highlighting
  const navLinks = document.querySelectorAll('nav a');
  window.addEventListener('scroll',()=>{
    let fromTop = window.scrollY + 100;
    navLinks.forEach(link=>{
      const section = document.querySelector(link.hash);
      if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
        link.classList.add('active');
      } else { link.classList.remove('active'); }
    });
  });

  // Fullscreen Overlay Feature
  const overlay = document.createElement('div');
  overlay.classList.add('fullscreen-overlay');
  document.body.appendChild(overlay);

  overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
    overlay.innerHTML = '';
  });

  document.querySelectorAll('.project-card img').forEach(img => {
    img.addEventListener('click', () => {
      const clone = img.cloneNode(true);
      overlay.innerHTML = '';
      overlay.appendChild(clone);
      overlay.classList.add('show');
    });
  });

  // (Optional) Download CV button
  const downloadBtn = document.getElementById('downloadBtn');
  if(downloadBtn){
    downloadBtn.addEventListener('click',()=>{
      window.open('Sujay_Hazra_CV.pdf','_blank');
    });
  }

});
