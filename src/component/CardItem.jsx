
import { CiShoppingCart } from "react-icons/ci";
const CardItem = () => {
  return (
    <div className="relative">
    <CiShoppingCart className="text-2xl" />
    <span className="bg-red-500 text-white flex w-5 h-5 justify-center items-center rounded-full absolute -top-2 -right-4 text-sm">0</span>
  </div>
  )
}

export default CardItem