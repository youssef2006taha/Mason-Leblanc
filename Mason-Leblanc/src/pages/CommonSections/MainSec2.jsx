function MainSec2({ para , head , img }) {
  return (
    <section className='py-10'>
      <div className='container space-y-10'>
        
        <div className='flex flex-col md:flex-row md:justify-between gap-5'>
          <h2
            className='
              font-bold uppercase tracking-wide
              text-2xl sm:text-3xl md:text-4xl
            '
          >{head}</h2>
        
          <p className='md:w-[50%] text-text-muted'>{para}</p>
        </div>

        <img src={img} alt="" />
      </div>
    </section>
  )
}

export default MainSec2