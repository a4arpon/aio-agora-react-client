import imageLogo from "@/assets/LPA-solo_square-150x150 1.png"
import { Megaphone } from "lucide-react"
import Button from "../shared/Button"

const HeaderCard = () => {
  return (
    <div className="w-full lg:w-fit h-full p-3">
      <div className="h-[351px] lg:h-[500px] w-full lg:w-[488px] bg-[#1f1e28] rounded-lg p-5 flex justify-between items-start relative">
        <img src={imageLogo} alt="la petite agora logo" />
        <div className="absolute -right-4 -top-4 -rotate-3">
          <Button>
            <Megaphone size={32}/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeaderCard
