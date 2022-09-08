import React from 'react'
import Forecast from './Forecast'
import {render} from '@testing-library/react'
import { findAllByTestId } from '@storybook/testing-library'

const forecastItemList = [
    { hour: 18, state: "clear", temperature: 17, weekDay: "Jueves" },
    { hour: 6, state: "clouds", temperature: 18, weekDay: "Viernes" },
    { hour: 12, state: "drizzle", temperature: 18, weekDay: "Viernes" },
    { hour: 18, state: "clouds", temperature: 19, weekDay: "Viernes" },
    { hour: 14, state: "rain", temperature: 17, weekDay: "Sábado" },
    { hour: 11, state: "rain", temperature: 17, weekDay: "Sábado" }
]

test('Forecast Render', async () => { 
    const {findAllByTestId} = render(<Forecast forecastItemList={forecastItemList}></Forecast>)
    const forecastItems = await findAllByTestId("forecast-item-container")
    expect(forecastItems).toHaveLength(6)
 })