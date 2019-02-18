# Homepage

### Custom Start/home page (multi LIVE Search) with live animated weather and news ticker -  written in HTML/JS. Minimal, self-hosted, and dope.
<br>

**DEMO**:  https://seanvree.github.io/homepage/

**Last Updated**: 18 FEB 2019: 
- Added LIVE searching.
-	Added monthly calendar modal (Click on date).
-	Added time convert (12/24hr) function (Click on time).
-	Added help menu (press “?” key while on page).
- Updated bootstrap.


# Features:
- Self hosted, VERY minimal(ish)/lightweight.
- Live searching.
- Mobile ready.
- Fully functional multi-search input form (Google, YouTube, Wiki, IMDB).
- Live custom news ticker provided by: feed.mikle.com ($1/month).
- Background auto change (day/night).
-	Monthly calendar modal (Click on date) (Appears only on desktop browsers - screen height > 730px).
- Live DTG with click-to-convert time (12/24hr).
- Weather data auto generated via Geolocation.
- Weather API provided via OpenWeatherMap.
- Click-to-convert Celsius/Fahrenheit.
- 5-day forecast data (Click on right weather icon).
- Page hit counter (PHP) (bottom right).

- Stand-alone weather app can be found here:  https://github.com/seanvree/Weather
- Check out my other self-hosted apps here:  https://github.com/Monitorr

<br>

 
## Screenshot Desktop:

<img src="https://i.imgur.com/WkiO88x.gif">

## Screenshot Mobile:

<img src="https://i.imgur.com/MAlKhhB.gif">

## Animated Weather Icons :

<img src="https://i.imgur.com/0iamcsT.gif[/img]">

## Notes:

- Add your desired background image files
**`/css/main.css`: LINE 46 & 62**:

```
background: url("background_day.jpg");
```

_NOTE_: Background DAY displays from 0800-2000 local browser time

- Weather auto refresh default setting is set at **30** seconds (2 calls per minute), or 30000(ms). Max is 60 API calls per 1 minute. Change at the following location:

**`/js/weather.js` : LINE 201:**

```
var t = window.setInterval(searchByLocation, 30000);
```

- Change the default temp unit from F to C by changing the following two items:

**`/index.html`: LINE 154:**

```
<div id="unit" class="unit hidden">&degF</div>
```

**`/js/weather.js`: LINE 8:**

```
var unit = 'metric';
```

- Turn ON search auto-complete by changing the value to `< "autocomplete="ON" >` at the following location:

**`/index.html`: LINE 290:**

```
<input type="search" id="flexbox-input" name="s" value="" placeholder=" Search..." autocomplete="off" autofocus />
```


- **WEATHER DATA**: Acquire your FREE API key and replace the default key in **`/js/weather.js` : LINE 12**
 https://home.openweathermap.org/users/sign_up
```
   var weatherApiKey = ' YOUR KEY HERE ';
```

- **TICKER DATA:** You will need to create your own feed.mikle ticker widget where you can customize your RSS news sources and style.  To do so, go to https://feed.mikle.com, create an account, and replicate the settings of the screenshot image `/img/feedmikle.jpg ` located in this repo. You will then have your own custom ticker widget URL which you will then input into index.html as outlined below. 
 
 feed.mikle.com widget ticker link in **`/index.html` : Line 322**:  
 ```
 <script type="text/javascript" src="https://feed.mikle.com/js/fw-loader.js" data-fw-param=" YOUR NUMBER HERE "></script>
 ```

## LIVE Search Usage:

### Key Searching

Make changes to the live search behavior in `/js/tilde.js` .

To view the available sites and their keys, press `?` for the help menu.
(NOTE: the Help menu only appears on desktop browsers). 

You can search any of the sites by typing a colon after the site's key, followed by your search query. 
For example:

- Entering `g:tilde` would search
  [GitHub for tilde](https://github.com/search?q=tilde).
- Entering `s:radiohead` would search
  [SoundCloud for radiohead](https://soundcloud.com/search?q=radiohead).

If your input doesn't match any of the commands, a generic Google search will be triggered.

### Specific Locations

You can go to a specific location on a site by typing a forward slash after the
site's key, followed by the location on the site you'd like to be redirected to.
For example:

- Entering `r/r/startpages` would redirect you to
  [www.reddit.com/r/startpages](https://www.reddit.com/r/startpages)
- Entering `h/popular` would redirect you to
  [hypem.com/popular](http://hypem.com/popular).

### URL Redirects

If you enter in a full domain or URL, you will be redirected to said domain or
URL. For example:

- Entering `stallman.org` would redirect you to
  [stallman.org](https://stallman.org/).
- Entering `https://smile.amazon.com` would redirect you to
  [smile.amazon.com](https://smile.amazon.com/).


<br>

## About Me:

- [seanvree](https://github.com/seanvree) (Windows Wizard)

- I usually hang out here [![Discord](https://img.shields.io/discord/102860784329052160.svg)](https://discord.gg/j2XGCtH)

- Buy me a beer [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/monitorrapp)


## Credits:

- [haltdev](https://github.com/haltdev) | [jonfinley](https://github.com/jonfinley) | [leram84](https://github.com/leram84) | [causefx](https://github.com/causefx) | [cadejscroggins](https://github.com/cadejscroggins) 

#

[![BrowserStack Status](https://i.imgur.com/Pnri9gE.gif)](https://automate.browserstack.com/)


<p>
    <a href="https://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
            alt="Valid CSS!" />
    </a>
</p>



