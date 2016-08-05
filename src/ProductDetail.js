import React, { Component, PropTypes } from 'react';
import './ProductDetail.css';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import bookThumb from './book-mock.jpg';
import gigThumb from './gig-mock.jpg';
import productsData from './products.json';
const products = JSON.parse(JSON.stringify(productsData));

export default class ProductDetail extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  }
  render() {
    const slug = this.props.params.slug;
    const id = slug.substring(slug.indexOf('--') + 2);
    let productFound = false;
    let detail = Object.keys(products).map(key => {
      if (key === id) {
        productFound = true;
        return (
          <Grid key={key}>
            <Row>
              <Col xs={12} md={6}>
              <Thumbnail
                href="#"
                src={products[key].category === 'Book' ? bookThumb : gigThumb}
                alt={products[key].name} />
              </Col>
              <Col xs={12} md={6}>
                <h1>
                  {products[key].name}
                  <small> {products[key].category}</small>
                </h1>
                <div className="ProductDetail-price">
                  Price:&nbsp;
                  <span className="ReactEshop-price">
                    ${products[key].price}
                  </span>
                  {products[key].market_price
                    ? <span className="ProductDetail-about-price">
                        &nbsp;reduced from &nbsp;
                        <span className="ProductDetail-market-price">
                          ${products[key].market_price}
                        </span>
                      </span>
                    : null}
                </div>
                <p className="ProductDetail-description">
                  {products[key].description}
                </p>
              </Col>
            </Row>
          </Grid>
        );
      } else {
        return null;
      }
    });
    if (!productFound) { detail = <h2>Product not found</h2>; }
    return(
      <div>
        <div className="ReactEshop-nav-spacer" />
        {detail}
      </div>
    );
  }
}
