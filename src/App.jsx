import React, { useState, useEffect } from "react";
import Header from "./assets/components/Header";
import List from "./assets/components/List";
import Map from "./assets/components/Map";
import { getPlacesData } from "./api";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        // console.log(latitude, longitude);
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    // console.log(coordinates, bounds);
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      // console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/3 px-3">
            <List places={places}/>
          </div>
          <div className="w-full md:w-2/3 px-3 flex">
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
