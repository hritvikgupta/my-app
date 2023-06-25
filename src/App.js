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
    const [bounds, setBounds] = useState(null);

    useEffect(()=>{
        getPlacesData()
        .then((data)=>{
            console.log(data)
            setPlaces(data)
        })

    }, [])
    return(
    <div>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-md-4">
                    <List/>
                </div>
                <div className="col-xs-12 col-md-8">
                    <Maps
                    setCoordinates= {setCoordinates}
                    setBounds = {setBounds}
                    coordinates = {coordinates}
                    />
                </div>
            </div>

        </div>

    </div>

    );
}

export default App;