import { useState } from "react";
import { Link } from "react-router-dom";
import ShowImages from "./ShowImges";

import img1 from "../../assets/images/img (1).jpg";
import img2 from "../../assets/images/img (2).jpg";
import img3 from "../../assets/images/img (3).jpg";
import img4 from "../../assets/images/img (4).jpg";
import img5 from "../../assets/images/img (5).jpg";
import img6 from "../../assets/images/img (6).jpg";
import img7 from "../../assets/images/img (7).jpg";
import img8 from "../../assets/images/img (8).jpg";

import img9 from "../../assets/images/img (1).png";
import img10 from "../../assets/images/img (2).png";
import img11 from "../../assets/images/img (3).png";
import img12 from "../../assets/images/img (4).png";

const imgs = [
  { id: 1, img: img1, category: "BEAUTY" },
  { id: 2, img: img2, category: "FASHION" },
  { id: 3, img: img3, category: "MAKEUP" },
  { id: 4, img: img4, category: "MODEL" },
  { id: 5, img: img5, category: "FASHION" },
  { id: 6, img: img6, category: "BEAUTY" },
  { id: 7, img: img7, category: "MODEL" },
  { id: 8, img: img8, category: "MAKEUP" },
  { id: 9, img: img9, category: "BEAUTY" },
  { id: 10, img: img10, category: "FASHION" },
  { id: 11, img: img11, category: "MODEL" },
  { id: 12, img: img12, category: "MAKEUP" },
];

function PortfolioImgs({ page = "home" }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [ctg, setCtg] = useState("ALL");

  const categories = ["ALL"];
  imgs.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });

  const filteredImgs = ctg === "ALL"
      ? imgs
      : imgs.filter((item) => item.category === ctg);

  const shownImgs = filteredImgs.slice(
    0,
    page === "home" ? 8 : 20
  );

  return (
    <section className="py-10">
      <div className="container">

        {page === "home" && (
          <div className="flex justify-between mb-8">
            <h2 className="tracking-widest uppercase font-heading font-semibold text-l sm:text-2xl">
              Portfolio
            </h2>

            <Link
              to="/portfolio"
              className="inline-block text-primary hover:text-primary-hover sm:tracking-widest uppercase border-b-2 font-heading font-semibold text-sm sm:text-lg"
            >
              View Portfolio
            </Link>
          </div>
        )}

        {page === "portfolio" && (
          <div className="flex justify-center flex-wrap gap-3 sm:gap-6 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setCtg(category)}
                className={`
                  uppercase font-heading
                  sm:tracking-widest text-sm sm:text-md
                  transition-all duration-300 cursor-pointer
                  ${
                    ctg === category
                      ? "border-b-2 border-primary-active text-primary-active"
                      : "text-primary/50 hover:text-primary-hover"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {shownImgs.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className="group relative overflow-hidden cursor-pointer"
            >

              <img
                src={item.img}
                alt={item.category}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500 group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-bg-surface/40 opacity-0
                  group-hover:opacity-100 transition-opacity duration-300
                "
              />

              <div
                className="
                  absolute inset-0  opacity-0
                  flex items-center justify-center
                  group-hover:opacity-100 transition-opacity duration-300
                "
              >
                <span
                  className="text-primary uppercase tracking-[0.3em] text-sm font-heading"
                >
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
      
      {selectedIndex !== null && (
        <ShowImages
          index={selectedIndex}
          setIndex={setSelectedIndex}
          arr={shownImgs}
          onClose={() => setSelectedIndex(null)}
        />
      )}

    </section>
  );
}

export default PortfolioImgs;







/*
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
*/

/*
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);


  {shownImgs.map((item, index) => (
            <div
              key={item.id}
              onClick={() => {
                setIndex(index);
                setOpen(true);
              }}
              className="group relative overflow-hidden"
            >
*/

/*
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        
        plugins={[Counter]}

        slides={shownImgs.map((item) => ({
          src: item.img,
        }))}

        counter={{
          container: {
            style: {
              top: "20px",
              left: "20px",
              right: "unset",
              bottom: "unset",
            },
          },
        }}

        carousel={{
          imageFit: "contain",
          padding: "80px",
        }}

        styles={{
          container: {
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          },
        }}
      />
*/