import Brands from "@/components/other/brands/Brands"
import CustomerList from "@/components/other/customer-list/CustomerList"
import Functionalities from "@/components/other/functionalities/Functionalities"
import Hero from "@/components/other/hero/Hero"
import Subscription from "@/components/other/subscription/Subscription"
import SuccessFeatures from "@/components/other/success-features/SuccessFeatures"
import { createLazyFileRoute } from "@tanstack/react-router"

const Index = () => {
  return (
    <>
      <Hero />
      <CustomerList />
      <Functionalities />
      <SuccessFeatures />
      <Brands />
      <Subscription />
    </>
  )
}

export const Route = createLazyFileRoute("/")({
  component: Index,
})
