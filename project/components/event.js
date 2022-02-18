/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DateIcon from "./icons/date";
import LocationIcon from "./icons/Location";
import Button from "./ui/button";

const Event = ({ item }) => {
  const { title, location, date, image, id } = item;

  const link = "/events/" + id;
  const formattedAddress = location.replace(", ", "\n");
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col md:flex-row max-w-2xl bg-white gap-4 shadow-lg">
      <img className="md:w-1/2 h-full" src={`/${image}`} alt={title} />
      <div className="flex flex-col gap-6 p-5">
        <h2 className="font-bold text-gray-800 text-xl ">{title}</h2>
        <div className="text-gray-700 flex flex-col gap-2">
          <div className="flex gap-2">
            <DateIcon />
            <time className="font-bold text-gray-600 text-sm">
              {humanReadableDate}
            </time>
          </div>
          <div className="flex gap-2 items-center">
            <LocationIcon />
            <address className="italic whitespace-pre	text-sm">
              {formattedAddress}
            </address>
          </div>
        </div>
        <div className="self-end">
          <Button link={link}>Explore event</Button>
        </div>
      </div>
    </div>
  );
};

export default Event;
