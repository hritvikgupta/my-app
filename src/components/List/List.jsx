import React, { useState, useEffect, createRef } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ForwardedDetails from '../PlaceDetails/Details';
import Details from '../PlaceDetails/Details';

const List = ({ places, childClicked, isLoading, selectedType, setSelectedType, rating, setRating}) => {
  const [elRefs, setElRefs] = useState([]);
  // console.log(childClicked)
  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [places]);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h4>Restaurants, Hotels & Attractions around you</h4>
        </Col>
      </Row>
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <Row className="d-flex flex-row mb-3 mt-2">
            <Col md={4}>
              <span>Type</span>
              <Form.Select
                aria-label="Default Select Example"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
                <option value="attractions">Attractions</option>
              </Form.Select>
            </Col>
            <Col md={4}>
              <span>Ratings</span>
              <Form.Select
                aria-label="Default Select Example"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value={0}>All</option>
                <option value={3}>Above 3.0</option>
                <option value={4}>Above 4.0</option>
                <option value={4.5}>Above 4.5</option>
              </Form.Select>
            </Col>
          </Row>
          <Container className="mt-4 overflow-auto" style={{ height: '600px' }}>
          {places?.map((place, i) => (
              <Row key={i} className="mb-4">
                <Col xs={12}>
                  <Details
                    place={place}
                    selected={Number(childClicked) === i}
                    ref={elRefs[i]}
                  />
                </Col>
              </Row>
            ))}
          </Container>
        </>
      )}
    </Container>
  );
};

export default List;
