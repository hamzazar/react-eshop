// @flow
import React, { Component } from 'react';
import ProductSummary from './ProductSummary';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import bookThumb from './book-mock.jpg';
import gigThumb from './gig-mock.jpg';
import productsData from './products.json';

const products = JSON.parse(JSON.stringify(productsData));

export default class Landing extends Component {
  render() {
    const productFeatured = Object.keys(products).map(key => {
      return (products[key].featured
        ? <ProductSummary
              key={key}
              id={key}
              name={products[key].name}
              description={products[key].description}
              price={products[key].price}
              link={products[key].link}
              thumb={products[key].category === 'Book' ? bookThumb : gigThumb}
              category={products[key].category}
              referral={products[key].referral ? true : false}
              display="splash"
            />
        : null
      );
    });
    const productCatalog = Object.keys(products).map(key => {
      return (!products[key].featured
        ? <Col xs={12} md={6} lg={3} key={key}>
            <ProductSummary
              id={key}
              name={products[key].name}
              description={products[key].description}
              price={products[key].price}
              link={products[key].link}
              thumb={products[key].category === 'Book' ? bookThumb : gigThumb}
              category={products[key].category}
              referral={products[key].referral ? true : false}
              display="card"
            />
          </Col>
        : null
      );
    });
    return (
      <div>
        <Jumbotron>{productFeatured}</Jumbotron>
        <Grid>
          <Row>{productCatalog}</Row>
        </Grid>
      </div>
    );
  }
}
