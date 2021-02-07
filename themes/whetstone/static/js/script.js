//  preloader

window.addEventListener('load', () => {
  document.body.classList.remove('hide-me');
})

//Parallax effect in mainfooter


if (window.innerWidth >= 1920) {
  const parallax = (id, rate) => {
    let el = document.querySelector(id);
    if ( el === null) {
      return;
    }
    const sp = () => {
      let x = el.getBoundingClientRect().top / rate;
      let y = Math.round(x * 100) / 100;
      el.style.backgroundPosition = 'center ' + y + 'px';
    };
    sp();
    window.addEventListener('scroll', function (e) {
      sp();
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        returnTop.style.opacity = 1;
        returnTop.style.transform = "rotate(-90deg)";
      } else {
        returnTop.style.opacity = 0;
        returnTop.style.transform = "rotate(90deg)";
      }
    });
  };

  parallax('#parallax', 3);
}

// return to top
window.onscroll = function() {
  const returnTop = document.getElementById('toTop'); 

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    returnTop.style.opacity = 1;
    returnTop.style.transform = "rotate(-90deg)";
  } else {
    returnTop.style.opacity = 0;
    returnTop.style.transform = "rotate(90deg)";
  }
}

// navigation opacity

const cards = document.querySelectorAll('.card');

  const config = {
    rootMargin: '50px 20px 75px 30px',
    threshold: [0, 0.25, 0.75, 1]
  };
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('fadeIn');
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove('fadeIn');

      }
    });
  }, config);
  
  cards.forEach(entry => {
    observer.observe(entry);
  });



// back to top

