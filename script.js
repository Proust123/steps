let circles = document.querySelectorAll('.progress')
let bar = document.querySelector('.fillbar')
let prev = document.querySelector('.btn1')
let next = document.querySelector('.btn2')

let count = 0

next.addEventListener('click', () => {
    count++

    if(count > circles.length - 1) {
        count = circles.length - 1
    }

    fillCircle()
})

prev.addEventListener('click', () =>{
    count--

    if(count < 0) {
        count = 0
    }

    fillCircle()
})

function fillCircle() {
    circles.forEach((circle, idx) => {
        if( idx <= count) {
            circle.classList.add('cirColor')
        }else{
            circle.classList.remove('cirColor')
        }
    })

    bar.style.width = count * 33 + '%'

    if(count === circles.length - 1) {
        next.disabled = true
    }else if(count === 0) {
        prev.disabled = true
    }else  {
        next.disabled = false
        prev.disabled = false
    }
}