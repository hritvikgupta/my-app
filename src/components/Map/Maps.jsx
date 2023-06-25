import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

// Custom Hook
function useMediaQuery(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = () => setMatches(mediaQuery.matches);

    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, [query]);

  return matches;
}

const Maps = ({setCoordinates, setBounds, coordinates}) => {
  const isMobile = useMediaQuery(`(min-width:600px)`)
  
  return (
    <div className="container" style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{key:'AIzaSyD3rhrnqBd8OyGqGoWaTBgauoNGFTq-ECE'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        >
      </GoogleMapReact>
    </div>
  )
}

export default Maps;
