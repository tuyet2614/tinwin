import { useEffect, useState } from "react"
import listShopService from "../../services/ShopService"

const useGetShops = (count: number) => {
    const [res, setRes] = useState()

    const params = {
        'Take': count
    }

    useEffect(() => {
        listShopService.getAll(params).then(res => {
            setRes(res.data)
            console.log(res)
        }).catch(err => console.log(err.response.data))
    }, [])

    return res
}

export default useGetShops