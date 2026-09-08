import Hero from "./sections/Hero"
import Sec1 from "./sections/Sec1"
import About from "./sections/About"
import PortfolioImgs from "../CommonSections/PortfolioImgs"
import Work from "../CommonSections/Work"

function Home() {
  return (
    <div>
      <Hero />
      <Sec1 />
      <About />
      <PortfolioImgs />
      <Work />
    </div>
  )
}

export default Home