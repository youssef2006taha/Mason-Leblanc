
const awards = [
  {
    id: 1,
    head: "International Photography Award",
    para: "2016"
  },
  {
    id: 2,
    head: "Fashion Photography Award",
    para: "2019"
  },
  {
    id: 3,
    head: "Best Shot Award",
    para: "2022"
  },
  {
    id: 4,
    head: "Euro Lense Award",
    para: "2022"
  }
];

const featurs = [
  {
    id: 1,
    head: "Vogue Magazine",
    para: "2018"
  },
  {
    id: 2,
    head: "Aperture Magazine",
    para: "2020"
  },
  {
    id: 3,
    head: "PetaPixel Website",
    para: "2022"
  }
];

const education = [
  {
    id: 1,
    head: "Certified Professional Photographer",
    para: "New York Institute of Photography, New York"
  },
  {
    id: 2,
    head: "Masters of Fine Arts",
    para: "University of Washington, Seattle"
  },
  {
    id: 3,
    head: "Bachelor of Arts",
    para: "University of Washington, Seattle"
  }
];

function Stats() {
  return (
    <section className='py-10'>
      <div className='container bg-bg-secondary grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-7 !p-7 sm:!p-10 lg:!p-15'>

        {/* Awards */}
        <div className="space-y-10">
          <h3 className='font-bold capitalize tracking-wide text-2xl'>Awards</h3>
          <div className="space-y-4">
            {awards.map((award) => (
              <div
                key={award.id}
                className="space-y-2 lg:h-20 xl:h-auto"
              >
                <h4 className='font-bold capitalize tracking-wide'>{award.head}</h4>
                <p className='text-text-muted lg:text-sm xl:text-md'>{award.para}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured In */}
        <div className="space-y-10">
          <h3 className='font-bold capitalize tracking-wide text-2xl'>Featured In</h3>
          <div className="space-y-4">
            {featurs.map((featur) => (
              <div
                key={featur.id}
                className="space-y-2 lg:h-20 xl:h-auto"
              >
                <h4 className='font-bold capitalize tracking-wide'>{featur.head}</h4>
                <p className='text-text-muted lg:text-sm xl:text-md'>{featur.para}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-10">
          <h3 className='font-bold capitalize tracking-wide text-2xl'>Education</h3>
          <div className="space-y-4">
            {education.map((e) => (
              <div
                key={e.id}
                className="space-y-2 lg:h-20 xl:h-auto"
              >
                <h4 className='font-bold capitalize tracking-wide'>{e.head}</h4>
                <p className='text-text-muted lg:text-sm xl:text-md'>{e.para}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}

export default Stats