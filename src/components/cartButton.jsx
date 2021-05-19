import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style/cartButton.css'


export default function CartButton(props){
const {Menu, add, sub}=props;

  let cart = useSelector(state=>state.cart);

    const calcQty = (Menu) =>{
    const i = cart.findIndex(c=>c.name==Menu.name)
    const qty = cart[i].qty;
    return qty;
   
}
   
    return(
        <React.Fragment>
            <button  className = "btn btn-outline-success dimension" onClick={()=>add(Menu)}>+</button>
            <span className = "qty btn  bg-transparent ">{calcQty(Menu)}</span>
            <button className = "btn btn-outline-success dimension" onClick={()=>sub(Menu)} >-</button>
         </React.Fragment>
    )
    ;
}