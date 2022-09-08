const cities = [
    { city: "Bogotá", country: "Colombia", countryCode: "CO" },
    { city: "Madrid", country: "España", countryCode:"ES" },
    { city: "Caracas", country: "Venezuela" , countryCode:"VE"},
    { city: "Buenos Aires", country: "Argentina" , countryCode: "AR"}
]

export const getCities = () =>(cities)

export const getCountryNameByCountryCode = (countryCode) => cities.filter( city => city.countryCode ===countryCode)[0].country