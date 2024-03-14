import React from 'react';

function Rating({ value, readOnly }) {
  return (
    <div className="flex">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => !readOnly && setValue(ratingValue)}
              className="hidden"
            />
            <svg
              className={`w-4 h-4 fill-current ${ratingValue <= value ? 'text-yellow-500' : 'text-gray-400'}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15.27L16.18 21l-1.64-7.03L22 9.24l-7.19-.61L10 2 7.19 8.63 0 9.24l5.46 4.73L3.82 21z" />
            </svg>
          </label>
        );
      })}
    </div>
  );
}

export default Rating;