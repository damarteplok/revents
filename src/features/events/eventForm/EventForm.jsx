import React from "react";
import { Segment, Header, Button } from "semantic-ui-react";
import cuid from "cuid";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateEvent, createEvent } from "../eventActions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyInputText from "../../../app/common/form/MyInputText";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryData } from "../../../app/api/categoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("You must provided title"),
    category: Yup.string().required("You must provided category"),
    description: Yup.string().required("You must provided description"),
    city: Yup.string().required("You must provided city"),
    venue: Yup.string().required("You must provided venue"),
    date: Yup.string().required("You must provided date"),
  });

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: "Bob",
                  attendees: [],
                  hostPhotoURL: "/assets/user.png",
                })
              );
          history.push("/events");
        }}
      >
        <Form className='ui form'>
          <Header sub color='teal' content='Event Details' />
          <MyInputText name='title' placeholder='Event Title' />
          <MySelectInput
            name='category'
            placeholder='Event Category'
            options={categoryData}
          />
          <MyTextArea name='description' placeholder='Description' rows={3} />
          <Header sub color='teal' content='Event Location Details' />
          <MyInputText name='city' placeholder='City' />
          <MyInputText name='venue' placeholder='Venue' />
          <MyDateInput
            name='date'
            placeholderText='Event Date'
            timeFormat='HH:mm'
            showTimeSelect
            timeCaption='time'
            dateFormat='MMMM d, yyyy h:mm a'
          />
          <Button type='submit' floated='right' positive content='Submit' />
          <Button
            as={Link}
            to='/events'
            type='click'
            floated='right'
            content='Cancel'
          />
        </Form>
      </Formik>
    </Segment>
  );
}
