import React, { useState } from "react";
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

export const MarkerWithInfowindow = ({ coords }) => {
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={coords}
        title={"AdvancedMarker that opens an Infowindow when clicked."}
      >
        <Pin
          background={"#FFFF00"}
          glyphColor={"#1A001A"}
          borderColor={"#000"}
          
        />
        {infowindowOpen && (
          <InfoWindow
            anchor={marker}
            maxWidth={300}
            onCloseClick={() => setInfowindowOpen(false)}
          >
            <img
              className="h-40 w-full object-cover pt-2 pl-2 pr-2 rounded-lg"
              src={
                place.photo
                  ? place.photo.images.large.url
                  : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
              }
              alt={place.name}
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{place.name}</h2>
            </div>
          </InfoWindow>
        )}
      </AdvancedMarker>
    </>
  );
};