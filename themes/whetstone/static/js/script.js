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

// if (window.innerWidth >= 1920) {
//     let imgIndex = 0;
//     const images = ['/images/grinding-wheel.webp', '/images/cleaver.jpg'];
 
  
  
//     function changeBackground(el) {
//       document.querySelector(el).style.backgroundSize = '0 0';
//     if (imgIndex >= images.length - 1) {
//       imgIndex = 0;
//       document.querySelector(el).style.backgroundImage = `url(${images[imgIndex]})`;
//       document.querySelector(el).style.backgroundSize = '1920px 1080px';
//     } else {
//         imgIndex++;
//         document.querySelector(el).style.backgroundImage = `url(${images[imgIndex]})`;
//         document.querySelector(el).style.backgroundSize = '1920px 1080px';
//     }
//   }
// setInterval(() => {
//     changeBackground('.homepage-header');
// }, 1000);
// }
