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
    this.state = { inCart: 0, checkoutTally: 0, product: null};
    this.getProduct = this.getProduct.bind(this);
  }
  // Get product button event handler
  getProduct() {
    this.setState({
      inCart: this.state.inCart + 1,
      checkoutTally: Math.round((
        this.state.checkoutTally +
        this.state.product.price) * 100) / 100
    });
  }
  // View cart button event handler
  viewCart() {
    alert("View Cart");
  }
  // Checkout button event handler
  checkout() {
    alert("Checkout");
  }
  componentDidMount() {
    const slug = this.props.params.slug;
    const id = slug.substring(slug.indexOf('--') + 2);
    this.setState({ product: products[id] });
  }
  render() {
    let detail = <h2>Product not found</h2>;
    if (this.state.product) {
      const price =
        <div className="ProductDetail-price">
          Price:&nbsp;
          <span className="ReactEshop-price">
            ${this.state.product.price}
          </span>
          {this.state.product.market_price
            ? <span className="ProductDetail-about-price">
                &nbsp;reduced from ${this.state.product.market_price}
              </span>
            : null}
        </div>;

      const bookDetail =
        <div className="ProductDetail-book-detail">
          <span><Glyphicon glyph="book" /> <b>Pages:</b> {this.state.product.pages}</span>
          <span> | <Glyphicon glyph="user" /> <b>Reader Level:</b> {this.state.product.reader_level}</span>
        </div>;

      const gigDetail =
        <div className="ProductDetail-gig-detail">
          <span><b>Duration:</b> {this.state.product.duration}</span>
          <span> | <b>Deliverable:</b> {this.state.product.deliverable}</span>
        </div>;

      // Display inCart quantity if not zero, otherwise display icon
      const callToActionContent = this.state.inCart
        ? <Badge>{this.state.inCart}</Badge>
        : <Glyphicon glyph="shopping-cart" />;

      // Display get product button
      const getProductButton =
        <Button
          onClick={this.getProduct}
          bsStyle="success"
          bsSize="large">
          Add to cart {callToActionContent}
        </Button>;

      // Display checkout button conditionally
      let checkoutButton = this.state.checkoutTally
        ? <span>
            <Button
              onClick={this.checkout}
              bsStyle="warning"
              bsSize="large">
              Buy <Badge>${this.state.checkoutTally}</Badge>
            </Button>
            &nbsp;
            <Button
              onClick={this.viewCart}
              bsStyle="default"
              bsSize="large">
              <Glyphicon glyph="shopping-cart" />
            </Button>
          </span>
        : null;

      // Display product detail
      detail =
        <Grid>
          <Row>
            <Col xs={12} md={4}>
            <Thumbnail
              href="#"
              src={this.state.product.category === 'Book' ? bookThumb : gigThumb}
              alt={this.state.product.name} />
            </Col>
            <Col xs={12} md={8}>
              <h1>
                {this.state.product.name}
                <small> {this.state.product.category}</small>
              </h1>
              {price}
              <p className="ProductDetail-summary">
                {this.state.product.summary}
              </p>
              {this.state.product.category === 'Book' ? bookDetail : null}
              {this.state.product.category === 'Gig' ? gigDetail : null}
              {getProductButton}
              &nbsp;
              {checkoutButton}
              <p className="ProductDetail-description">
                {this.state.product.description}
              </p>
            </Col>
          </Row>
        </Grid>;
    }

    return(
      <div>
        <div className="ReactEshop-nav-spacer" />
        {detail}
      </div>
    );
  }
}
