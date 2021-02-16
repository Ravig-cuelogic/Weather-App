// Weather app 
// create obj of Weather class and pass the name of city to which the temp is to be found 

const Weather = require("./weather");

let pune = new Weather("Pune");
pune.getWeatherData();
pune.displayData();

