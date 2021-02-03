import React from 'react'

import Header from '../../components/header/Header'
import { Card } from '../../components/card/card.component'
import Jumbotron from '../../components/jumbotron/jumbotron.component'

import './home.styles.scss'

const HomePage = () => (
  <div className="home-page">
    <Header />
    <Jumbotron />
    <section className="section ph-1r">
      <h2 className="posts-title">Posts</h2>
      <div className="recent-posts">
        <Card />
        <Card />
        <Card />
      </div>
    </section>

    <section id="about" className="section about ph-1r">
      <h2 className="about-title">About</h2>
      <div className="about-text">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quo ut porro sint minima aut eaque suscipit velit illo, consequatur nobis eligendi quibusdam qui fugit eum magni eius dolore esse non harum libero exercitationem accusamus quae. Iure temporibus qui saepe nulla! Error sed eius, quisquam at neque atque nesciunt maiores.
        </p>
      </div>
    </section>
  </div>
)

export default HomePage