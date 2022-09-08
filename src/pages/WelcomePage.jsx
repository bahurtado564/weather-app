import React from 'react'
import WelcomeScreen from '../components/WelcomeScreen'
import Grid from '@mui/material/Grid'
import { IconContext} from 'react-icons'
import { WiDaySunny} from 'react-icons/wi'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import {Link as RouterLink} from 'react-router-dom'
const WelcomePage = props => {
    return (
        <WelcomeScreen>
            <Grid container direction="column" justifyContent="center" className="full">
                <div className="highlight">
                    <Grid item container xs={12} justifyContent="center" alignItems="center">
                        <Grid item >
                            <IconContext.Provider value={{size:"6em"}}>
                                <WiDaySunny></WiDaySunny>
                            </IconContext.Provider>
                        </Grid>
                        <Grid item container direction="column" justifyContent="center" alignItems="center">
                            <Typography variant="h4">
                                Weather App
                            </Typography>
                            <Link color="inherit" aria-label='menu' component={RouterLink} to="/main">Ingresar</Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </WelcomeScreen>
    )
}


export default WelcomePage