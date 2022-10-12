export const SortProductAsc = (data: object[], field: string) => {
    console.log('data: ', data)
    data.sort(function (a: any, b: any): number {
        return a[field] - b[field]
    })
    return data
}
export const SortProductDesc = (data: object[], field: string) => {
    console.log('data: ', data)
    data.sort(function (a: any, b: any): number {
        return b[field] - a[field]
    })
    return data
}

export const sortNewProduct = (data: object[]) => {
    console.log('data: ', data)
    return data.filter(item => item.retailerTotalQuantity > 0)
    // return data
}