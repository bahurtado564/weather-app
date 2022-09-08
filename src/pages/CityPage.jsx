import React, {useMemo} from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'
import Weather from '../components/Weather'
import CityInfo from '../components/CityInfo'
import WeatherDetails from '../components/WeatherDetails'
import ForecastChart from '../components/ForecastChart'
import Forecast from '../components/Forecast'
import AppFrame from '../components/AppFrame'
import useCityPage from '../hooks/useCityPage'
import useCityList from '../hooks/useCityList'
import { getCityCode } from '../utils/utils'
import { getCountryNameByCountryCode } from '../utils/serviceCities'
import 'moment/locale/es'   

const CityPage = ({data, actions}) => {
    const {allWeather, allChartData, allForecastItemList} = data
    const {onSetAllWeather, onSetChartData, onSetForecastItemList} = actions
    const {city, countryCode} = useCityPage(allChartData, allForecastItemList, onSetChartData, onSetForecastItemList)
    
    const cities = useMemo(()=>{return [{city, countryCode}]}, [city, countryCode])
    
    useCityList(cities, allWeather, onSetAllWeather)

    const cityCode = getCityCode(city,countryCode)

    const weather = allWeather[getCityCode(city,countryCode)]

    const chartData = allChartData[cityCode]
    const forecastItemList = allForecastItemList[cityCode]

    const country = getCountryNameByCountryCode(countryCode)
    const state = weather && weather.state
    const temperature = weather && weather.temperature
    const humidity=  weather && weather.humidity
    const wind =  weather && weather.wind
    return (
        <AppFrame>
            <Grid container
                justifyContent={"space-around"}
                direction="column"
                spacing="2">
                <Grid item container justifyContent="center" alignItems="flex-end">
                    <CityInfo city={city} country={country}></CityInfo>
                </Grid>
                <Grid container item
                    justifyContent="center">
                    <Weather state={state} temperature={temperature} />
                    {
                        humidity && wind &&
                        <WeatherDetails humidity={humidity}
                        wind={wind} />}
                </Grid>
                <Grid item justifyContent="center" direction="column" alignItems="center">
                    {
                        !chartData && !forecastItemList && <Stack alignItems="center"><CircularProgress/></Stack>
                    }                    
                </Grid>
                <Grid item>
                    {
                        chartData && <ForecastChart data={chartData} />
                    }    
                </Grid>
                <Grid item>
                    {
                        forecastItemList && <Forecast forecastItemList={forecastItemList} />
                    }
                </Grid>
            </Grid>

        </AppFrame>
    )
}


export default CityPage