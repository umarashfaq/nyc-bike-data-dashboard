// src
import styles from './MapView.less'
import Marker from './Marker.js'

// libs
import React from 'react'
import Paper from 'material-ui/Paper'
import GoogleMap from 'google-map-react'
import {connect} from 'react-redux'

const API_KEY = 'AIzaSyCqQSq71cdMoVyro-EQJASpXFmIZBFpz3M'

export default class MapView extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {stations, center, zoom} = this.props
    
    return (
      <Paper>
        <div style={{background: 'red', height: 500}}>
          <GoogleMap
            apiKey={API_KEY} // set if you need stats etc ...
            center={center}
            zoom={zoom}
            >
            {stations.map(({station_id, lat, lon}) => <Marker key={station_id} lat={lat} lng={lon} id={station_id}/>)}
          </GoogleMap>
        </div>
      </Paper>
    )
  }
}

MapView.defaultProps = {
  center: [40.76727216,-73.99392888],
  zoom: 11,
  greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
}

const mapStateToProps = state => {
  const {entities: {stations}} = state
  return {
    stations: Object.values(stations)
  }
}

export default connect(mapStateToProps)(MapView)
