import Icon from "./Icon"
import { useSelector } from "react-redux"
import { RootReducer } from "../state/rootReducer";

const Header = () => {

  const credits = useSelector((state: RootReducer) => state.creditsSlice.credits);

  return (
    <div className="sticky h-[80px] lg:mx-[100px] md:mx-[50px] mx-[20px] bg-transparent border-b-2 border-neutral-500 py-5 px-2 flex items-center justify-between">
      
      <div className="p-2">
        <Icon />
      </div>

      <div className="flex items-center gap-5">
        <h2 className="font-bold text-[18px] text-white/90">{credits} credits</h2>
        <div className="w-[60px] h-[60px] rounded-full bg-black hover:opacity-80">
        </div>
      </div>

    </div>
  )
}

export default Header
