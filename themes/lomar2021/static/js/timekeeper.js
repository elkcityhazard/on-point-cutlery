

//	variables to be set by function call
const cost = document.getElementById('cost');
   const d = document.querySelector('.day');
   const h = document.querySelector('.hour');
   const m = document.querySelector('.minute');
   const s = document.querySelector('.promo-second');

let views = sessionStorage.getItem('views')


// Create the countdown object constructor

function DateCountdown(future) {

    //	Today's Date
    this.today = Date.now();
    //	Future Date
    this.future = function () {
        return new Date(future).getTime()
    }
    this.difference = function () {
        return this.future() - this.today
    },
        this.days = function () {
            return Math.floor(this.difference() / 1000 / 60 / 60 / 24)
        },
        this.hours = function () {
            return Math.floor(this.difference() / 1000 / 60 / 60 % 24)
        },
        this.minutes = function () {
            return Math.floor(this.difference() / 1000 / 60) % 60
        },
        this.seconds = function () {
            return Math.floor(this.difference() / 1000) % 60
        }
};




function ReturnFutureDate() {

    let weekend

    if (new Date(Date.now()).getDay()  == 0 || new Date(Date.now()).getDay() == 6) {
        weekend = 2
    } else {
        weekend = 0
    }

    //	@variable date
//	@typeof String

const rand = Math.random() * 3 + 1 + weekend


const future = Date.now() + (1000 * 24 * 60 * 60) *  rand


return future

}

const future = ReturnFutureDate()

function showCountDown(future) {



    if (views !== null) {
        document.querySelector('.min-price').style.display = 'none';
        return
    }

    if (Date.now() > future) {
        return null
    }


    if (!future) {
        return null
    } else {

        const updateCounter = setInterval(() => {
            const date = new DateCountdown(future)
            const arr = [d, h, m, s]

            const banner = document.querySelector('.min-price')
            banner.classList.add('fade-in')

            for (let i of arr) {
                i.addEventListener('click', (e) => {
                    location.assign('/contact-us');
                })
            }

            d.textContent = date.days();
            h.textContent = date.hours();
            m.textContent = date.minutes();
            s.textContent = date.seconds();

            if (date.difference() <= 0) {
                cost.textContent = "$60"
            } else {
                cost.textContent = "$50"
            }

        }, 1000);
    }
};


showCountDown(future);

const closeModal = (element) => {
    if (!element) {
        return null
    }
    element.setAttribute('aria-expanded', false);
    element.style.display = "none";
}

document.getElementById('minPrice').addEventListener('click', (e) => {
    e.preventDefault();
    if (!e.target) {
        alert('there has been an error');
    }
    e.target.setAttribute('aria-pressed', true);
    const modal = document.querySelector('.min-price')
    closeModal(modal)
    sessionStorage.setItem('views', true)
    return clearInterval(showCountDown.updateCounter)
})

