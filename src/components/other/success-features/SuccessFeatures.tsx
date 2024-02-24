import p1 from "@/assets/product-1.png"
import p2 from "@/assets/product-2.png"
import p3 from "@/assets/product-3.png"
import SuccessCard from "./SuccessCard"
import SuccessHeader from "./SuccessHeader"

const SuccessFeatures = () => {
  return (
    <section id="success-features" className="bg-[#13121C] py-20">
      <SuccessHeader />
      <div className="container grid lg:grid-cols-3 gap-5 mt-14">
        {productList?.map((item) => (
          <SuccessCard product={item} />
        ))}
      </div>
      <div className="container mt-14 text-center">
        <p className="text-2xl font-semibold">
          Nous sommes sur toutes les tendances - commence à faire des bénéfices
          en nous rejoignant aujourd'hui !
        </p>
      </div>
    </section>
  )
}

export default SuccessFeatures

const productList = [
  {
    name: "Collectibles",
    price: "20 000€",
    image: p1,
    priceType: "bénéfices",
  },
  {
    name: "Sneakers",
    price: "23 000€",
    image: p2,
    priceType: "bénéfices",
  },
  {
    name: "Pokemon",
    price: "21 500€",
    image: p3,
    priceType: "Profit",
  },
]
