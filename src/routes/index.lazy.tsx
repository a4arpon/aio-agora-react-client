import CustomerList from "@/components/other/customer-list/CustomerList"
import Functionalities from "@/components/other/functionalities/Functionalities"
import Hero from "@/components/other/hero/Hero"
import { createLazyFileRoute } from "@tanstack/react-router"

const Index = () => {
  return (
    <>
      <Hero />
      <CustomerList />
      <Functionalities />
    </>
  )
}

export const Route = createLazyFileRoute("/")({
  component: Index,
})
