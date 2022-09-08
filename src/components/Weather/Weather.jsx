import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import { IconContext } from 'react-icons'
import IconState, { validValues } from '../IconState'
import Grid from '@mui/material/Grid'
const Weather = ({ temperature, state }) => {
    return (
        <Grid container item
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}>
            <IconContext.Provider value={{ size: '4em' }}>
                {
                    state ?
                        <IconState state={state}></IconState>
                        :
                        <Skeleton variant="circular" height={60} width={60} />
                }
            </IconContext.Provider>
            {
                temperature ?
                    <Typography display="inline" variant="h4">{temperature}°</Typography>
                    :
                    <Skeleton variant="rectangular" height={60} width={60} />
            }
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.oneOf(validValues)
}

export default Weather