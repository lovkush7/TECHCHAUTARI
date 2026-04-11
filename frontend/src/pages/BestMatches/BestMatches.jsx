import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Nav from '../../components/freelancing/Navbar/Nav'
import BestMatch from '../../components/freelancing/bestMatches/BestMatch'

const BestMatches = () => {
  return (
    <div>
        <Navbar/>
        <Nav/>
      <BestMatch/>
    </div>
  )
}

export default BestMatches;
