import { useEffect, useState } from "react"

const qts = [
  {
    id: 1,
    question: "Impedit egestas aliquet?",
    answe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    id: 2,
    question: "Sapien class quo temporibus?",
    answe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    id: 3,
    question: "Elementum voluptate sodales?",
    answe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet consectetur adipiscing?",
    answe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    id: 5,
    question: "Sed do eiusmod tempor incididunt ut labore?",
    answe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    id: 6,
    question: "Duis aute irure dolor in reprehenderit in voluptate?",
    answe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
]

function Questions() {
  const [mainId , setMainId] = useState(0)
  const [subId , setSubId] = useState(0)

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const mainArray = isDesktop ? qts.slice(0, qts.length / 2) : qts

  const subArray = isDesktop ? qts.slice(qts.length / 2) : []

  const showQts = (arr, activeId, setActiveId) => {
    return (
      arr.map((qt) => (
        <div 
          key={qt.id}
          className="p-5 bg-bg-surface"
        >
          <div
            onClick={() => setActiveId(activeId !== qt.id ? qt.id : 0)}
            className="cursor-pointer flex justify-between items-center"
          >
            <p className="pr-5">{`${qt.id}.${qt.question}`}</p>

            <div className="relative w-5 h-5 flex items-center justify-center">
              <div className="w-full h-1 bg-primary"/>
              <div className={`absolute left-[50%] top-[50%] translate-[-50%] w-1 bg-primary transition-all duration-300 ${qt.id == activeId ? "h-0" : "h-full"}`}/>
            </div>
          </div>

          <div className={`overflow-hidden transition-all duration-300 ${qt.id == activeId ? "max-h-50 pt-5" : "max-h-0"}`}>
            <p className="text-sm">{qt.answe}</p>
          </div>
        </div>
      ))
    )
  } 

  return (
    <section className="py-10">
      <div className="container">

        <h2 className="font-heading text-4xl sm:text-5xl lg:text-4xl font-extrabold tracking-tight uppercase leading-tight">
          Frequently Asked Questions
        </h2>
        
        <div className='pt-10 flex flex-col lg:flex-row gap-5'>

          <div className="space-y-5">
            {showQts(mainArray, mainId, setMainId)}
          </div>

          <div className="space-y-5">
            {showQts(subArray, subId, setSubId)}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Questions

























