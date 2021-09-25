

//  preloader

window.addEventListener("load",  async () => {
  const preloader = document.querySelector('.preloader');

  const removePreloader = new Promise((resolve, reject) => {
    preloader.style.opacity = 0;
    if (preloader.style.opacity == 0) {
      return resolve(preloader);
    } else {
      return reject('error');
    }
  });


removePreloader.then((loader) => {
  setTimeout(() => {
    loader.remove();
  }, 1500)
})
});

//Parallax effect in main header

if (window.innerWidth >= 1900) {
  const parallax = (id, rate) => {
    let el = document.querySelector(id);
    if (el === null) {
      return;
    }
    const sp = () => {
      let x = el.getBoundingClientRect().top / rate;
      let y = Math.round(x * 100) / 100;
      el.style.backgroundPosition = "center " + y + "px";
    };
    sp();
    window.addEventListener("scroll", function (e) {
      sp();
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        returnTop.style.opacity = 1;
        returnTop.style.transform = "rotate(-90deg)";
      } else {
        returnTop.style.opacity = 0;
        returnTop.style.transform = "rotate(90deg)";
      }
    });
  };

  parallax("#parallax", 3);
}

// return to top
window.onscroll = function () {
  const returnTop = document.getElementById("toTop");

  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    returnTop.style.opacity = 1;
    returnTop.style.transform = "rotate(-90deg)";
  } else {
    returnTop.style.opacity = 0;
    returnTop.style.transform = "rotate(90deg)";
  }
};

// navigation opacity

function checkBoxes() {
  let bottomTrigger = window.innerHeight * (4 / 5);

  const boxes = document.querySelectorAll(".card");
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < bottomTrigger) {
      box.classList.add("trigger");
    } else {
      // box.removeEventListener("scroll");
      // box.classList.remove("trigger");
    }
  });
}

window.addEventListener("scroll", checkBoxes);

// card sizes

(function() {
  let globalScrollHeight = 0;
const cards = document.querySelectorAll('.card-body')
cards.forEach((card) => {
  if (card.scrollHeight > globalScrollHeight) {
    globalScrollHeight = card.scrollHeight;
  }
})
cards.forEach((card) => card.style.minHeight = globalScrollHeight + 'px');
console.log(cards);
})()


// Modal Video
function modalControls(btn, modalID, delay) {
  btn = document.getElementById(btn)
  modalID = document.getElementById(modalID)
  btn.onclick = () => {
  modalID.style.opacity = 0;
  document.querySelector('.reel').pause();
  document.documentElement.style.overflowY = "initial";
  setTimeout(() => {
    modalID.style.display = "none";
  }, `${delay}`);
}
}

window.onload = function() {
  const modal = document.querySelector('.container');
  modal.classList.toggle('active');
  if (document.getElementById('modalReel')) {
    document.documentElement.style.overflowY = "hidden";
  }
modalControls('toggle-modal', 'modalReel', 500)
}



function expandNav(id, toggleID) {
  const toggle = document.getElementById(id);
  const toBeToggled = document.getElementById(toggleID)

  toBeToggled.classList.toggle('active');

  toBeToggled.classList.contains('active') ? toBeToggled.style.height = `${toBeToggled.scrollHeight + 10}px` : toBeToggled.style.height = 0 + 'px';

}

document.getElementById('nav-toggle-label').addEventListener('click', () => {

  expandNav('nav-toggle-label', 'navList')
})




