import React, { Fragment } from 'react';
import spinner from './assets/spinner.gif';

 export const loadingSpinner = () => (
  <Fragment>
    <img
      scr={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='loading ...'
    />
  </Fragment>
);
