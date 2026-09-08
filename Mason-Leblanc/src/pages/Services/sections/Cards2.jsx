function Cards2({ pars }) {
  return (
    <section className="py-10">
      <div className="container space-y-25 md:space-y-30">

        {pars?.map((par) => (
          <div
            key={par.id}
            className={`
              flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16
              ${par.id % 2 === 0 ? "md:flex-row-reverse" : ""}
            `}
          >

            <div className="w-full md:w-1/2">
              <img
                src={par.img}
                alt={par.head}
                className="w-full aspect-square object-cover"
              />
            </div>

            <div
              className="w-full md:w-1/2 flex flex-col justify-center gap-5 md:px-4"
            >
              <h2
                className="
                  font-bold capitalize tracking-wide
                  text-2xl sm:text-3xl md:text-4xl
                "
              >
                {par.head}
              </h2>

              <p className="text-text-muted leading-relaxed max-w-xl">
                {par.p2}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

export default Cards2