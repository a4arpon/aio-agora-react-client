import { createLazyFileRoute } from "@tanstack/react-router"

const Contact = () => {
  return <div>Contact</div>
}

export const Route = createLazyFileRoute("/contact")({
  component: Contact,
})
