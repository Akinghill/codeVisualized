import React from 'react';

import Preview from '../../components/preview/Preview';

import { postData } from '../../data/postdata';

import './home.styles.scss';

const HomePage = () => (
  <div className="home-page">
      <Preview postData={postData[0]} />
      <Preview postData={postData[0]} />
      <Preview postData={postData[0]} />
  </div>
);

export default HomePage;
