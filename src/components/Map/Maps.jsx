import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar, faPhoneAlt, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

import mapStyles from './MapsStyles.js'
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
function PlaceCard({ isMobile, place, lat, lng,onClick }) {
  return !isMobile ? (
    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-dark mt-0" />
  ) : (
    <div className="card p-2" style={{ width: "8rem" }} onClick={onClick}>
      <div className="card-body">
        <p className="card-text text-muted">{place.name}</p>
      </div>
      <img src={place.photo ? place.photo.images.large.url: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={place.name} className="card-img-top" />
      <div className='mt-1'>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <label key={i}>
              <FontAwesomeIcon 
                icon={faStar} 
                className={ratingValue <= Number(place.rating) ? "text-warning" : "text-secondary"} 
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}

const Maps = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) => {
  const isMobile = useMediaQuery(`(min-width:600px)`)
  return (
    <div className="container p-2" style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{key:'AIzaSyD3rhrnqBd8OyGqGoWaTBgauoNGFTq-ECE'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        options={{disableDefaultUI:true, zoomControl:true,styles:mapStyles}}
        margin={[50, 50, 50, 50]}
        onChange={(e)=>{
          setCoordinates({lat:e.center.lat, lng:e.center.lng});
          setBounds({ne:e.bounds.ne, sw:e.bounds.sw})
        }}
        onChildClick={(key, childProps) => {
          // console.log(`Child clicked: key=${key}, lat=${childProps.lat}, lng=${childProps.lng}`);
          setChildClicked(key);
        }}
        
      >
        {places?.map((place, i) => (
          <PlaceCard
            key={i}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            isMobile={isMobile}
            place={place}
            onClick={() => setChildClicked(i)} 
          />
        ))}

      </GoogleMapReact>
    </div>
  )
}

export default Maps;
