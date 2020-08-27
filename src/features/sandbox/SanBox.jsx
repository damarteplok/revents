import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { increment, decrement } from "./testReducer";

function SanBox(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  return (
    <>
      <h1>Testing 123</h1>
      <h2>The data is: {data}</h2>
      <Button
        onClick={() => {
          dispatch(increment(20));
        }}
        content='Increment'
        color='green'
      />
      <Button
        onClick={() => {
          dispatch(decrement(10));
        }}
        content='Decrement'
        color='red'
      />
    </>
  );
}

export default SanBox;
