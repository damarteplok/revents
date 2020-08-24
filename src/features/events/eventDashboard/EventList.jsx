import React from "react";
import EventListItem from "./EventListItem";

export default function EventList({events}) {
  return (
    <>
      {events.map((event) => {
        return <EventListItem key={event.id} event={event} />;
      })}
    </>
  );
}
