const cart = [];
   
    export default function cartReducer(state = cart, { type, payload }) {
               switch(type){
                    case 'ADD_CART' :              
                        return[{...payload, qty:1, total:payload.price},...state]

                    case 'UPDATE_ADD_CART' :
                        return(state.map(m=>m.name == payload.name?{...m, qty:m.qty+1, total:m.price*(m.qty+1)}:m))

                    case 'UPDATE_SUB_CART':
                        const i = state.findIndex(m => m.name === payload.name);
                        const qty = state[i].qty;
                        if (qty>1)
                        return (state.map(m=>m.name == payload.name?{...m,qty:m.qty-1, total:m.price*(m.qty-1)}:m))
                        else
                        return (state.filter(m=>m.name !== payload.name))

                        case 'REMOVE_CART_ITEM' :
                        return (state.filter(m=>m.name !== payload.name))
                    
                        case 'REMOVE_CART_ALL' :
                                return cart;
                   
                    default:  
                        return state;
               }  
     } ;
    