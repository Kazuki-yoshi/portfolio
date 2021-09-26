'use strict'

// ハンバーガーメニュー
function hamburger(){
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('nav').classList.toggle('in');
};
document.getElementById('hamburger').addEventListener('touchend',function(){
  hamburger();
});


// worksの写真を2つずつ追加表示
document.querySelector('.btn').addEventListener('click', e => {
  // .hide が指定されている .works-item をさがす
  const hideItems = document.querySelectorAll('.works-item.hide');
  // .hide.item が1つ以上ある場合、1つ目を表示する
  if(hideItems.length > 0) {
    hideItems[0].classList.remove('hide');
  }
  // .hide.item が2つ以上ある場合、2つ目を表示する
  if(hideItems.length > 1) {
    hideItems[1].classList.remove('hide');
  }
  // .hide.item が3つ以上ある場合 (= 2つを表示してもまだ非表示のものがある場合)
  // ボタン非表示を実行せず中断する
  if(hideItems.length > 2) return;
  // ボタンを非表示にする
  e.currentTarget.classList.add('hide');
});

// モーダル jquery
$(function() {
  $('.modal__show').on('click', function() {
//     ボタンをクリックしたら、クリックしたい要素のdata属性を取得
    let modalTarget = $(this).data('modal-link');
//     上記で取得した要素と同じclass名を持つ要素を取得
    let modal = document.querySelector('.' + modalTarget);
//     その要素にclassを付け替える
    $(modal).toggleClass('is-show');
  });
  
//   modalを閉じるときの動作
  $('.modal__close').on('click', function() {
   $(this).parents('.modal').toggleClass('is-show');
});
});
