// @flow
import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Navigation extends Component {
  render() {
    return (
      <Navbar inverse fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">React Eshop</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem href="//github.com/manavsehgal/react-eshop">
                Code
              </NavItem>
              <NavItem href="//leanpub.com/reacteshop">
                Book
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Grid>
      </Navbar>
    );
  }
}
