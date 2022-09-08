import React from "react";
import CityList from "./CityList";
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const cities = [
    { city: "Bogotá", country: "Colombia", countryCode: "CO" },
    { city: "Madrid", country: "España", countryCode:"ES" },
    { city: "Caracas", country: "Venezuela" , countryCode:"VE"},
    { city: "Buenos Aires", country: "Argentina" , countryCode: "AR"}
]


test("CityList Render", async () =>{
    const funcionClickOnItem = jest.fn()
    const funcSet = jest.fn()
    const {findAllByRole} = render(<CityList cities={cities} onSetAllWeather={funcSet} allWeather={[]} onClickCity={funcionClickOnItem}></CityList>)

    const items = await findAllByRole("button")

    expect(items).toHaveLength(4)
})

test("CityList click on item", async()=>{
    const funcionClickOnItem = jest.fn()
    const funcSet = jest.fn()
    const {findAllByRole} = render(<CityList cities={cities} onSetAllWeather={funcSet} allWeather={[]} onClickCity={funcionClickOnItem}></CityList>)
    const items = await findAllByRole("button")

    fireEvent.click(items[0])

    expect(funcionClickOnItem).toHaveBeenCalledTimes(1)
})