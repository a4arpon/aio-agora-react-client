type BrandItem = {
  name: string
  logo: string
  isActive: boolean
}

const Brand = ({ brand }: { brand: BrandItem }) => {
  return (
    <div className={`${brand?.isActive ? 'customer-section-image-bg':'bg-[#13121C]'} p-6 flex items-center gap-4 rounded-lg`}>
      <div className="bg-[#dfdfdf] w-fit h-fit rounded-full p-2">
        <img src={brand?.logo} alt="" className="h-10 w-10" />
      </div>
      <p className={`${brand?.isActive ? 'text-dark':'text-light'} font-bold text-2xl`}>{brand?.name}</p>
    </div>
  )
}

export default Brand
