let steps = document.querySelectorAll('.progress');
let bar = document.querySelector('.fillbar');
const rite = document.querySelector('.btn2');
const left = document.querySelector('.btn1');

let count = 0;

// steps.forEach((ele) => {
//     ele.addEventListener('click', function() {
//         ele.classList.add('cirColor')
//     })
// })

rite.addEventListener('click', function () {
  count++;

  console.log('clicking');

  if (count > steps.length - 1) {
    count = steps.length - 1;
  }

  fillCircle();
});

left.addEventListener('click', function () {
  count--;

  if (count < 0) {
    count = 0;
  }
  fillCircle();
});

function fillCircle() {
  ///// circles
  steps.forEach((e, i) => { //==>> agar i >= count ho ga tou pehle sbcircles colored hn gy, aur baad mein aik aik sy color nikly ga.
    if (i <= count) {   //==>> agar i===count ho tou sirf wahan color add ho ga jahan dono same hn gy
      e.classList.add('cirColor');
    } else {
      e.classList.remove('cirColor');
    }
  });

  //////// bar
  bar.style.width = count * 33 + '%';

  /////// buttons

  if (count === 0) {
    left.disabled = true;
  } else if (count === steps.length - 1) {
    rite.disabled = true;
  } else {
    rite.disabled = false;
    left.disabled = false;
  }
}
