let weather = {
    "apiKey": "0c8504dd787c4e8fae9121147222810",
    fetchWeather: function(city) {
        fetch(
            "http://api.weatherapi.com/v1/current.json?key="+ this.apiKey+ "&q="+ city +"&aqi=no"
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
        
    },
    displayWeather: function(data) {
        const {name} = data["location"]
        const {text, icon } = data["current"]["condition"]
        const {temp_c, wind_kph, humidity} = data["current"]
        console.log(name, text, wind_kph, humidity, icon, temp_c)
        document.querySelector(".city").innerText = "Weather in "+name;
        document.querySelector(".icon").src = icon;
        document.querySelector(".description").innerText = text;
        document.querySelector(".temp").innerText = temp_c+"°C";
        document.querySelector(".humidity").innerText = "Humidity: "+humidity+"%";
        document.querySelector(".weather").classList.remove("loading")
        document.querySelector(".wind").innerText = "Wind Speed: "+wind_kph+" Kmph";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
        // } else {
        //     console.log('didnotmathc');
        //     document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
        // }
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search-button").addEventListener("click", function() {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        weather.search();
    }
})

