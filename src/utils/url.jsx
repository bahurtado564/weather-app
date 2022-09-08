const appId = "578054b5b4dbb6f01f64662a56b12590"
export const getWeatherUrl = ({city, countryCode}) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appId}`
export const getWeatherForecastUrl = ({city, countryCode}) => `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appId}`

