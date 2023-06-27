import React, { forwardRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,faStar, faPhoneAlt, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

const Details = forwardRef((props, ref) => {
  // props now contains place, selected
  const { place, selected } = props;

  const image = place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
  if (selected) ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  // console.log(selected, ref)

  return (
<div className="card shadow" ref={ref}>
  <img 
    src={place.photo ? place.photo.images.large.url: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} 
    className="card-img-top" 
    alt={place.name}
    style={{height: 350}}
  />
  <div className="card-body">
    <h5 className="card-title">{place.name}</h5>
  
    <div className="d-flex justify-content-between align-items-center">
      <div>
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
      <p className="card-text small">out of {place.num_reviews}</p>
    </div>
    <div className="d-flex justify-content-between align-items-center">
      <p className="card-text small mb-0">Price</p>
      <p className="card-text small">{place.price_level}</p>
    </div>
    <div className="d-flex justify-content-between align-items-center">
      <p className="card-text small mb-0">Ranking</p>
      <p className="card-text small">{place.ranking}</p>
    </div>
    {place?.awards?.map((award)=>(
      <div className="d-flex justify-content-between align-items-center">
        {/* {console.log(award.display_name)} */}
        <img src={award.images.small} alt={award.display_name}/>
    </div>
    ))}
   
    {place?.cuisine?.map((item) => (
  <span className="badge badge-primary" key={item.key}>
    {item.name}
    <div class="d-flex align-items-center bg-light rounded-pill px-2 py-1">
      <span class="ml-2 text-dark small">{item.name}</span>
    </div>
  </span>
))}
{place?.address && (
    <div className="d-flex justify-content-between align-items-center m-1">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-dark mt-0" />
        <small className="card-text text-end">
            {place.address.split('-')[0]} {/* Splits the string at '-' and takes the part before '-' */}
        </small>
    </div>
)}
{place?.phone && (
    <div className="d-flex justify-content-between align-items-center m-1">
<FontAwesomeIcon icon={faPhoneAlt} className="text-dark mt-0" rotation={90} />
        <small className="card-text text-end">
            {place.phone} {/* Splits the string at '-' and takes the part before '-' */}
        </small>
    </div>
)}
<div >
    <button type="button" className="btn btn-primary btn-sm m-1 " onClick={() => {window.open(place.web_url,'_blank')}}>
        Website 
    </button>
    <button type="button" className="btn btn-primary btn-sm" onClick={() => {window.open(place.web_url, '_blank')}}>
        Trip Advisor
    </button>
</div>


  </div>
</div>

  )
})

export default Details;