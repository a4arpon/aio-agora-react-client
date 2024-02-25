import underline from "@/assets/62db7c68e8fd177ad5e8fa95_hero-header-underline.svg.png"
import micromania from "@/assets/Micromania.svg"
import adidas from "@/assets/adidas-svgrep.svg"
import amazon from "@/assets/amazon.svg"
import fnce from "@/assets/fnce.svg"
import nike from "@/assets/nike.svg"
import trickmaster from "@/assets/trickmaster.svg"
import Brand from "./Brand"
import Header from "./Header"

const Brands = () => {
  return (
    <section id="brands" className="container my-20">
      <Header />
      <div className="mt-32 lg:mt-24 grid lg:grid-cols-3 gap-5 manrope-font">
        {brands?.map((item) => (
          <Brand brand={item} key={item?.name} />
        ))}
      </div>
      <div className="mt-11 flex justify-center flex-col items-center">
        <div className="flex gap-2">
          <p className="text-2xl">&</p>
          <p className="text-2xl">Et plus encore</p>
        </div>
        <div>
          <img src={underline} alt="Et plus encorew" />
        </div>
      </div>
    </section>
  )
}

export default Brands

const brands = [
  {
    name: "Nike",
    logo: nike,
    isActive: false,
  },
  {
    name: "Adidas",
    logo: adidas,
    isActive: false,
  },
  {
    name: "Amazon",
    logo: amazon,
    isActive: true,
  },
  {
    name: "Fnac",
    logo: fnce,
    isActive: false,
  },
  {
    name: "Micromania",
    logo: micromania,
    isActive: false,
  },
  {
    name: "Ticketmaster",
    logo: trickmaster,
    isActive: false,
  },
]
