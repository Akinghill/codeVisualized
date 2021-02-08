import React from 'react';

import './jumbotron.styles.css'

export const Jumbotron = () => {
  return (
    <div
      className="jumbotron vh-50"
      style={{ background: '#ffffff00', maxWidth: '700px', margin: 'auto' }}
    >
      <h1 className="display-5" style={{ marginBottom: '2rem' }}>
        hello world
        <span id="cursor"></span>
      </h1>
      <p className="lead" style={{ textAlign: 'right' }}>
        welcome to
        <span className="name"> code visualized</span>. a place for developers
        to to come and learn about modern cutting edge technology
      </p>
      <hr className="my-4" />
      <p style={{ float: 'right' }} className="lead">
        <a className="btn btn-outline-success btn-lg" href="#0" role="button">
          recent posts
        </a>
      </p>
    </div>
  );
};

export default Jumbotron;
