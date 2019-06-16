import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDz64xTmi1F4sy2dU0DZ45z6fTTDVwEIX8"
  })

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    return <div style={{width:'100%', height:'100%'}}>

    <GoogleMap
      options={{
          zoomControlOptions: {
              position: "google.maps.ControlPosition.RIGHT_CENTER"
            }
        }}
        >
    </GoogleMap>
    </div> 
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <div>Loading</div>
}