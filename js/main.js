(function () {
    const header = document.querySelector('.header');
    window.anscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());


(function () {
    const burgerItem = document.querySelector('.header_burger');
    console.log(burgerItem);
}());


