import React, {useState, useCallback, useMemo} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import PageNotFound from './pages/PageNotFound'
import WelcomePage from './pages/WelcomePage'
const App = props => {
    const [allWeather, setAllWeather] = useState({})
    const [allChartData, setAllChartData] = useState({})
    const [allForecastItemList, setAllForecastItemList] = useState({})

    const onSetAllWeather = useCallback( ((weatherCity) => {
        setAllWeather(allWeather => ({...allWeather, ...weatherCity}) )
    }), [setAllWeather])

    const onSetChartData = useCallback((chartDataCity) =>{
        setAllChartData(allChartData =>({ ...allChartData, ...chartDataCity}))
    }, [setAllChartData])

    const onSetForecastItemList = useCallback((forecastItemListCity) =>{
        setAllForecastItemList(allForecastItemList => ({...allForecastItemList, ...forecastItemListCity}))
    }, [setAllForecastItemList])

    const actions = useMemo(() =>(
        {
            onSetAllWeather, 
            onSetChartData, 
            onSetForecastItemList
        }
    ), [onSetAllWeather, onSetChartData, onSetForecastItemList])

    const data = useMemo(() =>(
        {
            allWeather,
            allChartData,
            allForecastItemList
        }
    ), [allWeather, allChartData, allForecastItemList])

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<WelcomePage></WelcomePage>}>
                </Route>
                <Route exact path="/main" element={<MainPage data={data} actions= {actions}></MainPage>}>
                </Route>
                <Route exact path="/city/:city/:countryCode" element={<CityPage data={data} actions= {actions}></CityPage>}>
                </Route>
                <Route exact path="*" element={<PageNotFound></PageNotFound>}>
                </Route>
            </Routes>
        </Router>
    )
}

export default App
