import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 48.57448,
  lng: 13.44792
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map: React.SetStateAction<any>) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback() {
    setMap(null)
  }, [])

  const [infoWindowOpen, setInfoWindowOpen] = useState(true);
    
  const showInfoWindow = () => {
      setInfoWindowOpen(true);
    };

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={center} onClick={showInfoWindow}>
            {infoWindowOpen && (<InfoWindow onCloseClick={() => setInfoWindowOpen(false)} >
                <div style={{textAlign:'left'}}>
                    <b>
                        Name <br/> 
                        Straße. Nr., PLZ Ort <br />
                        000000000000
                    </b>
                </div>
            </InfoWindow> )}
        </Marker>
      
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)