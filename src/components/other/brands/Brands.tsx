import Brand from "./Brand"
import Header from "./Header"

const Brands = () => {
  return (
    <section id="brands" className="container my-20">
      <Header />
      <div className="mt-32 lg:mt-24 grid lg:grid-cols-3 gap-5">
        <Brand />
      </div>
    </section>
  )
}

export default Brands
