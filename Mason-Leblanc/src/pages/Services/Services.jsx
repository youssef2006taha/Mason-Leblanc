import img from '../../assets/services.jpg'
import MainSec2 from '../CommonSections/MainSec2'
import Cards1 from './sections/Cards1'
import Cards2 from './sections/Cards2'
import Work from "../CommonSections/Work"

import img1 from "../../assets/link-4.png"
import img2 from "../../assets/link-2.png"
import img3 from "../../assets/link-1.png"
import img4 from "../../assets/p-9.jpg"
import Stats from './sections/Stats'

const pars = [
  {
    id: 1,
    head: "Photoshoot",
    p1: "Nam et quam sit amet turpis finibus maximus tempor eget augue aenean at ultricies.",
    p2: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    img: img1
  },
  
  {
    id: 2,
    head: "Editing",
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: img2
  },

  {
    id: 3,
    head: "Retouching",
    p1: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    p2: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    img: img3
  },

  {
    id: 4,
    head: "Lightning",
    p1: "Excepteur sint occaecat cupidatat non proident, sunt culpa qui officia deserunt.",
    p2: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    img: img4
  },
]

function Services() {
  return (
    <div>
      <MainSec2 
        head="Services"
        para="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        img={img}
      />

      <Cards1 pars={pars}/>

      <Cards2 pars={pars}/>

      <Stats />

      <Work />
    </div>
  )
}

export default Services