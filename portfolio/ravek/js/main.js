'use strict'

// ハンバーガーメニュー
function hamburger(){
    document.getElementById('menu').classList.toggle('hide');
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('in');
  };
  document.getElementById('hamburger').addEventListener('touchend',function(){
    hamburger();
  });

// アコーディオンメニュー

const title = document.querySelectorAll('.query');

function toggle(){
    const content = this.nextElementSibling;
    this.classList.toggle('is-active');
    content.classList.toggle('is-open');
};

for(let i = 0; i < title.length; i++){
    title[i].addEventListener('click',toggle)
};

