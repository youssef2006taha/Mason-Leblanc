const statsItems = [
  {
    number: "45+",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
  },
  {
    number: "1,800+",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  },
  {
    number: "90%",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
  },
];

function Stats() {
  return (
    <section className="py-10">
      <div className="container space-y-15">

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight uppercase">
            My Experience In Numbers
          </h2>
          <p className="text-text-muted text-sm sm:text-base md:w-[50%] text-center md:text-start">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {statsItems.map((stat, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-primary text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-center md:text-start">
                {stat.number}
              </h3>
              <p className="text-text-muted text-sm text-center md:text-start">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;