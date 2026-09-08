import img from "../../assets/cta.png"
import { Link } from "react-router-dom";

function Work() {
  return (
    <section className='relative h-[30vh] sm:h-[40vh] md:h-[50vh] flex justify-end my-10'>
      <div
        className='bg-cover bg-center h-[100%] w-[100%] md:w-[75%] lg:w-[50%]'
        style={{backgroundImage: `url(${img})`}}
      >
        <div className="w-full h-full bg-linear-to-r from-bg-main to-transparent"/>
      </div>
      
      <div className="absolute inset-0 flex flex-col gap-10 items-center justify-center">
        <h2 
          className="
            contaner font-bold uppercase tracking-wide
            text-2xl sm:text-3xl md:text-4xl
          "
        >Lets work together</h2>

        <Link
          to="/contact"
          className="inline-block text-primary hover:text-primary-hover sm:tracking-widest uppercase border-b-2 font-heading font-semibold text-lg"
        >
          Get in touch
        </Link>
      </div>
    </section>
  )
}

export default Work