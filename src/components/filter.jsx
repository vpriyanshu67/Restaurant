import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {selectedGenre} from "./actions/actions";
import './style/filter.css'
export default function Filter(){
    let cart = useSelector(state=>state.cart);
    console.log("cart :", cart);
    let genres = useSelector((state) => state.genres.Allgenres);
    genres = [{id: "", name: "All" }, ...genres];

    let selectedGenres = useSelector((state)=> state.genres.selectedGenre);
 
    console.log("selectedGenres :", selectedGenres);
    const dispatch = useDispatch();
    
    const handleSelect = (genre) =>{
            dispatch(selectedGenre(genre));
    }
    
 return(    
    <ul className="list-group">       
    {genres.map((genre,index) =>(
        <li key ={index}
        className={genre.name == selectedGenres.name?"list-group-item active" : "list-group-item  bg-transparent"}
        onClick = {()=>handleSelect(genre)}
        >{genre.name}</li>
    ))} 
   </ul>
 );
}