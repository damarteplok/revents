import React from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem({ event }) {
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
        <Button color='teal' floated='right' content='view' />
      </Segment>
    </Segment.Group>
  );
}
