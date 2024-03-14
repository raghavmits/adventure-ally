import React from "react";
import Rating from "./Rating";

export default function PlaceDetails({ place }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="h-64 w-full object-cover"
        src={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        alt={place.name}
      />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{place.name}</h2>
        <div className="flex justify-between my-2">
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <p>
            {place.num_reviews} review{place.num_reviews > 1 && "s"}
          </p>
        </div>
        <div className="flex justify-between">
          <p>Price</p>
          <p className="font-bold">{place.price_level}</p>
        </div>
        <div className="flex justify-between">
          <p className="pr-4">Ranking</p>
          <p className="font-bold justify-end text-right">{place.ranking}</p>
        </div>
        {place?.awards?.map((award) => (
          <div className="flex justify-between my-1 items-center">
            <img src={award.images.small} />
            <p className="text-sm text-gray-600">{award.display_name}</p>
          </div>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <span
            key={name}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1 mr-0"
          >
            {name}
          </span>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 flex justify-end">
        <button
          className="text-sm text-blue-500 hover:text-blue-700 focus:outline-none mr-2"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </button>
        <button
          className="text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </button>
      </div>
    </div>
  );
}
