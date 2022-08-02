import React, { useState, useEffect } from "react";
import "./App.css";
//CssBaseline: use normalisestyle.css: fixing margin, padding immediately without writing it in seperate file
import { CssBaseline, Grid } from "@material-ui/core";

//import API
import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";

const App = () => {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({}); //starting value
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      //to get the current position of the device.

      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []); //dependencies: emppty, the call inside useEffect only happens once

  
  //API call
  useEffect(() => {
 
    getPlacesData(bounds.sw,bounds.ne).then((data) => {

      setPlaces(data);
    }); 
  }, [coordinates, bounds]); //the code inside useEffect re-runs everytime dependecies changing 
  //re-runs when coordinates, bounds change 


  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
