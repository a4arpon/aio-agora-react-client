import svgLines from "@/assets/svg-v-1.png"
import { subscription } from "@/data/subscription.data"
import SubscriptionCard from "./SubscriptionCard"

const Subscription = () => {
  return (
    <section
      id="subscription"
      className="bg-[#13121C] overflow-hidden"
    >
      <div className="relative ">
        <img src={svgLines} alt="" className="absolute -top-20 -right-16" />
      </div>
      <div className="container py-10">
        <p className="font-semibold uppercase lg:text-base bg-gradient-to-r from-[#EFB1FF] to-[#ED50FF] bg-clip-text text-transparent mb-4">
          Abonnements
        </p>
        <h3 className="lg:text-[40px] font-semibold">
          Choisissez l'abonnement qui vous correspond
        </h3>
        <div className="mt-10 grid lg:grid-cols-4 gap-5 mb-10">
          {subscription.map((item) => (
            <SubscriptionCard subscription={item} />
          ))}
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
