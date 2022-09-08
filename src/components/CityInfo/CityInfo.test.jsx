import React from 'react'
import {render} from '@testing-library/react'
import CityInfo from './CityInfo' //SUB subject under testing
test("CityInfo Render", async ()=> {
    //AAA
    //Arrange
    const city = "Bogotá"
    const country = "Colombia"
    const { findAllByRole } = render(<CityInfo city={city} country={country}></CityInfo>)
    //Act
    const cityComponent = await findAllByRole("heading")
    //Assert
    expect(cityComponent[0]).toHaveTextContent(city)
    expect(cityComponent[1]).toHaveTextContent(country)
})