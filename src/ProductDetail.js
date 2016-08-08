import React, { Component, PropTypes } from 'react';
import './ProductDetail.css';
import { Grid, Row, Col, Thumbnail, Glyphicon, Badge, Button } from 'react-bootstrap';
import bookThumb from './book-mock.jpg';
import gigThumb from './gig-mock.jpg';
import productsData from './products.json';
const products = JSON.parse(JSON.stringify(productsData));

export default class ProductDetail extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = { inCart: 0, checkoutTally: 20};
  }
  render() {
    // Display inCart quantity if not zero, otherwise display icon
    const callToActionContent = this.state.inCart
      ? <Badge>{this.state.inCart}</Badge>
      : <Glyphicon glyph="shopping-cart" />;

    let checkoutButton = this.state.checkoutTally
      ? <Button
          bsStyle="warning"
          bsSize="large">
          Buy <Badge>${this.state.checkoutTally}</Badge>
        </Button>
      : null;

    const slug = this.props.params.slug;
    const id = slug.substring(slug.indexOf('--') + 2);
    let productFound = false;
    let detail = Object.keys(products).map(key => {
      if (key === id && !productFound) {
        productFound = true;
        const bookDetail =
          <div className="ProductDetail-book-detail">
            <span><Glyphicon glyph="book" /> <b>Pages:</b> {products[key].pages}</span>
            <span> | <Glyphicon glyph="user" /> <b>Reader Level:</b> {products[key].reader_level}</span>
          </div>;
        const gigDetail =
          <div className="ProductDetail-gig-detail">
            <span><b>Duration:</b> {products[key].duration}</span>
            <span> | <b>Deliverable:</b> {products[key].deliverable}</span>
          </div>;
        return (
          <Grid key={key}>
            <Row>
              <Col xs={12} md={4}>
              <Thumbnail
                href="#"
                src={products[key].category === 'Book' ? bookThumb : gigThumb}
                alt={products[key].name} />
              </Col>
              <Col xs={12} md={8}>
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
                        &nbsp;reduced from ${products[key].market_price}
                      </span>
                    : null}
                </div>
                <p className="ProductDetail-summary">
                  {products[key].summary}
                </p>
                {products[key].category === 'Book' ? bookDetail : null}
                {products[key].category === 'Gig' ? gigDetail : null}
                <Button
                  bsStyle="success"
                  bsSize="large">
                  Add to cart {callToActionContent}
                </Button>
                &nbsp;
                {checkoutButton}
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
