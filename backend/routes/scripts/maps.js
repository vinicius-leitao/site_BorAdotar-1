const axios = require("axios")

async function getLocation(address){
    let location = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAiBVoo3KdmvZDN3FfPXcswgErNyQGBdvw`)
    let loc = location.data.results[0]
    return JSON.stringify([loc.geometry.location, loc.formatted_address])
}

module.exports = getLocation

