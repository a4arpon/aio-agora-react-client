import svgLineVector from "@/assets/Vector-2-line-draw.png"
import svgBG from "@/assets/svg-v-1.png"
import { Link } from "@tanstack/react-router"
import { Mouse, ShoppingBag } from "lucide-react"
import Button from "../shared/Button"

const Header = () => {
  return (
    <section
      id="header"
      className="h-[600px] relative"
      style={{ backgroundImage: `url(${svgBG})` }}
    >
      <div className="blur-3xl h-[267px] w-[381px] rounded-full overflow-hidden left-[30%] top-[35%] absolute p-30">
        <div className="header-squire-bg h-full w-full " />
      </div>
      <div className="h-full w-full  absolute top-0">
        <div className="container mt-10 flex justify-center flex-col items-start h-full">
          <h3 className="font-semibold uppercase">
            BIENVENUE SUR LA PETITE AGORA.
          </h3>
          <h2 className="text-5xl font-bold uppercase leading-[1.512]">
            Communauté <br /> francophone
          </h2>
          <img src={svgLineVector} alt="" className="mt-4 mb-10" />
          <p className="text-base font-medium">
            Lorem ipsum dolor sit amet consectetur. Orci amet velit urna <br />
            parturient massa. Praesent amet vitae suspendisse morbi ut dignissim
            diam.
          </p>
          <div className="mt-10 flex flex-col gap-5">
            <Button>
              <span>Nous rejoindre</span>
              <ShoppingBag />
            </Button>
            <Link to="/" className="flex flex-row gap-2">
              <Mouse />
              <span>En savoir plus</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
