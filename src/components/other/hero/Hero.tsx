import svgLineVector from "@/assets/Vector-2-line-draw.png"
import svgBG from "@/assets/svg-v-1.png"
import { Link } from "@tanstack/react-router"
import { Mouse, ShoppingBag } from "lucide-react"
import Button from "../../shared/Button"
import HeaderCard from "./HeaderCard"

const Hero = () => {
  return (
    <section
      id="header"
      className="min-h-screen lg:h-[660px] relative"
      style={{ backgroundImage: `url(${svgBG})` }}
    >
      <div className="blur-3xl h-[267px] lg:w-[381px] rounded-full overflow-hidden left-[30%] top-[35%] absolute p-30">
        <div className="header-squire-bg h-full w-full " />
      </div>
      <div className="blur-3xl h-[267px] lg:w-[381px] rounded-full overflow-hidden right-5 top-[25%] absolute p-30 opacity-40">
        <div className="bg-gradient-to-r from-[#EFB1FF] to-[#ED50FF] h-full w-full " />
      </div>
      <div className="h-full w-full absolute top-0">
        <div className="container mt-10  h-full flex justify-between items-center flex-col lg:flex-row gap-16">
          <div className="flex justify-center flex-col items-center lg:items-start">
            <h3 className="font-semibold uppercase text-[15px] lg:text-base bg-gradient-to-r from-[#EFB1FF] to-[#ED50FF] bg-clip-text text-transparent mb-2">
              BIENVENUE SUR LA PETITE AGORA.
            </h3>
            <h2 className="text-4xl lg:text-5xl font-bold uppercase leading-[1.540]">
              Communauté <br /> francophone
            </h2>
            <img src={svgLineVector} alt="Svg line vector" className="mt-8 mb-10 w-full" />
            <p className="text-base font-medium">
              Lorem ipsum dolor sit amet consectetur. Orci amet velit urna{" "}
              <br />
              parturient massa. Praesent amet vitae suspendisse morbi ut
              dignissim diam.
            </p>
            <div className="mt-10 flex flex-col gap-5">
              <Button>
                <span>Nous rejoindre</span>
                <ShoppingBag />
              </Button>
              <div className="hidden lg:inline">
                <Link to="/" className="flex flex-row gap-2">
                  <Mouse />
                  <span>En savoir plus</span>
                </Link>
              </div>
            </div>
          </div>
          <HeaderCard />
        </div>
        
      </div>
     
    </section>
  )
}

export default Hero
