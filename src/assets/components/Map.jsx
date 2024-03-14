import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { MarkerWithInfowindow } from "./MartkerWithInfoWindow";

// const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


const Map2 = ({ setCoordinates, setBounds, coordinates, places }) => (
  <APIProvider apiKey={apiKey}>
    <Map
      mapId={"acf4dcb4f2574164"}
      defaultZoom={14}
      defaultCenter={coordinates}
      // zoom={14}
      // center={coordinates}
      gestureHandling={"greedy"}
      disableDefaultUI={false}
      onBoundsChanged={(e) => {
        console.log("Bounds changed", e.detail);
        setCoordinates({ lat: e.detail.center.lat, lng: e.detail.center.lng });
        setBounds({
          ne: { lat: e.detail.bounds.north, lng: e.detail.bounds.east },
          sw: { lat: e.detail.bounds.south, lng: e.detail.bounds.west },
        });
      }}
    >
      {/* <MarkerWithInfowindow coords={coordinates} /> */}
      {places?.map((place, i) => (

          // Check if the place has a latitude and longitude
          // If it does, create a MarkerWithInfowindow component
          // and pass the place's latitude and longitude as props
          place.latitude && place.longitude && (
            <MarkerWithInfowindow
              coords={{ lat: Number(place.latitude), lng: Number(place.longitude) }}
              key={i}
            />
          )
      ))}
    </Map>
  </APIProvider>
);



export default Map2;
