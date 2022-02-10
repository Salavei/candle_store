
export const fetchOrder = async (method) => {
    const res = await fetch (`/swagger?${method}`);
    const data = await res.json()
    return data
}


// export const fetchProduct = async () => {
//     const res = await fetch (`/swagger`);
//     const data = await res.json()
//     return data.product_get
// }
//
// export const fetchUser = async () => {
//     const res = await fetch (`/swagger`);
//     const data = await res.json()
//     return data.user
// }