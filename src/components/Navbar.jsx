import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
    const myCartItem = useSelector((state) => { return state.CartReducer });
    const cartItem = myCartItem.length;
    const [displayItem,setdisplayItem]=useState(true);
    useEffect(()=>{
        if(cartItem ===0){
            setdisplayItem(true)
        }else{
            setdisplayItem(false)
        }
    },[cartItem])
    return (
        <div className="Navbar">
            <NavLink to="/">Subhro Fast Meal</NavLink>
            <NavLink to="/cart"> &#128722; My Cart
                {displayItem ? <sup></sup> : <sup> {cartItem}</sup>}
            </NavLink>
        </div>
    )
}

export default Navbar;