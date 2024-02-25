import imageLogo from "@/assets/LPA-solo_square-150x150 1.png"
import { Link } from "@tanstack/react-router"
import { Megaphone, Mouse } from "lucide-react"
import Button from "../../shared/Button"

const HeaderCard = () => {
  return (
    <div className="w-full lg:w-fit h-full p-3 flex flex-col gap-5 items-center lg:pt-16">
      <div className="h-[351px] lg:h-[500px] w-full lg:w-[488px] bg-[#1f1e28] rounded-[10px] p-5 flex justify-between items-start relative">
        <img src={imageLogo} alt="la petite agora logo" />
        <div className="absolute -right-4 -top-4 -rotate-3">
          <Button>
            <Megaphone size={32} />
          </Button>
        </div>
      </div>
      <div className="inline lg:hidden">
        <Link to="/" className="flex flex-row gap-2">
          <Mouse />
          <span>En savoir plus</span>
        </Link>
      </div>
    </div>
  )
}

export default HeaderCard
