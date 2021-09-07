import React, { useState } from "react";
import MenuData from "./Data";
import { useDispatch } from "react-redux";
import {AddItem } from "../../action/CartAction";

function Menu() {
    const dispatch = useDispatch();
    const [displayMenuData, setdisplayMenuData] = useState(MenuData);
    const SelectedMenu = (selectedCategory) => {
        const MenuCategoryData = MenuData.filter((cval) => {
            return (
                selectedCategory === cval.category
            )
        })
        setdisplayMenuData(MenuCategoryData)
    }
    return (
        <div className="home_menu" id="order_now">
            <div className="menu_navbar">
                <button className="btn_4" onClick={() => { setdisplayMenuData(MenuData) }}>All Category</button>
                <button className="btn_4" onClick={() => { SelectedMenu("Breakfast") }}>Breakfast</button>
                <button className="btn_4" onClick={() => { SelectedMenu("Lunch") }}>Lunch</button>
                <button className="btn_4" onClick={() => { SelectedMenu("Dinner") }}>Dinner</button>
            </div>
            <div className="menu_items">
                {displayMenuData.map((cval, index) => {
                    return (
                        <div className="item_card" key={index}>
                            <img src={cval.image} alt={cval.name} />
                            <h2>{cval.name}</h2>
                            <p>{cval.description}</p>
                            <h3>Price Rs. <span style={{ color: "red" }}>{cval.price}</span></h3>
                            <button
                                className="btn_1"
                                onClick={()=>{dispatch(AddItem(cval))}}
                            >
                                Buy Now
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Menu;