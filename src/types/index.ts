export type Kit = {
    id : number
    name : string
    image : string
    description : string
    price : number
}

export type CartItem = Kit & {
    quantity : number
}