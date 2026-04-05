'use strict';

{
// $(".openbtn").click(function(){
//     $(this).toggleClass('active');
// });


// $(".openbtn").click(function(){
//     $(this).toggleClass('active');   // ボタン
//     $(".drawer").toggleClass('active'); // ← 追加
// });

$(".openbtn").click(function(){
    $(this).toggleClass('active');      // ボタンのアクティブ切り替え
    $(".drawer").toggleClass('active'); // ドロワーの表示切り替え
});

// ドロワー内のリンクがクリックされたら閉じる
$(".drawer a").click(function(){
    $(".drawer").removeClass('active'); // ドロワーを閉じる
    $(".openbtn").removeClass('active'); // ボタンも元に戻す
});





// $('.main2').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });


// $(function() {
//   $('.main2').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//     dots: true
//   });
// });

$(function() {
  $('.main2').slick({
    fade: true,              // ← フェード切り替え
    speed: 2500,             // 切り替え時間（ゆっくり）
    autoplay: true,
    autoplaySpeed: 6000,     // 表示時間
    arrows: false,
    dots: false,
    pauseOnHover: false
  });
});



document.addEventListener("DOMContentLoaded", function () {

  const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

      if (entry.isIntersecting) {
        entry.target.classList.add("is-show");
      }

    });

  });

  const elements = document.querySelectorAll(
    ".fade-up, .fade-left, .fade-right"
  );

  elements.forEach(function(el) {
    observer.observe(el);
  });

});

window.addEventListener("load", function(){

  const loading = document.getElementById("loading");

  setTimeout(function(){
    loading.classList.add("fade-out");
  }, 500);

});












const goodsImg = document.querySelectorAll('.goods-img');
const modal = document.querySelector('.modal');
const modalItem = document.querySelectorAll('.modal__item');
const closeBtn = document.querySelector('.close');
const modalBg = document.querySelector('.modal-bg');

goodsImg.forEach((img,index)=>{

  img.addEventListener('click',()=>{

    modal.classList.add('open');
    closeBtn.classList.add('open');
    modalItem[index].classList.add('open');

  });

});

function closeModal(){

  modal.classList.remove('open');
  closeBtn.classList.remove('open');

  modalItem.forEach(item=>{
    item.classList.remove('open');
  });

}

closeBtn.addEventListener('click',(e)=>{
  e.stopPropagation();
  closeModal();
});

modalBg.addEventListener('click',(e)=>{
  e.stopPropagation();
  closeModal();
});

// modal.addEventListener('click',(e)=>{
//   if(e.target.classList.contains('modal')){
//     closeModal();
//   }
// });


    


}

