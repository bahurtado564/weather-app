import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Link from '@mui/material/Link'
import { Link as LinkRouter } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import Typography from '@mui/material/Typography'
const AppFrame = ({ children }) => {
    return (
        <Grid container justifyContent={"center"}>
            <AppBar position='static'>
                <Toolbar variant="dense">
                    <IconButton color="inherit" aria-label="menu">
                        <Link
                            component={LinkRouter}
                            to="/main"
                            color="inherit"
                            aria-label="menu">
                            <IconContext.Provider value={{ size: '2em' }}>
                                <WiDaySunny />
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography variant="h6">
                        Weather App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container item justifyContent="center"
                xs={12}>
                {children}
            </Grid>
        </Grid>
    )
}

AppFrame.propTypes = {
    children: PropTypes.node
}

export default AppFrame