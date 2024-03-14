import React, {useState} from 'react';
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';

export const MarkerWithInfowindow = ({coords}) => {
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={coords}
        title={'AdvancedMarker that opens an Infowindow when clicked.'}
      >
      <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}>
          This is an example for the{' '}
          <code style={{whiteSpace: 'nowrap'}}>&lt;AdvancedMarker /&gt;</code>{' '}
          combined with an Infowindow.
        </InfoWindow>
      )}
        </AdvancedMarker>

    </>
  );
};