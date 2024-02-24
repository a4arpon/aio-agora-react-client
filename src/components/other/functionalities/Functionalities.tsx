import { Headset, Network, PercentDiamond } from "lucide-react"
import Header from "./Header"

const Functionalities = () => {
  return (
    <section id="functionalities" className="container mb-40">
      <Header />
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="rounded-xl h-[170px] bg-gradient-to-tr to-transparent p-4 from-[#5d3867] flex flex-col items-start justify-center gap-4">
          <div className="bg-[#EFB1FF] rounded-2xl text-dark p-2 border border-light">
            <PercentDiamond size={40} />
          </div>
          <h4 className="text-[26px] font-semibold">Alertes Erreur de prix</h4>
        </div>
        <div className="rounded-xl h-[170px] bg-gradient-to-bl to-transparent p-4 from-[#5d3867] flex flex-col items-start justify-center gap-4">
          <div className="bg-light/10 rounded-2xl text-light p-2 border border-light">
            <Network size={40} />
          </div>
          <h4 className="text-[26px] font-semibold">Communauté soudée</h4>
        </div>
        <div className="rounded-xl h-[170px] bg-gradient-to-tr to-transparent p-4 from-[#5d3867] flex flex-col items-start justify-center gap-4">
          <div className="bg-[#EFB1FF] rounded-2xl text-dark p-2 border border-light">
            <Headset size={40} />
          </div>
          <h4 className="text-[26px] font-semibold">Support 24/7</h4>
        </div>
      </div>
    </section>
  )
}

export default Functionalities
