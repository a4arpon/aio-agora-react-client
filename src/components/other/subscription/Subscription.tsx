import svgLines from "@/assets/svg-v-1.png"
import { subscription } from "@/data/subscription.data"
import SubscriptionCard from "./SubscriptionCard"
import SubscriptionMobile from "./SubscriptionMobile"

const Subscription = () => {
  return (
    <section id="subscription" className="bg-[#13121C] overflow-hidden">
      <div className="relative hidden lg:block">
        <img src={svgLines} alt="" className="absolute -top-20 -right-16" />
      </div>
      <div className="container py-10 pb-16">
        <p className="font-semibold uppercase lg:text-base bg-gradient-to-r from-[#EFB1FF] to-[#ED50FF] bg-clip-text text-transparent mb-4 lg:text-start text-center">
          Abonnements
        </p>
        <h3 className="text-center lg:text-start text-[38px] font-semibold">
          Choisissez l'abonnement qui vous correspond
        </h3>
        <div className="hidden lg:grid lg:grid-cols-4 gap-5 my-10">
          {subscription.map((item) => (
            <SubscriptionCard subscription={item} />
          ))}
        </div>
        <div className="my-10 lg:hidden">
          <SubscriptionMobile />
        </div>
        <p className="text-center">
          En souscrivant à La Petite Agora, vous acceptez nos termes et
          conditons de services
        </p>
      </div>
    </section>
  )
}

export default Subscription
