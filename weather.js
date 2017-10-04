var reallySimpleWeather = {
    getAltTemp: function (a, b) {
        return "f" === a ? Math.round(5 / 9 * (b - 32)) : Math.round(1.8 * b + 32)
    },
    weather: function (a) {
        a = a;
        var b = new Date;
        if ("" !== a.wunderkey) {
            var c = "https://api.wunderground.com/api/" + a.wunderkey + "/almanac/astronomy/conditions/forecast/q/" + a.location + ".json";
            console.log(encodeURI(c))
        } else if ("" !== a.location) {
            var c = "https://query.yahooapis.com/v1/public/yql?format=json&rnd=" + b.getFullYear() + b.getMonth() + b.getDay() + b.getHours() + "&diagnostics=true&q=",
                d = "";
            d = /^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/.test(a.location) ? "(" + a.location + ")" : a.location, c += "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + d + "') and u='" + a.unit + "'"
        } else {
            if ("" === a.woeid) return a.error("Could not retrieve weather due to an invalid location."), !1;
            c += "select * from weather.forecast where woeid=" + a.woeid + " and u='" + a.unit + "'"
        }
        var e = new XMLHttpRequest;
        return e.open("GET", encodeURI(c)), e.send(null), e.onreadystatechange = function () {
            var b = 4,
                c = 200;
            if (e.readyState === b) {
                if (e.status === c) var d = JSON.parse(e.responseText);
                if (d.response) {
                    var h, f = d,
                        g = {},
                        i = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
                    g.title = "Conditions for " + f.current_observation.display_location.full + " at " + f.current_observation.observation_time, g.temp = f.current_observation.temp_f, g.temp_f = f.current_observation.temp_f, g.temp_c = f.current_observation.temp_c, g.feelslike_f = f.current_observation.feelslike_f, g.feelslike_c = f.current_observation.feelslike_c, g.visibility_mi = f.current_observation.visibility_mi, g.visibility_km = f.current_observation.visibility_km, g.temp_string = f.current_observation.temperature_string, g.currently = f.current_observation.weather, g.high = f.almanac.temp_high.normal.F, g.high_c = f.almanac.temp_high.normal.C, g.low = f.almanac.temp_low.normal.F, g.low_c = f.almanac.temp_low.normal.C, g.text = g.currently, g.humidity = f.current_observation.relative_humidity, g.pressure = f.current_observation.pressure_mb, g.sunrise = f.sun_phase.sunrise.hour + ":" + f.sun_phase.sunrise.minute, g.sunset = f.sun_phase.sunset.hour + ":" + f.sun_phase.sunset.minute, g.city = f.current_observation.display_location.city, g.state = f.current_observation.display_location.state, g.state_name = f.current_observation.display_location.state_name, g.country = f.current_observation.display_location.country, g.full = f.current_observation.display_location.full, g.zip = f.current_observation.display_location.zip, g.latitude = f.current_observation.display_location.latitude, g.longitude = f.current_observation.display_location.longitude, g.elevation = f.current_observation.display_location.elevation, g.updated = f.current_observation.observation_time, g.link = f.current_observation.forecast_url, g.wind = {
                        chill: f.current_observation.windchill_f,
                        direction: i[Math.round(f.current_observation.wind_degrees / 22.5)],
                        speed: f.current_observation.wind_mph
                    }, g.forecast = [];
                    for (var j = 0; j < f.forecast.simpleforecast.forecastday.length; j++) h = f.forecast.simpleforecast.forecastday[j], g.forecast.push(h);
                    a.success(g)
                } else {
                    var h, f = d.query.results.channel,
                        g = {},
                        i = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"],
                        k = "https://s.yimg.com/os/mit/media/m/weather/images/icons/l/44d-100567.png";
                    g.title = f.item.title, g.temp = f.item.condition.temp, g.code = f.item.condition.code, g.todayCode = f.item.forecast[0].code, g.currently = f.item.condition.text, g.high = f.item.forecast[0].high, g.low = f.item.forecast[0].low, g.text = f.item.forecast[0].text, g.humidity = f.atmosphere.humidity, g.pressure = f.atmosphere.pressure, g.rising = f.atmosphere.rising, g.visibility = f.atmosphere.visibility, g.sunrise = f.astronomy.sunrise, g.sunset = f.astronomy.sunset, g.description = f.item.description, g.city = f.location.city, g.country = f.location.country, g.region = f.location.region, g.updated = f.item.pubDate, g.link = f.item.link, g.units = {
                        temp: f.units.temperature,
                        distance: f.units.distance,
                        pressure: f.units.pressure,
                        speed: f.units.speed
                    }, g.wind = {
                        chill: f.wind.chill,
                        direction: i[Math.round(f.wind.direction / 22.5)],
                        speed: f.wind.speed
                    }, f.item.condition.temp < 80 && f.atmosphere.humidity < 40 ? g.heatindex = -42.379 + 2.04901523 * f.item.condition.temp + 10.14333127 * f.atmosphere.humidity - .22475541 * f.item.condition.temp * f.atmosphere.humidity - 6.83783 * Math.pow(10, -3) * Math.pow(f.item.condition.temp, 2) - 5.481717 * Math.pow(10, -2) * Math.pow(f.atmosphere.humidity, 2) + 1.22874 * Math.pow(10, -3) * Math.pow(f.item.condition.temp, 2) * f.atmosphere.humidity + 8.5282 * Math.pow(10, -4) * f.item.condition.temp * Math.pow(f.atmosphere.humidity, 2) - 1.99 * Math.pow(10, -6) * Math.pow(f.item.condition.temp, 2) * Math.pow(f.atmosphere.humidity, 2) : g.heatindex = f.item.condition.temp, "3200" == f.item.condition.code ? (g.thumbnail = k, g.image = k) : (g.thumbnail = "https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/" + f.item.condition.code + "ds.png", g.image = "https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/" + f.item.condition.code + "d.png"), g.alt = {
                        temp: reallySimpleWeather.getAltTemp(a.unit, f.item.condition.temp),
                        high: reallySimpleWeather.getAltTemp(a.unit, f.item.forecast[0].high),
                        low: reallySimpleWeather.getAltTemp(a.unit, f.item.forecast[0].low)
                    }, "f" === a.unit ? g.alt.unit = "c" : g.alt.unit = "f", g.forecast = [];
                    for (var j = 0; j < f.item.forecast.length; j++) h = f.item.forecast[j], h.alt = {
                        high: reallySimpleWeather.getAltTemp(a.unit, f.item.forecast[j].high),
                        low: reallySimpleWeather.getAltTemp(a.unit, f.item.forecast[j].low)
                    }, "3200" == f.item.forecast[j].code ? (h.thumbnail = k, h.image = k) : (h.thumbnail = "https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/" + f.item.forecast[j].code + "ds.png", h.image = "https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/" + f.item.forecast[j].code + "d.png"), g.forecast.push(h);
                    a.success(g)
                }
            } else a.error("There is a problem receiving the latest weather. Try again.")
        }, this
    }
};