import React, {useEffect, useState} from "react";
import {CssBaseline, Grid} from '@mui/material'

import Header from "./components/Header/Header";
import Maps from "./components/Map/Maps";
import List from "./components/List/List";
import Details from "./components/PlaceDetails/Details";
// impot Details
import {getPlacesData} from './Api/index'
const App=()=>{
    const [places, setPlaces]= useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [filterPlaces, setFilterPlaces] = useState([]);
    const [bounds, setBounds] = useState({});
    const [childClicked, setChildClicked]=useState(null);
    const [selectedType, setSelectedType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const [isLoading ,setIsLoading] = useState(false);
    useEffect(()=>{
            navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
                    setCoordinates({lat:latitude, lng:longitude})
            })
    }, [])

    useEffect(()=>{
        const filterPlaces=places.filter((place)=> place.rating>rating)
        setFilterPlaces(filterPlaces);
    },[rating]);

    useEffect(()=>{
        if(bounds.sw && bounds.ne){
        setIsLoading(true);
        getPlacesData(selectedType, bounds.sw, bounds.ne)
        .then((data)=>{
            // console.log(data)   

            setPlaces(data?.filter((place)=>place.name && place.num_reviews > 0));
            setFilterPlaces([]);
            setIsLoading(false);
        })
    }

    }, [selectedType, bounds])
    console.log(coordinates);
    return(
    <div>
        <Header setCoordinates={setCoordinates}/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-md-4">
                    <List places={filterPlaces.length?filterPlaces:  places}
                    childClicked = {childClicked}
                    isLoading={isLoading}
                    type= {selectedType}
                    setSelectedType= {setSelectedType}
                    rating={rating}
                    setRating = {setRating}
                    />
                </div>
                <div className="col-xs-12 col-md-8">
                    <Maps
                    setCoordinates= {setCoordinates}
                    setBounds = {setBounds}
                    coordinates = {coordinates}
                    places={places}
                    setChildClicked={setChildClicked}
                    />
                </div>
            </div>

        </div>

    </div>

    );
}

export default App;