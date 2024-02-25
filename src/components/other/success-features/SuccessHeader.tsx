import arrowCircleVector from "@/assets/arrow-circle-vector.png"
import Button from "@/components/shared/Button"
import { Quote, ShoppingBag } from "lucide-react"

const SuccessHeader = () => {
  return (
    <div className="overflow-hidden">
      <div className="container flex flex-col lg:flex-row gap-5 lg:justify-between justify-center text-center lg:text-start">
        <div className="pr-4">
          <h3 className="font-semibold uppercase text-[15px] lg:text-base bg-gradient-to-r from-[#EFB1FF] to-[#ED50FF] bg-clip-text text-transparent mb-2">
            Ne ratez plus aucune sortie !
          </h3>
          <h2 className="text-4xl lg:text-[40px] font-semibold mb-4">
            Les succès de notre communauté parlent d'eux même.
          </h2>
          <p className="font-medium text-base text-light/65 mb-4">
            Notre communauté exclusive opère discrètement, gardant une grande
            partie de ses activités derrière des portes closes. Découvrez un
            aperçu des succès remarquables de nos membres.
          </p>
          <div className="flex gap-1 justify-center lg:justify-start">
            <Quote className="rotate-180 text-[#EFB1FF]" />
            <p className="font-semibold text-[18px]">
              Le seul groupe dont tu as besoin
            </p>
            <Quote className="text-[#EFB1FF]" />
          </div>
        </div>
        <div className="relative lg:w-[40%] hidden lg:inline">
          <h3 className="font-semibold text-5xl text-[#13121C] text-shadow-functionalities absolute lg:text-8xl">
            SUCCESS
          </h3>
          <img src={arrowCircleVector} alt="arrow circle vector" className="relative object-cover w-fit top-[70px]"/>
          <div className="absolute bottom-5 w-full bg-transparent flex items-end lg:justify-center">
            <Button className="lg:w-2/3 justify-around">
              <span>Nous rejoindre</span>
              <ShoppingBag />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessHeader
