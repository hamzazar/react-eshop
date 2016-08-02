import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, Well, Thumbnail, Button, Glyphicon, Badge } from 'react-bootstrap';
import './ProductSummary.css';

export default class ProductSummary extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    book: PropTypes.bool,
    referral: PropTypes.bool,
    price: PropTypes.number,
    link: PropTypes.string,
    splash: PropTypes.bool
  }
  static defaultProps = {
    book: false,
    referral: false,
    splash: false
  }
  constructor(props) {
    super(props);
    this.state = { likes: this.props.likes, inCart: 0 }
    this.getProduct = this.getProduct.bind(this);
    this.productDetails = this.productDetails.bind(this);
  }
  productDetails() {
    alert(`Mock product detail for ${this.props.name}`);
  }
  getProduct() {
    if (this.props.referral) {
      window.open(this.props.link);
    } else {
      this.setState({ inCart: this.state.inCart + 1 });
    }
  }
  render() {
    let callToActionIcon = this.props.referral
      ? <Glyphicon glyph="globe" />
      : <Glyphicon glyph="shopping-cart" />;

    let renderProductSummary = '';
    if (this.props.splash) {
      renderProductSummary =
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <Thumbnail
                href="#"
                onClick={this.productDetails}
                src={this.props.image}
                alt="{this.props.name}" />
            </Col>
            <Col xs={12} md={6}>
              <h1>
                {this.props.name}
                <small>
                {this.props.book
                  ? ' Book'
                  : ' Gig'}
                </small>
              </h1>
              <p>{this.props.description}</p>
              <h2 className="ProductSummary-price">${this.props.price}</h2>
              <p>
                <Button
                  onClick={this.getProduct}
                  bsStyle={this.props.referral ? 'primary' : 'success'}
                  bsSize="large">
                  {this.props.referral ? 'Visit site ' : 'Add to cart '}
                  {this.state.inCart
                    ? <Badge>{this.state.inCart}</Badge>
                    : callToActionIcon}
                </Button>
                &nbsp;
                <Button
                  onClick={this.productDetails}
                  bsStyle="default"
                  bsSize="large">
                  <Glyphicon glyph="info-sign" />
                </Button>
              </p>
            </Col>
          </Row>
        </Grid>;
    };
    if (!this.props.splash) {
      renderProductSummary =
        <Well>
          <Thumbnail
            href="#"
            onClick={this.productDetails}
            src={this.props.image}
            alt="{this.props.name}" />
          <h2>
            {this.props.name}
            <small>
            {this.props.book
              ? ' Book'
              : ' Gig'}
            </small>
          </h2>
          <h4 className="ProductSummary-price">
            Price: ${this.props.price}
          </h4>
          <p>{this.props.description}</p>
          <p>
            <Button
              onClick={this.getProduct}
              bsStyle={this.props.referral ? 'primary' : 'success'}>
              {this.props.referral ? 'Visit site ' : 'Add to cart '}
              {this.state.inCart
                ? <Badge>{this.state.inCart}</Badge>
                : callToActionIcon}
            </Button>
            &nbsp;
            <Button onClick={this.productDetails} bsStyle="default">
              <Glyphicon glyph="info-sign" />
            </Button>
          </p>
        </Well>;
    };
    return (renderProductSummary);
  }
}
