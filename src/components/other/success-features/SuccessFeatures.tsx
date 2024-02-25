import p1 from "@/assets/product-1.png"
import p2 from "@/assets/product-2.png"
import p3 from "@/assets/product-3.png"
import Button from "@/components/shared/Button"
import { ShoppingBag } from "lucide-react"
import Slider from "react-slick"
import SuccessCard from "./SuccessCard"
import SuccessHeader from "./SuccessHeader"

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  draggable: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        draggable: true,
      },
    },
  ],
  customPaging: () => (
    <div className="h-2 w-5 mr-1 bg-light/40 rounded-sm pager" />
  ),
}

const SuccessFeatures = () => {
  return (
    <section id="success-features" className="bg-[#13121C] py-20">
      <SuccessHeader />
      <div className="container slider-container mt-20">
        <Slider {...settings}>
          {productList?.map((item) => (
            <div key={item?.name} className="px-2 mb-3">
              <SuccessCard product={item} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="container mt-10 text-center">
        <div className="flex justify-center mb-5 lg:hidden">
          <Button className="lg:w-2/3 justify-around">
            <span>Nous rejoindre</span>
            <ShoppingBag />
          </Button>
        </div>
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
