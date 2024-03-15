import {Autocomplete} from '@react-google-maps/api';
import React, {useState} from 'react';


export default function Header({setCoordinates}) {
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  }

  const onPlaceChanged = () => {
    // console.log(autocomplete.getPlace());
    // const lat = autocomplete.getPlace().geometry.location.lat();
    // const lng = autocomplete.getPlace().geometry.location.lng();
    // setCoordinates({lat, lng});
  }


  return (
    <header className="p-4 bg-blue-500 flex justify-between items-center">
      <h1 className="text-2xl text-white">AdventureAlly </h1>
      <div className="flex items-center">
        <h2 className="text-lg text-white mr-4">Explore new places</h2>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input className="pl-8 pr-2 py-1 rounded-md" placeholder="Search…" />
          </div>
        </Autocomplete>
      </div>
    </header>
  );
}

