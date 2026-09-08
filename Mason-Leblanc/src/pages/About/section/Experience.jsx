
const jobs = [
  {
    id: 1,
    head: "Fashion Week Magazine",
    role: "Director of Photography",
    startDate: "2017",
    endDate: "Present",
    script: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    id: 2,
    head: "Abstract Modeling Agency",
    role: "Senior Photographer",
    startDate: "2015",
    endDate: "2017",
    script: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident."
  },
  {
    id: 3,
    head: "Freelance Photographer",
    role: "Self-employed",
    startDate: "2011",
    endDate: "Present",
    script: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
  },
]

function Experience() {
  return (
    <section className="py-10">
      <div className="container grid lg:grid-cols-2 gap-10">

        <div className="space-y-4 text-center lg:text-start">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wider uppercase">
            Work Experience
          </h2>
          <p className="text-text-muted text-sm sm:text-base">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
          </p>
        </div>

        <div className="space-y-10">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="p-7 space-y-5 bg-bg-surface"
            >
              <h4 className="text-lg sm:text-xl font-semibold capitalize">{job.head}</h4>

              <div className="flex justify-between text-text-muted text-sm">
                <p>{job.role}</p>
                <p>{`${job.startDate}-${job.endDate}`}</p>
              </div>

              <hr className="text-primary"/>

              <p className="text-text-muted">{job.script}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience