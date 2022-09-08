import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getWeatherForecastUrl } from '../utils/url'
import getChartData from '../utils/transform/getChartData'
import getForecastItemList from '../utils/transform/getForecastItemList'
import { getCityCode } from '../utils/utils'
const useCityPage = (allChartData, allForecastItemList, onSetChartData, onSetForecastItemList) =>{
    const { city, countryCode } = useParams()

    useEffect(() => {
        const getForecast = async () => {
            const url = getWeatherForecastUrl({city, countryCode})
            const cityCode = getCityCode(city,countryCode)
            try {
                const { data } = await axios.get(url)
                const dataAux = getChartData(data)
                onSetChartData({[cityCode]: dataAux})
                const forecastItemListAux = getForecastItemList(data)
                onSetForecastItemList({ [cityCode]:forecastItemListAux})
            } catch (error) {

            }

        }
        const cityCode = getCityCode(city,countryCode)
        if(allChartData && allForecastItemList && !allChartData[cityCode] && !allForecastItemList[cityCode]){
            getForecast()
        }
        
    }, [city, countryCode, onSetChartData, onSetForecastItemList])
    return {city, countryCode}
}

export default useCityPage