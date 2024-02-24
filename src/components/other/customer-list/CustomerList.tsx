import { className } from "@/utils/utils"

import graphCustomersPng from "@/assets/graph-customers.png"

const CustomerList = () => {
  return (
    <div className="grid justify-between items-center lg:grid-cols-5 bg-[#13121C] mb-20">
      <div className="lg:pl-28 px-4 lg:px-0 py-20 lg:col-span-3 text-center lg:text-start">
        <h3
          className={className(
            "bg-gradient-to-r from-[#EFB1FF] to-[#ED50FF] bg-clip-text text-transparent font-semibold uppercase mb-2"
          )}
        >
          Fait pour tout le monde
        </h3>
        <h2 className="font-semibold text-4xl">
          Offre sur mesure - Choisissez votre offre
        </h2>
        <div className="flex flex-row justify-center lg:justify-start gap-5 manrope-font mt-10">
          <div>
            <p className="font-bold">Catégories</p>
            <p className="text-4xl bg-[#47B6FF] bg-clip-text text-transparent font-medium">
              3
            </p>
          </div>
          <div className="w-[2px] h-20 bg-light/30" />
          <div>
            <p className="font-bold">Lecture des guides</p>
            <p
              className={className(
                "text-4xl bg-gradient-to-r from-[#EFB1FF] to-[#ED50FF] bg-clip-text text-transparent font-medium"
              )}
            >
              100h+
            </p>
          </div>
        </div>
      </div>
      <div className="customer-section-image-bg h-full p-4 lg:p-10 lg:pr-28 lg:col-span-2">
        <img src={graphCustomersPng} alt="" />
      </div>
    </div>
  )
}

export default CustomerList
