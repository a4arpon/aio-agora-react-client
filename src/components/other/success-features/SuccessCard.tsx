type Product = {
  name: string
  price: string
  image: string
  priceType: string
}

const SuccessCard = ({ product }: { product: Product }) => {
  return (
    <div className="manrope-font p-5 bg-[#1A1923] rounded-[10px]">
      <div className="rounded-[10px] overflow-hidden h-[120px] w-full">
        <img
          src={product?.image}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <h3 className="font-bold text-2xl my-5">{product?.name}</h3>
        <p className="font-bold">Total {product?.priceType}</p>
        <p className="text-4xl font-medium mt-1 bg-gradient-to-r from-[#EFB1FF] to-[#ED50FF] bg-clip-text text-transparent">{product?.price}</p>
      </div>
    </div>
  )
}

export default SuccessCard
