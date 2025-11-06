import React from "react";

function Card({ image, category, title, description }) {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-8">
          <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            {category}
          </div>
          <a
            href="#"
            className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
