
function Cards1({pars}) {
  return (
    <section className="py-10">
      <div className='container'>

        <div className="bg-bg-surface grid md:grid-cols-2 xl:grid-cols-4 gap-0.5 border border-2 border-bg-secondary">
          {pars && pars.map((par) => (
            <div className={`p-7 space-y-3 ${par.id % 2 ? "" : "bg-bg-main"}`}>
              <h2
                className='
                  font-bold capitalize tracking-wide
                  text-3xl
                '
              >
                {par.head}
              </h2>
              <p className='text-text-muted text-sm'>
                {par.p1}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Cards1