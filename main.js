// Weather app 
// pass the place name in the cmd line arg to get the weather data

const Weather = require("./weather");


let pune = new Weather();
pune.getWeatherData()
.then(data =>{
    pune.displayData(data);
})
.catch(error =>{
console.log(error);
});

