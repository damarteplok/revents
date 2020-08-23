import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

function NavBar(props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}}/>
                    Re-vents!
                </Menu.Item>
                <Menu.Item name='Events'></Menu.Item>
                <Menu.Item>
                    <Button positive inverted content='Create Event' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='login' />
                    <Button basic inverted content='Register' style={{marginleft: '0.5em'}}/>
                </Menu.Item>
            </Container>
        </Menu>
    );
}

export default NavBar;