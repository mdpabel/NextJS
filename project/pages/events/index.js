import React from "react";
import Events from "../../components/events";
import { getAllEvents } from "../../dummy-data";

const AllEvents = () => {
  const allEvents = getAllEvents();

  return (
    <div>
      <Events items={allEvents} />
    </div>
  );
};

export default AllEvents;
