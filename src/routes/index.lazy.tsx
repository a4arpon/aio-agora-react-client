import Header from "@/components/other/Header"
import { createLazyFileRoute } from "@tanstack/react-router"

const Index = () => {
  return (
    <>
      <Header />
    </>
  )
}

export const Route = createLazyFileRoute("/")({
  component: Index,
})
