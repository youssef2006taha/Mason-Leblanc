import heroImg from "../../../assets/hero3.png";

function Hero() {
  return (
    <section
      className="
        relative overflow-hidden
        h-[50vh] md:h-[80vh]
        flex items-end justify-center
      "
    >
      <img
        src={heroImg}
        className="
          w-full md:scale-80 lg:scale-70 xl:scale-60
          absolute z-2 top-1/2 left-1/2 -translate-1/2"
      />

      <div className="
        absolute inset-0 z-3 flex justify-center items-end
        bg-[radial-gradient(circle,transparent_1%,var(--color-bg-main)_60%),linear-gradient(to_bottom,var(--color-bg-main),transparent,var(--color-bg-main))]
        "
      >
        <h1
          className="
            text-text-main px-2 text-center mb-2 md:mb-10
            font-bold uppercase tracking-wide
            text-2xl sm:text-3xl md:text-4xl
          "
        >
          The Fashion Industry
          <br />
          Through a Lense
        </h1>
      </div>
    </section>
  );
}

export default Hero;