import { useEffect, useState } from "react"
import listShopService from "../../services/ShopService"

const useGetShops = (shopId?: string) => {
    const [res, setRes] = useState()

    const params = {
        'ids': shopId,

    }

    useEffect(() => {
        listShopService.getShop(params).then(res => {
            setRes(res.data)
            console.log("list", res.data)
        }).catch(err => console.log('error: ', err.response.data))
    }, [])

    return res
}

export default useGetShops