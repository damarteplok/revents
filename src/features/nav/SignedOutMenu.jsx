import React from "react";
import { Menu, Button } from "semantic-ui-react";

function SignedOutMenu({setAuthenticated}) {
  return (
    <Menu.Item position='right'>
      <Button onClick={() => setAuthenticated(true)} basic inverted content='login' />
      <Button
        basic
        inverted
        content='Register'
        style={{ marginleft: "0.5em" }}
      />
    </Menu.Item>
  );
}

export default SignedOutMenu;
