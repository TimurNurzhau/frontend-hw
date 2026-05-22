
// мобильное меню
const mobileBtn = document.querySelector('.mobile-toggle');
const mainNav = document.querySelector('.main-nav');
const mainBtn = document.querySelector('.btn-primary');

if (mobileBtn && mainNav && mainBtn) {
    mobileBtn.addEventListener('click', function() {
        mainNav.classList.toggle('show');
        mainBtn.classList.toggle('show');
        mobileBtn.classList.toggle('active');
    });
}

// Обработчик для всех кнопок "Подобрать психолога"
document.querySelectorAll('.btn-primary, .promo-block__btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        alert('Форма записи к психологу откроется в следующей версии сайта. Спасибо за интерес!');
    });
});
