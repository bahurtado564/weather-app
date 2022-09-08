import React from 'react'
import { useNavigate } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import CityList from '../components/CityList/CityList'
import AppFrame from '../components/AppFrame'
import { getCities } from '../utils/serviceCities'

const MainPage = ({data, actions}) => {
    const navigate = useNavigate()
    const onClickHandler = (city, countryCode) => {
        console.log("City", city)
        console.log("Country code", countryCode)
        navigate(`/city/${city}/${countryCode}`)
    }
    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList data={data} cities={getCities()} onClickCity={onClickHandler} actions={actions}></CityList>
            </Paper>
        </AppFrame>
    )
}


export default MainPage