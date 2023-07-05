import { Marker, Tooltip } from "react-leaflet"
import L from 'leaflet';
import markerIcon from '../utils/marker_icon.png';
import 'leaflet/dist/leaflet.css';

const WorldMap = (countries) => {

  const { countriesData } = countries
  const customMarker = L.icon({
    iconUrl: markerIcon,
    iconSize: [20, 25],
    iconAnchor: [15, 30]
  });


  return (

    <div >


      {countriesData.slice(0, 100)?.map((country) => (
        <Marker
          icon={customMarker}
          key={country.countryInfo._id}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >

<div >

        <Tooltip sticky> <h2>{country.country}</h2><br />Active Cases: {country.active}<br />Recovered Cases: {country.recovered} <br /> Deaths: {country.deaths}</Tooltip>
        </div>
          <div >
            <h2>{country.country}</h2>
            <p>
              Active Cases: {country.active} <br />
              Recovered Cases: {country.recovered} <br />
              Deaths: {country.deaths}
            </p>
          </div>
          




        </Marker>
      ))}
    </div>
  )
}


export default WorldMap