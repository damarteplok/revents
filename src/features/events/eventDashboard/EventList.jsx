import React from "react";
import EventListItem from "./EventListItem";

export default function EventList({ events }) {
  return (
    <>
      {events.map((v) => {
        return (
          <EventListItem
            key={v.id}
            event={v}
          />
        );
      })}
    </>
  );
}
