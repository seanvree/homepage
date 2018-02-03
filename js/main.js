var shiftDown = false;

function setDate($) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'],
        d = new Date(),
        currentDate = days[d.getDay()] + ' | ' + d.getDate() + '&nbsp;' + months[d.getMonth()],
        mins = (d.getMinutes() > 9) ? d.getMinutes() : '0' + d.getMinutes(),
        currentTime = d.getHours() + ':' + mins,
        previousTime = $('.timeArea .time .timeInner').html();
    if (currentTime != previousTime) {
        $('.timeArea .time .timeInner').html(currentTime);
        $('.timeArea .time .date').html(currentDate);
    }
    
    var toggle = true;
    setInterval(function() {
      var d = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' });
      var parts = d.split(":");
      $('#hours').text(parts[0]);
      $('#minutes').text(parts[1]);
      $("#colon").css({ visibility: toggle?"visible":"hidden"});
      toggle=!toggle;
    },1000);
}

function search(query, engine) {
    query = query.replace(/ /g, '+', query);
    switch (engine) {
        case 'google':
        default:
            var url = 'https://google.com/search?q=' + query;
            break;
        case 'youtube':
            var url = 'https://www.youtube.com/results?search_query=' + query;
            break;
        case 'wiki':
            var url = 'https://en.wikipedia.org/w/index.php?search=' + query;
            break;
        case 'imdb':
            var url = 'https://www.imdb.com/find?q=' + query + '&s=tt';
            break;
    }

    if (!shiftDown) {
        window.location.replace(url);
    } else {
        $('<a>').attr('href', url).attr('target', '_blank')[0].click();
    }
}

$(function() {
    setDate($);

    $(window).keydown(function(e) {
        if (e.keyCode == 72) {
            $('.hideable').toggleClass('hide');
        }
        if (e.keyCode == 16) {
            shiftDown = true;
        }
    });

    $(window).keyup(function(e) {
        if (e.keyCode == 16) {
            shiftDown = false;
        }
    });

    $('.flexbox input, .flexbox select').keydown(function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            var query = $('.flexbox input').val();
            var engine = $('.flexbox select option:selected').val();
            search(query, engine);
        }
    });
});
