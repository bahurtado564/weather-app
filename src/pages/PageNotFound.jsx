import React from 'react'
import Grid from '@mui/material/Grid'
import { IconContext } from 'react-icons'
import { WiRain } from 'react-icons/wi'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
export const PageNotFound = () => {
    return (
        <Grid container direction="column" justifyContent="center" className="full">
            <div className="highlight">
                <Grid item container xs={12} justifyContent="center" alignItems="center">
                    <Grid item >
                        <IconContext.Provider value={{ size: "6em" }}>
                            <WiRain></WiRain>
                        </IconContext.Provider>
                    </Grid>
                    <Grid item container direction="column" justifyContent="center" alignItems="center">
                        <Typography variant="h4">
                            404 | La página no existe
                        </Typography>
                        <Link color="inherit" aria-label='menu' component={RouterLink} to="/main">Volver al inicio</Link>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}

export default PageNotFound

//https://api.openweathermap.org/data/2.5/weather?q=Bogotá&appid=c7135edc72465d8b919602a9f9cac21e
