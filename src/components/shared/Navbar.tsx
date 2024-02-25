import lpaImageLogo from "@/assets/LPA-solo_square-150x150 1.png"
import { Link } from "@tanstack/react-router"
import { AlignJustify, ShoppingBag, X } from "lucide-react"
import { useState } from "react"
import Button from "./Button"

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
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
        <button
          type="button"
          onClick={() => setIsNavOpen(true)}
          className=" lg:hidden"
        >
          <AlignJustify />
        </button>
      </nav>
      {isNavOpen && (
        <div className="fixed p-3 top-0 h-full bg-dark w-full z-20">
          <div className="flex gap-3 justify-between items-center">
            <h2 className="text-xl font-bold">LA PETITE AGORA</h2>
            <div className="">
              <button
                type="button"
                className="text-light bg-light/20 rounded-full p-2 focus:scale-95 ease-in-out duration-200 transition-all"
                onClick={() => setIsNavOpen(false)}
              >
                <X />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-10">
            <div className="flex flex-col gap-2 relative">
              <Link
                to="/"
                onClick={() => setIsNavOpen(false)}
                className="text-light font-semibold text-base"
              >
                Accueil
              </Link>
              <div className="h-[1px] w-full gradient-bg-1" />
            </div>
            <Link
              to="/"
              onClick={() => setIsNavOpen(false)}
              className="text-light/80 font-semibold text-base"
            >
              Services
            </Link>
            <Link
              to="/"
              onClick={() => setIsNavOpen(false)}
              className="text-light/80 font-semibold text-base"
            >
              Abonnements
            </Link>
            <Link
              to="/"
              onClick={() => setIsNavOpen(false)}
              className="text-light/80 font-semibold text-base"
            >
              FAQ
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
