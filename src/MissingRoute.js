import React from 'react';
import './ReactEshop.css';
import { Grid } from 'react-bootstrap';

const MissingRoute = () => (
  <div>
    <div className="ReactEshop-nav-spacer" />
    <Grid>
      <h1>Oops! We Could Not Find That...</h1>
      <h2>
        Please use top menu to navigate elsewhere.
      </h2>
    </Grid>
  </div>
);

export default MissingRoute;
