import React, { useState } from 'react'
import {Container, Row , Col , Form} from 'react-bootstrap';
import Details from "../PlaceDetails/Details"

const List = () => {
  const [selectedType, setSelectedType] = useState("resturants");
  const [rating, setRating] = useState("");

  const places = [
    {name:"Cool Place"},
    {name:"Best Beer"},
    {name:"Cool Gameing parlour"},
    {name:"Cool Place"},
    {name:"Best Beer"},
    {name:"Cool Gameing parlour"},
    {name:"Cool Place"},
    {name:"Best Beer"},
    {name:"Cool Gameing parlour"},
    {name:"Cool Place"},
    {name:"Best Beer"},
    {name:"Cool Gameing parlour"}
  ]

  return (
    <Container className='mt-4'>
      <Row>
        <Col>
        <h4>Resturants, Hotels & Attractions around you</h4>
        </Col>
      </Row>
      <Row className="d-flex flex-row mb-3mt-2">
        <Col md={4}> 
        <span>Type</span>
          <Form.Select aria-aria-label="Default Select Example" value={selectedType} onChange={(e)=>setSelectedType(e.target.value)}>
            <option value="resturants">Resturants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </Form.Select>
        </Col>
        <Col md={4}>
        <span>Ratings</span>
          <Form.Select aria-aria-label="Default Select Example" value={rating} onChange={(e)=>setRating(e.target.value)}>
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </Form.Select>
        </Col>
      </Row>
      <Container className="mt-4 overflow-auto" style={{height: "600px"}}>
        {places?.map((place, i) => (
        <Row key={i} className="mb-4">
          <Col xs={12}>
            <Details place={place}/>
          </Col>
        </Row>
        ))}
      </Container>
    </Container>
  )
}

export default List
