import logo from "@/assets/LPA-solo_square-150x150 1.png"
import twitter from "@/assets/twitter.svg"
import whoops from "@/assets/whoops.svg"
import { Link } from "@tanstack/react-router"

const Footer = () => {
  return (
    <footer className="container grid lg:grid-cols-3 my-20 manrope-font">
      <div className="lg:col-span-2">
        <div className="flex gap-3 items-center font-semibold uppercase">
          <img src={logo} alt="" />
          <h2>LA PETITE AGORA</h2>
        </div>
        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="bg-[#191821] p-4 rounded-xl w-[196px]">
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
          <div className="bg-[#191821] p-4 rounded-xl w-[196px]">
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
      <div />
    </footer>
  )
}

export default Footer
