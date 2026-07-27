// Small script to reveal sections when they scroll into view.
// Keeps the original behaviour from your file but isolated here.
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    // Fallback: reveal all
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },{threshold:0.15});
  els.forEach(el=>io.observe(el));
});
