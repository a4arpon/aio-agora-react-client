import CustomerList from "@/components/other/customer-list/CustomerList"
import Hero from "@/components/other/hero/Hero"
import { createLazyFileRoute } from "@tanstack/react-router"

const Index = () => {
  return (
    <>
      <Hero />
      <CustomerList />
    </>
  )
}

export const Route = createLazyFileRoute("/")({
  component: Index,
})
