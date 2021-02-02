//  preloader

window.addEventListener('load', () => {
  document.body.classList.remove('hide-me');
})

//Parallax effect in mainfooter

// if document.body.scrollTop > 0 || document.documentElement.scrollTop > 0

if (window.innerWidth >= 1920) {
  const parallax = (id, rate) => {
    let el = document.querySelector(id);
    const sp = () => {
      let x = el.getBoundingClientRect().top / rate;
      let y = Math.round(x * 100) / 100;
      el.style.backgroundPosition = 'center ' + y + 'px';
    };
    sp();
    window.addEventListener('scroll', function (e) {
      sp();
    });
  };

  parallax('#parallax', 3);
}

 if (window.innerWidth >= 1920) {

 }
