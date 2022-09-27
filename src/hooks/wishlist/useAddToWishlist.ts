import { useDispatch } from "react-redux"
import { addToWishlist } from "../../redux/wishlist/actions"

const useAddToWishlist = () => {
    const dispatchRedux = useDispatch()
    const dispatchAddToWishlist = (data: object) => {
        dispatchRedux(addToWishlist(data))
    }

    return dispatchAddToWishlist
}

export default useAddToWishlist