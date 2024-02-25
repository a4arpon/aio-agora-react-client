import premiumbg from "@/assets/lastcard.bg.svg"
import Button from "@/components/shared/Button"
import { Check, ShoppingBag } from "lucide-react"

type SubscriptionProp = {
  package: string
  name: string
  points: string[]
  isFlagship: boolean
  price: string
}

const SubscriptionCard = ({
  subscription,
}: { subscription: SubscriptionProp }) => {
  if (subscription?.package === "EVERYONE") {
    return (
      <div
        className="bg-no-repeat bg-cover rounded-[10px]"
        style={{
          background: `url(${premiumbg})`,
        }}
      >
        <div className="flex flex-row h-full w-full backdrop-blur-lg bg-[#1a19236f] gap-2 rounded-[10px]">
          <div className="h-full w-2 bg-[#383B3F] rounded-[10px]" />
          <div className="pl-2 p-6">
            <h3 className="bg-gradient-to-r from-[#EFB1FF] to-[#ED50FF] bg-clip-text text-transparent font-semibold mb-1 ">
              {subscription?.package}
            </h3>
            <h2 className="text-2xl font-semibold mb-2">
              {subscription?.name}
            </h2>
            <div className="flex flex-col gap-1 mb-4 mt-3 lg:min-h-[300px]">
              {subscription?.points?.map((item) => (
                <div className="flex gap-2 items-start" key={item}>
                  <div className="bg-[#00B8B95E]/40 rounded-full p-[1px] mt-[3.5px]">
                    <Check size={14} className="text-[#00B8B9]" />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h3>
                <span className="text-[40px] font-semibold">
                  {subscription?.price}
                </span>
                <span className="text-light/60 text-sm">/month</span>
              </h3>
              <Button className="w-full justify-between">
                <span>Souscrire</span>
                <ShoppingBag />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-[#1A1923] rounded-[10px] p-6 backdrop-blur">
      <h3 className="bg-gradient-to-r from-[#EFB1FF] to-[#ED50FF] bg-clip-text text-transparent font-semibold mb-1 ">
        {subscription?.package}
      </h3>
      <h2 className="text-2xl font-semibold mb-2">{subscription?.name}</h2>
      <div className="flex flex-col gap-1 mb-4 mt-3 lg:min-h-[300px]">
        {subscription?.points?.map((item) => (
          <div className="flex gap-2 items-start" key={item}>
            <div className="bg-[#00B8B95E]/40 rounded-full p-[1px] mt-[3.5px]">
              <Check size={14} className="text-[#00B8B9]" />
            </div>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h3>
          <span className="text-[40px] font-semibold">
            {subscription?.price}
          </span>
          <span className="text-light/60 text-sm">/month</span>
        </h3>
        <Button className="w-full justify-between">
          <span>Souscrire</span>
          <ShoppingBag />
        </Button>
      </div>
    </div>
  )
}

export default SubscriptionCard
