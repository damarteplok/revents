import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';

export default function EventDetailedPage(props) {
    return (
       <Grid>
           <Grid.Column widescreen={10}>
                <EventDetailedHeader />
                <EventDetailedInfo />
                <EventDetailedChat />
           </Grid.Column>
           <Grid.Column widescreen={6}>
               <EventDetailedSidebar />
           </Grid.Column>
       </Grid>
    );
}
