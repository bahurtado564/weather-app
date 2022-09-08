import moment from 'moment'
import { toCelsius } from '../utils'

const getChartData = (data) => {
    console.log("data", data)
    const daysAhead = [0, 1, 2, 3, 4, 5]
    const days = daysAhead.map(day => moment().add(day, 'd'))
    const dataAux = days.map(day => {
        const tempArray = data.list.filter(item => {
            const dayOfYear = moment.unix(item.dt).dayOfYear()
            return dayOfYear === day.dayOfYear()
        })
        console.log("day of year", day.dayOfYear())
        console.log("TempArray", tempArray)
        const temps = tempArray.map(item => toCelsius(item.main.temp))
        return ({
            dayHour: day.format('ddd DD'),
            min: Math.min(...temps),
            max: Math.max(...temps),
            hasTemps: temps.length > 0 ? true : false
        })
    }).filter(item => item.hasTemps)
    return dataAux
}

export default getChartData