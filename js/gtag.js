// Global site tag (gtag.js) - Google Analytics

// jQuery
$.getScript('https://www.googletagmanager.com/gtag/js?id=UA-133756821-1', function () {

    // script is now loaded and executed

    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-133756821-1');

});