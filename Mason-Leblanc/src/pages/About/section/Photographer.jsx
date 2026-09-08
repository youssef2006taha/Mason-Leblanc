import img1 from "../../../assets/link-1.png"

function Photographer () {
  return (
    <section className="py-10">
      <div className="container">
        
        <h2
          className="
            text-text-main px-2 text-center mb-2 md:mb-10
            font-bold uppercase tracking-wide
            text-2xl sm:text-3xl md:text-4xl
          "
        >
          professional photographer for top-tier brands
        </h2>

        <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 mt-10`}>

          <div className="w-full md:w-1/2">
            <img
              src={img1}
              alt="photographer"
              className="w-full aspect-square object-cover"
            />
          </div>

          <div
            className="w-full md:w-1/2 flex flex-col justify-center gap-5 md:px-4"
          >
            <h3
              className="
                font-bold capitalize tracking-wide
                text-2xl sm:text-3xl md:text-4xl
              "
            >
              I'm Mason Leblanc
            </h3>

            <p className="text-text-muted leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <a
              href="#"
              className="mt-4 inline-block text-primary hover:text-primary-hover sm:tracking-widest uppercase border-b-2 font-heading font-semibold w-fit"
            >
              Download Cv
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Photographer