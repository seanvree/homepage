// Google Analytics: change UA-XXXXX-Y to be your site's ID

window.ga = function () {
    ga.q.push(arguments);
};
ga.q = [];
//ga.l = +new Date;
ga.l = +new Date();
ga('create', 'UA-133756821-1', 'auto');
ga('set', 'transport', 'beacon');
ga('send', 'pageview');

$.getScript('https://www.google-analytics.com/analytics.js');