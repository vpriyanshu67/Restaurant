import React from 'react';
import Menulist from './menulist';
import Filter from './filter';
import './style/Main.css';

export default function MenuPage(){
    return(
        <div className="box">
        <div className="box1">
         <Filter/>
         </div>
        <div className = "box2">
         <Menulist/>
        </div>
     </div>
    )
}