//  preloader

window.addEventListener("load", () => {
  document.body.classList.remove("hide-me");
});

//Parallax effect in main header

if (window.innerWidth >= 1920) {
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
      box.removeEventListener("scroll");
      box.classList.remove("trigger");
    }
  });
}

window.addEventListener("scroll", checkBoxes);

// back to top
