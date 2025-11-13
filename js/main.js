/* ------------------------------------- */
/* ヘッダーとナビゲーションメニュー */
/* ------------------------------------- */

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('js-hamburger');
    const navMenu = document.getElementById('js-nav-menu');
    const content = document.getElementById('js-content');

    // ハンバーガーアイコンがクリックされたときの処理
    hamburger.addEventListener('click', function() {
        // hamburger要素自身にactiveクラスをトグル
        hamburger.classList.toggle('active');
        
        // ナビゲーションメニューにactiveクラスをトグル
        navMenu.classList.toggle('active');

        // メインコンテンツにactiveクラスをトグル（背景効果用）
        content.classList.toggle('active');
        
        // メニュー開閉時にbodyのスクロールを制御
        if (navMenu.classList.contains('active')) {
            // メニューが開いているときはスクロール禁止
            document.body.style.overflow = 'hidden';
        } else {
            // メニューが閉じているときはスクロール許可
            document.body.style.overflow = '';
        }
    });
    
    // メニューが開いている状態で、メニュー以外の部分（content）をクリックしたときの処理
    content.addEventListener('click', function() {
        if (navMenu.classList.contains('active')) {
            // メニューを閉じる
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            content.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});



/* ------------------------------------- */
/* スライダー */
/* ------------------------------------- */
$(function () {
    $(".test-slick").slick({
        autoplay: true, 
        slidesToShow: 3,
    });
});