import React from 'react';
import { Link } from 'react-router-dom';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

import './preview.styles.scss';
export default function ReviewPreview({ postData }) {
  const { slug, imgUrl, title, clip, date, tags } = postData;

  return (
    <Link to={`/posts/${slug}`} className="link" style={{ display: 'inline-block' }}>
      <div className="preview">
        <div className="content">
          <BubbleChartIcon className="icon" />
          <h2 className="title">{title}</h2>
        </div>
      </div>
    </Link>
  );
}
