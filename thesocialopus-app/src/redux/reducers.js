import {userTypes, authTypes, cartTypes} from './actions'
import { combineReducers } from 'redux'


const INITIAL_USER ={
    currentUser: null,
    role: null,
    id: null
}

const INITIAL_AUTH ={
    auth: false
}

const INITIAL_CART ={
    cart:[]
}

const userReducer = (state=INITIAL_USER, action) => {
    switch(action.type) {
        case userTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case userTypes.SET_USER_ROLE:
            return {
                ...state,
                role: action.payload
            }
        case userTypes.SET_USER_ID:
            return {
                ...state,
                id: action.payload
            }
        default: return state;
        }
    }

const authReducer = (state=INITIAL_AUTH, action) => {
switch(action.type) {
    case authTypes.LOGGED_IN:
    return {
        ...state,
        auth: true
    }
    case authTypes.LOGGED_OUT:
        return {
            ...state,
        auth: false
        }
    default: return state
    }
}

const cartReducer = (state=INITIAL_CART, action) => {
    switch(action.type) {
        case cartTypes.ADD_ITEM:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case cartTypes.REMOVE_ITEM:
            let newCart = state.cart.filter(item=> item.id !== action.payload.id)
            return {
                ...state,
                cart: newCart
            }
        default: return state
        }
    }

const allReducers = combineReducers({auth: authReducer, user: userReducer, cart: cartReducer})

export default allReducers;
