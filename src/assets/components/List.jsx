import React, { useState, useEffect, createRef } from "react";
import PlaceDetails from "./PlaceDetails";

export default function List({places}) {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl py-3">
        Explore restaurants, hotels and attractions
      </h1>
      <div className="flex flex-col md:flex-row ">
        <div className="mb-4 pr-6">
          <label htmlFor="type" className="text-sm font-medium text-gray-700">
            Type
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
        </div>
        <div className="mb-4 pr-6">
          <label htmlFor="rating" className="text-sm font-medium text-gray-700">
            Rating
          </label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">All</option>
            <option value="3">Above 3.0</option>
            <option value="4">Above 4.0</option>
            <option value="4.5">Above 4.5</option>
          </select>
        </div>
      </div>
      <div className="h-[75vh] overflow-auto space-y-3">
        {places?.map((place, index) => {
          return (
            <div key={index} className="w-full">
              <PlaceDetails place={place} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
