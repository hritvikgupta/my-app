import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Col, Form, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { useLoadScript, StandaloneSearchBox } from '@react-google-maps/api';
const libraries = ["places"];

const Header = ({setCoordinates}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD3rhrnqBd8OyGqGoWaTBgauoNGFTq-ECE",
    libraries,
  });

  const searchBoxRef = useRef();
  const onSearchBoxLoad = ref => searchBoxRef.current = ref;
  
  const onPlacesChanged = () => {
    const place = searchBoxRef.current.getPlaces()[0];
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    console.log(lat, lng)
    setCoordinates({ lat, lng });
  };

  if (!isLoaded) return "Loading...";

  return (
    <Navbar className="d-flex align-items-center p-2 bg-dark" expand="1g">
        <Col xs={2}>
        <Navbar.Brand className='d-flex align-items-center' href="#">
        <h1 className=" text-light mb-0 ms-2">Travel</h1>
        </Navbar.Brand>
        </Col>
        <Col className="d-flex align-items-center justify-content-end" xs={10}>
        <p className="text-light bold mb-0 me-3"> Explore new places</p>
        <Form inline className="d-flex ml-auto ms-2">
            <StandaloneSearchBox onLoad={onSearchBoxLoad} onPlacesChanged={onPlacesChanged}>
            <div style={{ position: 'relative' }}>
                <Form.Control 
                  className="my-search-box" 
                  style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px', paddingLeft: '35px', width: '250px' }} 
                  type="text" 
                  placeholder='Search'
                />
                <Search style={{ position: 'absolute', top: '15px', left: '10px' }} />
              </div>
            </StandaloneSearchBox>
        </Form>
        </Col>
    </Navbar>
  );
}

export default Header;
