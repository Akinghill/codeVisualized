import React from 'react'

export const Card = ({ title, date, img, brief }) => (
  <div className="card border-success mb-3" style={{maxWidth: '20rem'}}>
    <img className="card-img" src="./assets/blogpost1.jpg" alt="blog post"/>
    <div className="card-header">Header</div>
    <div className="card-body">
      <h4 className="card-title">Success card title</h4>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
)

export default Card