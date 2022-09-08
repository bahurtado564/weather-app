import { validValues } from "../../components/IconState"
import { toCelsius } from "../utils"
import { getCityCode } from "../utils"


const getAllWeather = (response, city, countryCode) => {
    const { data } = response
    const temperature = toCelsius(data.main.temp)
    const humidity = data.main.humidity
    const wind = data.wind.speed
    const stateFromServer = data.weather[0].main.toLowerCase()
    const state = validValues.includes(stateFromServer) ? stateFromServer : null
    const name = getCityCode(city, countryCode)
    const value = { temperature, state, humidity, wind }
    return ({[name]: value })
}

export default getAllWeather