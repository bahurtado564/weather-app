import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Alert from '@mui/material/Alert'
import useCityList from '../../hooks/useCityList'
import { getCityCode } from '../../utils/utils'

const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, countryCode, country } = cityAndCountry
    return (
        <ListItem
            button
            alignItems='center'
            key={getCityCode(city, countryCode )} 
            onClick={() => eventOnClickCity(city, countryCode)}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item md={8} xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item md={4} xs={12}>
                    <Weather
                        temperature={weather && Number(weather.temperature)}
                        state={weather && weather.state} />
                </Grid>
            </Grid>
        </ListItem>)
}

const CityList = ({ cities, onClickCity, actions, data }) => {
    const {onSetAllWeather} = actions
    const { allWeather } = data
    const { error, setError} = useCityList(cities, allWeather, onSetAllWeather)
    return (
        <div>
            {
                error && <Alert onClose={() => setError(null)} severity='error'>{error}</Alert>
            }
            <List>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry,
                        allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
                }
            </List>
        </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList