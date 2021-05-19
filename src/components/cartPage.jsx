import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import CartButton from './cartButton';
import {updateSubCart, updateAddCart, removeCartItem, removeCartAll} from './actions/actions';
import './style/cartPage.css'



export default function CartPage(){
    
    const dispatch = useDispatch();

    const add = (menu) =>{
        dispatch(updateAddCart(menu));
    }

    const sub = (menu) =>{
        dispatch(updateSubCart(menu));
    }

    const removeItemFromCart = (cart) =>{
        dispatch(removeCartItem(cart));
    }

    const removeCart = () =>{
        dispatch(removeCartAll());
    }

    const cart = useSelector(state=>state.cart);

    const totalPrice =  cart.reduce((prev,cur)=>{return prev + cur.total},0);
     return(
        <table className = "table align">
 
         <thead className ="table-dark"> <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
                </tr></thead>
          <tbody>      
             {(cart.length === 0)?<tr><th className="box1" colSpan="5">THERE ARE NO PRODUCTS IN CART</th></tr>:
             cart.map((c, index) => <tr key = {index}>
               <td>{c.name}</td>
               <td><CartButton Menu={c} add={add} sub={sub}/></td>
               <td>Rs. {c.total}</td>
               <td><button style = {{width:"130px"}} className="btn btn-outline-danger" onClick={()=>removeItemFromCart(c)}>Remove</button></td>
             </tr>)}
             {(cart.length === 0)?null:
             <tr>
                <th>Total</th>
                <th></th>
                <th>Rs. {totalPrice}</th>
                <th><button style = {{width:"130px"}} className="btn btn-outline-danger" onClick={()=>removeCart()}>Remove All</button></th>
                </tr>}
         </tbody>
         </table>
        

     )

}