import React from "react";
import Event from "./event";

const Events = ({ items }) => {
  return (
    <div className="flex flex-col gap-6 p-5 justify-center items-center md:min-h-screen ">
      {items.map((item) => (
        <Event key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Events;
