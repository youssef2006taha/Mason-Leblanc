import Photographer from "./section/Photographer"
import Stats from "./section/Stats"
import Work from "../CommonSections/Work"

import img from "../../assets/portfolio.jpg"
import Experience from "./section/Experience"

function About() {
  return (
    <div>
      <Photographer />

      <Stats />

      <section className="py-10">
        <div className="container">
          <img src={img} alt="" className="w-full" />
        </div>
      </section>

      <Experience />

      <Work />
    </div>
  )
}

export default About