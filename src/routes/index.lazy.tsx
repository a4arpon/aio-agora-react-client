import CustomerList from "@/components/other/customer-list/CustomerList"
import Functionalities from "@/components/other/functionalities/Functionalities"
import Hero from "@/components/other/hero/Hero"
import SuccessFeatures from "@/components/other/success-features/SuccessFeatures"
import { createLazyFileRoute } from "@tanstack/react-router"

const Index = () => {
  return (
    <>
      <Hero />
      <CustomerList />
      <Functionalities />
      <SuccessFeatures />
    </>
  )
}

export const Route = createLazyFileRoute("/")({
  component: Index,
})
