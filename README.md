# Homepage
Custom Start/home page (multi Search) with live animated weather and news ticker -  written in HTML/JS. Minimal, self-hosted, and dope. 
<br>

**DEMO**:  https://seanvree.github.io/homepage/

**Last Updated**: 12 FEB 2018: 
- Updated bootstrap version
- updated to jquery-3.3.1.min
- Added background auto change (day/night)
- Script reordering
- Date display format change


# Features:
- Self hosted, VERY minimal(ish)/lightweight
- Mobile ready
- Fully functional multi-search input form (Google, YouTube, Wiki, IMDB)
- Live custom news ticker provided by: feed.mikle.com (free)
- Background auto change (day/night)
- Live DTG
- Weather data auto generated via Geolocation.
- Weather API provided via OpenWeatherMap.
- Click-to-convert Celsius/Fahrenheit.
- 5-day forecast data (Click on right weather icon).
- Page hit counter (bottom right)
- Stand-alone weather app can be found here:  https://github.com/seanvree/Weather
- Check out my other self-hosted apps here:  https://github.com/Monitorr

<br>

 
## Screenshot Desktop:

 <img src="https://i.imgur.com/tdlOQRF.png">

## Screenshot Mobile:

<img src="https://i.imgur.com/KKTO7cG.gif">

## Animated Icons :

<img src="https://i.imgur.com/0iamcsT.gif[/img]">

## Notes:

- Add your desired background image files
**/inex.html: LINE 49 & 55**

_NOTE_: Background DAY displays from 0800-2000 local browser time

- Weather auto refresh default setting is set at **30** seconds (2 calls per minute), or 30000(ms). Max is 60 API calls per 1 minute. Change at the following location:

**/js/weather.js : LINE 187:**

```
var t = window.setInterval(searchByLocation, 30000);
```

- Change the default temp unit from F to C by changing the following two items:

**/index.html: LINE 79:**

```
<div id="unit" class="unit">&degC</div>
```

**/js/weather.js: LINE 9:**

```
var unit = 'metric';
```

- Turn OFF search auto-complete by changing the value < "autocomplete="OFF" > at the following location:

**/index.html: LINE 215:**

```
<input type="search" id="flexbox-input" name="s" value="" placeholder="Search..." autocomplete="OFF" autofocus />
```


- **WEATHER DATA**: Acquire your FREE API key and replace the default key in **/js/weather.js : LINE 11**
 https://home.openweathermap.org/users/sign_up
```
   var weatherApi = 'https://api.openweathermap.org/data/2.5/weather?callback=?';
```

- **TICKER DATA:** You will need to create your own FREE feed.mikle ticker widget where you can customize your news sources and style.  To do so, go to https://feed.mikle.com and replicate the settings of the screenshot image "/img/feedmikle.jpg" located in this repo. You will then have your own custom ticker widget URL which you will then input into index.html as outlined below. 
 
 feed.mikle.com widget ticker link in **/index.html : Line 235**:  
 ```
 " <script type="text/javascript" src="https://feed.mikle.com/js/fw-loader.js" data-fw-param=" YOUR NUMBER HERE "></script> "
 ```

<br>

## About Me:

- [seanvree](https://github.com/seanvree) (Windows Wizard)

- I usually hang out here [![Discord](https://img.shields.io/discord/102860784329052160.svg)](https://discord.gg/j2XGCtH)
- Buy me a beer [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/seanvree)


## Credits:

- [haltdev](https://github.com/haltdev) (Resident Cargo Cult Developer)

- [jonfinley](https://github.com/jonfinley)

- [leram84](https://github.com/leram84)

- [causefx](https://github.com/causefx)


<p>
    <a href="https://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
            alt="Valid CSS!" />
    </a>
</p>



