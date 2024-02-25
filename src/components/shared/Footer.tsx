import logo from "@/assets/LPA-solo_square-150x150 1.png"
import twitter from "@/assets/twitter.svg"
import whoops from "@/assets/whoops.svg"
import { Link } from "@tanstack/react-router"
import { ShoppingBag } from "lucide-react"
import Button from "./Button"

const Footer = () => {
  return (
    <footer className="container grid lg:grid-cols-3 my-20 manrope-font items-start">
      <div className="lg:col-span-2">
        <div className="flex gap-3 items-center font-semibold uppercase">
          <img src={logo} alt="" />
          <h2>LA PETITE AGORA</h2>
        </div>
        <div className="grid grid-cols-2 lg:flex lg:flex-row gap-2">
          <div className="bg-[#191821] p-4 rounded-xl lg:w-[196px]">
            <div className="bg-light/25 p-1 rounded-full mb-2 w-fit">
              <img src={twitter} alt="" className="h-5 w-5" />
            </div>
            <p className="text-lg font-bold">Twitter (X)</p>
            <p className="font-semibold text-sm">
              Follow{" "}
              <Link to="/" target="_blank" className="text-[#EFB1FF]">
                X &gt;
              </Link>
            </p>
          </div>
          <div className="bg-[#191821] p-4 rounded-xl lg:w-[196px]">
            <img src={whoops} alt="" className="h-10 w-10" />
            <p className="text-lg font-bold">Whop</p>
            <p className="font-semibold text-sm">
              Visit{" "}
              <Link to="/" target="_blank" className="text-[#EFB1FF]">
                Whop &gt;
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:border-l border-light/35 lg:pl-5 pt-6">
        <div className="grid grid-cols-2 gap-2 justify-between">
          <div className="col-span-2">
            <p className="mb-2 text-lg font-bold">Menu</p>
          </div>
          <div className="flex flex-col gap-1">
            <Link to="/" className="font-semibold text-light/60">
              Accueil
            </Link>
            <Link to="/" className="font-semibold text-light/60">
              Services
            </Link>
            <Link to="/" className="font-semibold text-light/60">
              Abonnements
            </Link>
            <Link to="/" className="font-semibold text-light/60">
              FAQ
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <Link to="/" className="font-semibold text-light/60">
              Conditions de service
            </Link>
            <Link to="/" className="font-semibold text-light/60">
              Politique de confidentialité
            </Link>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button>
            <span>Nous rejoindre</span>
            <ShoppingBag />
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
