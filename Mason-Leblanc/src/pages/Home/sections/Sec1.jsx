import { SquareArrowOutUpRight } from "lucide-react";
import img1 from "../../../assets/link-1.png";
import img2 from "../../../assets/link-2.png";
import img3 from "../../../assets/link-3.png";
import img4 from "../../../assets/link-4.png";

const cardsData = [
  { id: 1, title: "VIEW PORTFOLIO", image: img1, link: "#" },
  { id: 2, title: "BIOGRAPHY", image: img2, link: "#" },
  { id: 3, title: "SERVICES", image: img3, link: "#" },
  { id: 4, title: "CONTACT", image: img4, link: "#" },
];

function Sec1() {
  return (
    <section className="pt-10 pb-10 sm:pb-65">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`
                  relative overflow-hidden group w-full flex items-end justify-center
                  ${card.id % 2 ? "" : "sm:translate-y-1/2"}
                `}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-80 transition-transform duration-500 group-hover:scale-105 rounded-t-md"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-bg-main/20 to-transparent pointer-events-none" />

              <a
                href={card.link}
                className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 font-medium tracking-wider text-xs sm:text-sm uppercase whitespace-nowrap text-primary hover:text-text-muted"
              >
                <span>{card.title}</span>
                <SquareArrowOutUpRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sec1;