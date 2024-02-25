import bgportfolio from "@/assets/bg-portfolio.svg"

const Portfolio = () => {
  return (
    <section
      className="container mt-10 rounded-xl bg-no-repeat bg-cover lg:h-[404px]"
      id="portfolio"
      style={{
        backgroundImage: `url(${bgportfolio})`,
      }}
    >
      <div className="flex flex-col items-center justify-center h-full gap-14 py-20">
        <div className="text-center">
          <div className="relative">
            <p className="text-5xl lg:text-8xl font-semibold text-shadow-portfolio text-transparent absolute whitespace-nowrap -top-3 lg:-top-10 lg:-left-5 opacity-45 left-16">
              SINCE 2021
            </p>
            <h2 className="text-[40px] font-semibold">
              Deux ans : notre quotidien
            </h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-7 lg:gap-24">
          <div className="text-center">
            <h3 className="text-5xl lg:text-6xl font-bold">700</h3>
            <p>membres</p>
            <p>depuis 2021</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl lg:text-6xl font-bold">500 000€</h3>
            <p>de benefices</p>
            <p>Réalisé par tous les membres</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl lg:text-6xl font-bold">60+</h3>
            <p>témoignages</p>
            <p>Note globale : 4,9</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
