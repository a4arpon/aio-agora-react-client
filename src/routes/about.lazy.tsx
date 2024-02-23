import { createLazyFileRoute } from "@tanstack/react-router"

const About = () => {
  return <div>About</div>
}

export const Route = createLazyFileRoute("/about")({
  component: About,
})
