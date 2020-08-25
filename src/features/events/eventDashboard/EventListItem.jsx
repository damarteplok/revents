import React from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Link } from "react-router-dom";

export default function EventListItem({ event, selectEvent, deleteEvent }) {
  return (
    <Segment.Group>
      <Segment>
        <Item>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header content={event.title} />
                <Item.Description>Hosted By {event.hostedBy}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Item>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' />
          {event.date}
          <Icon name='marker' />
          {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => {
            return (
              <EventListAttendee
                key={attendee.id}
                attendee={attendee}
              ></EventListAttendee>
            );
          })}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
          onClick={() => deleteEvent(event.id)}
          color='red'
          floated='right'
          content='delete'
        />
        <Button
          as={Link} to={`/events/${event.id}`}
          color='teal'
          floated='right'
          content='view'
        />
      </Segment>
    </Segment.Group>
  );
}
