import React from 'react'

// Components
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

// Styles
import '../../styles/index.scss'
import layoutStyles from './layout.module.scss';

const MainLayout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout