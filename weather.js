class Weather{
    weatherData;
    placeName;
    constructor(){
        
        this.placeName = process.argv[2];
    }

    getWeatherData(){
        let tempData;
        const url = `http://api.weatherstack.com/current?access_key=f244b477cddf10f5d7c56d04f4246d08&query=${this.placeName}`
        
        return new Promise((resolve,reject)=>{
            const request = require('request');

            request({ url : url } , (error,response)=>{
                (async () => {
                    tempData = await JSON.parse( response.body);
                    if(tempData.success == undefined){
                        resolve(tempData);
                    }
                    else if(tempData.success == false){
                        reject("Data not received, please enter a valid place name in argument");
                    }
                  })();
                });           
        });
    }

    displayData(weatherData){
        console.log(`Country - ${weatherData.location.country}`);
        console.log(`Location - ${weatherData.location.name}`);
        console.log(`Temperature - ${weatherData.current.temperature}°C`);
        console.log(`Humidity - ${weatherData.current.humidity}%`);
        console.log(`Weather Description - ${weatherData.current.weather_descriptions}`);
        console.log(`Windspeed - ${weatherData.current.wind_speed}km/h`);
        console.log(`Wind Direction - ${weatherData.current.wind_dir}`);
    }

}
module.exports = Weather;