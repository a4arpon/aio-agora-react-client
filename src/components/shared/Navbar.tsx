import lpaImageLogo from "@/assets/LPA-solo_square-150x150 1.png"
import { Link } from "@tanstack/react-router"
import { AlignJustify, ShoppingBag } from "lucide-react"
import Button from "./Button"

const Navbar = () => {
  return (
    <header className="border-b border-light/20">
      <nav className="container flex justify-between py-[6px] manrope-font items-center">
        <div className="flex flex-row gap-3 items-center">
          <div className="h-[64px] w-auto overflow-hidden">
            <img
              src={lpaImageLogo}
              alt="LA PETITE AGORA Logo"
              className="object-cover h-[64px] w-auto"
            />
          </div>
          <h1 className="text-lg font-extrabold uppercase tracking-wider hidden lg:inline">
            LA PETITE AGORA
          </h1>
        </div>
        <div className="lg:flex hidden lg:flex-row gap-11">
          <div className="flex flex-col gap-2 relative">
            <Link to="/" className="text-light font-semibold text-base">
              Accueil
            </Link>
            <div className="h-[3px] w-full gradient-bg-1 absolute -bottom-7" />
          </div>
          <Link to="/" className="text-light/80 font-semibold text-base">
            Services
          </Link>
          <Link to="/" className="text-light/80 font-semibold text-base">
            Abonnements
          </Link>
          <Link to="/" className="text-light/80 font-semibold text-base">
            FAQ
          </Link>
        </div>
        <div className="hidden lg:inline">
          <Button>
            <span>Nous rejoindre</span>
            <ShoppingBag />
          </Button>
        </div>
        <div className=" lg:hidden">
          <AlignJustify />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
