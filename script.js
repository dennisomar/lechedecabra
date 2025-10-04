
document.addEventListener('DOMContentLoaded', function(){
  // CountAPI global counter
  const el = document.getElementById('visitas-count');
  if(el){
    fetch('https://api.countapi.xyz/hit/lechedecabra/webvisitas')
      .then(r=>r.json()).then(d=>{ el.innerText = d.value.toLocaleString(); })
      .catch(()=>{ el.innerText = '—'; });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    })
  });

  // Testimonials autoplay
  const wrap = document.querySelector('.testimonials');
  if(wrap){
    let i=0;
    setInterval(()=>{
      i = (i+1) % wrap.children.length;
      wrap.style.transform = 'translateX(' + (-i * (wrap.children[0].offsetWidth + 16)) + 'px)';
    }, 3600);
  }

  // Language switcher - toggles data-lang content
  const switcher = document.getElementById('lang-switch');
  const setLang = (lang) => {
    document.documentElement.lang = (lang === 'en') ? 'en' : 'es';
    document.querySelectorAll('[data-lang]').forEach(el=>{
      el.style.display = (el.getAttribute('data-lang') === lang) ? '' : 'none';
    });
    // save pref
    try{ localStorage.setItem('site_lang', lang); }catch(e){}
  };
  // init
  const saved = localStorage.getItem('site_lang') || 'es';
  setLang(saved);
  if(switcher){
    switcher.addEventListener('click', ()=>{
      const current = document.documentElement.lang === 'en' ? 'en' : 'es';
      setLang(current === 'en' ? 'es' : 'en');
    })
  }
});
