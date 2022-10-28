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
        const {text , wind_kph, humidity, icon} = data["condition"]
        const {temp_c} = data["current"]

        console.log(name, text, wind_kph, humidity, icon, temp_c)

    }
}