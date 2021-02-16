// Weather app 
// pass the place name in the cmd line arg to get the weather data

const Weather = require("./weather");


let weatherObject = new Weather();
weatherObject.getWeatherData()
.then(data =>{
    weatherObject.displayData(data);
})
.catch(error =>{
console.log(error);
});