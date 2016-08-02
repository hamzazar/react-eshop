// @flow
import React, { Component } from 'react';
import ProductSummary from './ProductSummary';
import {
  Grid, Row, Col,
  Navbar,
  Nav,
  NavItem,
  Jumbotron } from 'react-bootstrap';
import bookImage from './book-mock.jpg';
import gigImage from './gig-mock.jpg';

class App extends Component {
  render() {
    return (
      <div>
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
        <Jumbotron>
          <ProductSummary
            name="React Eshop"
            description={`Easily reusable Eshop in React, ES6, and Facebook.`}
            price={9.99}
            book
            referral
            link='https://leanpub.com/reacteshop'
            image={bookImage}
            splash
          />
        </Jumbotron>
        <Grid>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <ProductSummary
                name="Setup React Webpack"
                description={`Development environment setup using React and
                  Webpack.`}
                price={25}
                image={gigImage}
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <ProductSummary
                name="React Eshop"
                description={`Easily reusable Eshop in React, ES6, and Facebook.`}
                price={9.99}
                book
                referral
                link='https://leanpub.com/reacteshop'
                image={bookImage}
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <ProductSummary
                name="Custom React Stack"
                description={`Custom React tech stack based on your project.`}
                price={99}
                image={gigImage}
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <ProductSummary
                name="React Speed Coding"
                description={`Develop custom UI library in React, Flexbox, and
                  PostCSS.`}
                price={9.99}
                book
                referral
                link='https://leanpub.com/reactspeedcoding'
                image={bookImage}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
