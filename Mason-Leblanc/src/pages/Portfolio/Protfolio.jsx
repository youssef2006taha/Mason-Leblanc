import React from 'react'
import MainSec2 from '../CommonSections/MainSec2'
import PortfolioImgs from '../CommonSections/PortfolioImgs'
import Work from '../CommonSections/work'
import img from '../../assets/portfolio.jpg'

function Protfolio() {
  return (
    <div>
      <MainSec2 
        head="Portfolio"
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        img={img}
      />

      <PortfolioImgs page='portfolio' />

      <Work />
    </div>
  )
}

export default Protfolio