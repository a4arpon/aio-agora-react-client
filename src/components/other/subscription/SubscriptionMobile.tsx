import { SubscriptionProp } from "@/@types/subscription.type"
import { subscription } from "@/data/subscription.data"
import { useState } from "react"
import SubscriptionCard from "./SubscriptionCard"

const SubscriptionMobile = () => {
  const [currentPkg, setCurrentPkg] = useState<SubscriptionProp>(
    subscription[0]
  )
  const updatePackage = (pkg: string) => {
    const pk = subscription.find(
      (item) => item?.package.toLowerCase() === pkg.toLowerCase()
    )
    if (pk) {
      setCurrentPkg(pk)
    }
  }
  return (
    <div>
      <div className="flex flex-nowrap gap-2 justify-center">
        <button
          type="button"
          className={`rounded-lg font-semibold px-2 py-1 ${
            currentPkg?.package?.toLowerCase() === "tickets"
              ? "customer-section-image-bg text-dark "
              : "text-light bg-light/10"
          }`}
          onClick={() => updatePackage("Tickets")}
        >
          Tickets
        </button>
        <button
          type="button"
          className={`rounded-lg font-semibold px-2 py-1 ${
            currentPkg?.package.toLowerCase() === "collectibles"
              ? "customer-section-image-bg text-dark "
              : "text-light bg-light/10"
          }`}
          onClick={() => updatePackage("Collectibles")}
        >
          Collectibles
        </button>
        <button
          type="button"
          className={`rounded-lg font-semibold px-2 py-1 ${
            currentPkg?.package.toLowerCase() === "sneakers"
              ? "customer-section-image-bg text-dark "
              : "text-light bg-light/10"
          }`}
          onClick={() => updatePackage("Sneakers")}
        >
          Sneakers
        </button>
        <button
          type="button"
          className={`rounded-lg font-semibold px-2 py-1 ${
            currentPkg?.package?.toLowerCase() === "everyone"
              ? "customer-section-image-bg text-dark "
              : "text-light bg-light/10"
          }`}
          onClick={() => updatePackage("EVERYONE")}
        >
          Multipass
        </button>
      </div>
      <div className=" mt-10">
        {subscription && <SubscriptionCard subscription={currentPkg} />}
      </div>
    </div>
  )
}

export default SubscriptionMobile
