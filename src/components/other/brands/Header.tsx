const Header = () => {
  return (
    <div className="relative flex justify-center h-[100px]">
      <h3 className="font-semibold text-[40px] lg:text-8xl absolute z-[1] text-dark text-shadow-functionalities text-center">
        Lightning Monitors
      </h3>
      <h2 className="absolute top-7 lg:top-14 z-[2] text-4xl lg:text-[40px] font-semibold text-center">
        Vos{" "}
        <span className=" bg-gradient-to-r from-[#EFB1FF] to-[#ED50FF] bg-clip-text text-transparent">
          monitors favoris
        </span>{" "}
        - Executé à la <br /> vitesse de l'éclair !
      </h2>
    </div>
  )
}

export default Header
