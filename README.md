# Homepage
Custom Start/home page (multi Search) with live animated weather webapp and new ticker -  written in HTML/JS. Minimal, self-hosted, and dope. 
<br>

# Features:
- Mobile ready
- Self hosted, VERY minimal/lightweight
- Live DTG
- Fully functional multi-search input form (Google, YouTube, Wiki, IMDB)
- Live custom news ticker provided by: feed.mikle.com (free)
- Weather data auto generated via Geolocation.
- Weather API provided via OpenWeatherMap.
- Click-to-convert Celsius/Fahrenheit.
- 5-day forecast data (Click on right icon).

<br>

 
## Screenshot Desktop:

 <img src="https://i.imgur.com/I4MiBPO.png">

## Screenshot Mobile:

<img src="https://i.imgur.com/67bFzjd.jpg">

## Animated Icons :

<img src="https://i.imgur.com/Nf8H56C.png[/img]">


## Notes:

- Auto refresh default setting is set at **180** seconds. Change in **/index.html : LINE 34**


- Add your desired background image file to /css/background.png.


- Change the default temp unit from F to C by changing the following two items:

**/index.html: LINE 50:**

```
<div id="unit" class="unit">&degC</div>
```

**/js/weather.js: LINE 9:**

```
var unit = 'metric';
```


- **WEATHER DATA**: Acquire your FREE API key and replace the default key in **/js/weather.js : LINE 11**
 https://home.openweathermap.org/users/sign_up
 
 
 
 - **TICKER DATA:** You will need to create your own FREE feed.mikle ticker widget where you can customize your news sources and style.  To do so, go to https://feed.mikle.com and replicate the settings of the screenshot image "/img/feedmikle.jpg" located in this repo. You will then have your own custom ticker widget URL which you will then input into index.html as outlined below. 
 
 feed.mikle.com widget ticker link in **/index.html : Line 198**:  
 ```
 " <script type="text/javascript" src="https://feed.mikle.com/js/fw-loader.js" data-fw-param=" YOUR NUMBER HERE "></script> "
 ```
 


<br>

## About Me:

- [seanvree](https://github.com/seanvree) (Windows Wizard)

- I usually hang out here [![Discord](https://img.shields.io/discord/102860784329052160.svg)](https://discord.gg/j2XGCtH)
- Buy me a beer [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/seanvree)


## Credits:

- [seanvree](https://github.com/seanvree) (Windows Wizard)

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



