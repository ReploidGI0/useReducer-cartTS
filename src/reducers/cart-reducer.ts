import { db } from "../data/db"
import { CartItem, Kit } from "../types"

export type CartActions =
    { type: 'add-to-cart', payload : {item: Kit} } |
    { type: 'remove-from-cart', payload : {item: Kit['id']} } |
    { type: 'decrease-quantity', payload : {item: Kit['id']} } |
    { type: 'increase-quantity', payload : {item: Kit['id']} } |
    { type: 'clear-cart'}

export type CartState = {
    data: Kit[]
    cart: CartItem[]
}

export const initialState : CartState = {
    data: db,
    cart: []
}

export const cartReducer = (state: CartState = initialState, action: CartActions) => {
    if(action.type === "add-to-cart"){
        return{
            ...state
        }
    }

    if(action.type === 'remove-from-cart'){
        return{
            ...state
        }
    }

    if(action.type === 'decrease-quantity'){
        return{
            ...state
        }
    }

    if(action.type === 'increase-quantity'){
        return{
            ...state
        }
    }

    if(action.type === 'clear-cart'){
        return{
            ...state
        }
    }
}