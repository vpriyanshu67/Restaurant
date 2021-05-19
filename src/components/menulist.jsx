import React , {useState}from 'react';
import './style/menulist.css'
import { useSelector, useDispatch } from 'react-redux';
import { addtoCart } from './actions/actions';
import CartButton from './cartButton';
import AddCartButton from './addCartButton';
import {updateAddCart, updateSubCart} from './actions/actions'



export default function Menulist(){ 

    const dispatch = useDispatch();
    let Menu = useSelector(state=>state.menu)
    //Menu = Menu.map(m=>({...m, seen:false}))

    let cart = useSelector(state=>state.cart);
   
    const selectedGenre = useSelector((state)=> state.genres.selectedGenre);

    const filtered = selectedGenre && selectedGenre.id?Menu.filter(m=>m.genre.id === selectedGenre.id):Menu;

    const addCart = (menu) =>{
        let Menu = {...menu, qty :1}
        dispatch(addtoCart(menu));
    }

    const add = (menu) =>{
        dispatch(updateAddCart(menu));
    }

    const sub = (menu) =>{
        dispatch(updateSubCart(menu));
    }

    return (
        <div className="column">
        {filtered.map((m,index) => <div key={index} className = "card-body">
         <p>{m.name}</p>  
        <p>{m.price}</p>
        <p>     
         {cart.findIndex(c => c.name === m.name) <= -1?<AddCartButton addCart={addCart} Menu={m}/>:<CartButton  add={add} Menu={m} sub={sub} />}
        </p>
        </div>)}                                                                                                  
        </div>
    )
    ;
}