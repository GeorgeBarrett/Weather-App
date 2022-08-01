let weather = {
    'apiKey': '4765ce016ede543b32e8065db17f83f8',

    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=4765ce016ede543b32e8065db17f83f8")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        console.log(data)
        const { name } = data;
        const { id } = data.weather[0];
        const { description } = data.weather[0];
        const { icon } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,id,description,temp,humidity,speed)
        document.querySelector('.city').innerText = 'Weather in ' + name;
        //check this line of code to ensure the icons are working
        let iconImage = document.querySelector('.icon')
        iconurl = 
            "http://openweathermap.org/img/wn/" + icon + ".png";
            console.log(iconImage)
            iconImage.src = iconurl
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + "°C";
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + " %";
        document.querySelector('.wind').innerText = "Wind speed: " + speed + " kp/h";
    },
    // this is a search function that takes the value that I input and then matches it to the city within the database and fetches the weather info
    search: function () {
        this.fetchWeather(document.querySelector('.search-bar').value);
    },

}

// this adds a click function to the search button which produces the data from the API
document.getElementById('search-button').addEventListener('click', function () {
    weather.search(); 
}); 
