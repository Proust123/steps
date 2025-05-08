const steps = document.querySelectorAll('.progress')
const bar = document.querySelector('.fillBar')
const pre = document.querySelector('.btn1')
const next = document.querySelector('.btn2')

let count = 0

pre.addEventListener("click", function() {

    count--
    if(count < 0) {
        count = 0
    }

    fillColor()

})
next.addEventListener("click", function() {

    count++
    if(count > steps.length - 1) {
        count = steps.length
    }

    fillColor()

})

function fillColor() {

    steps.forEach((ele, i) => {
        if(i <= count) {
            console.log(i, count, 'count');
            ele.classList.add('color')
        }else{
            ele.classList.remove('color')
        }
    })

    bar.style.width = count * 25 + '%'

    if (count === 0) {
        pre.disabled = true
    }else if(count === steps.length - 1){
        next.disabled = true
    }else{
        pre.disabled = false
        next.disabled = false
    }

}