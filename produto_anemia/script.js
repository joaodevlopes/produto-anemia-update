window.revelar = ScrollReveal({reset:true})

// TOPO DO SITE

revelar.reveal('.efeito_img_topo', {
    duration: 2000,
    distance: '-100px'
})

revelar.reveal('.efeito_txt_beneficios', {
    duration: 2000,
    distance: '80px',
    delay: 100,
})

revelar.reveal('.txt_especial, .descrição_especial', {
    duration: 1200,
    distance: '12px',
    delay: 60
})

revelar.reveal('.depoimentos_site, .sobre_efeito', {
    duration: 1200,
    distance: '80px',
    delay: 70,
    origin:'left'
})

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});










