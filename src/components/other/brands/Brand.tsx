type BrandItem = {
  name: string
  logo: string
}

const Brand = ({ brand }: { brand: BrandItem }) => {
  return (
    <div className="bg-[#13121C]} p-6 flex items-center gap-4 rounded-[10px] group customer-section-image-bg-hover duration-300 ease-in-out transition-all">
      <div className="bg-[#dfdfdf] w-fit h-fit rounded-full p-2">
        <img src={brand?.logo} alt="" className="h-10 w-10" />
      </div>
      <p
        className="text-light
        font-bold text-2xl group-hover:text-dark"
      >
        {brand?.name}
      </p>
    </div>
  )
}

export default Brand
