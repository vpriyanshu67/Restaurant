import React from "react";

export default function AddCartButton(props){
   const {addCart, Menu} = props;
    return (
       <button style = {{width:"130px"}} className="btn btn-outline-success" onClick = {()=>addCart(Menu)}>Add to Cart</button>
    );
}