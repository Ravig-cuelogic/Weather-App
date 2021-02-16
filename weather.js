class Weather{
    weatherData;
    placeName;
    constructor(placeName){
        this.placeName = placeName;
    }

    getWeatherData(){
        const request = require('request');
        const url = `http://api.weatherstack.com/current?access_key=f244b477cddf10f5d7c56d04f4246d08&query=${this.placeName}`

        setTimeout(()=>{
            request({ url : url } , (error,response)=>{
            let data = JSON.parse( response.body);
            this.weatherData = data;
            });
        },100);
    }

    displayData(){
        setTimeout(() => {
            if(this.weatherData.success == undefined)
            {
                console.log(`Country - ${this.weatherData.location.country}`);
                console.log(`Location - ${this.weatherData.location.name}`);
                console.log(`Temperature - ${this.weatherData.current.temperature}`);
                console.log(`Humidity - ${this.weatherData.current.humidity}`);
                console.log(`Weather Description - ${this.weatherData.current.weather_descriptions}`);
                console.log(`Windspeed - ${this.weatherData.current.wind_speed}`);
                console.log(`Wind Direction - ${this.weatherData.current.wind_dir}`);
            }
            else
            {
                console.log("Please pass a valid name while creating this.weatherDataect");
            }
        }, 2000);
    }

}
module.exports = Weather;