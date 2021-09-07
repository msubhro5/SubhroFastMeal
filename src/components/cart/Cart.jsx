import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { DeleteItem, DeleteAllItem } from "../../action/CartAction";

function Cart() {
    const dispatch = useDispatch();
    const myCartItem = useSelector((state) => { return state.CartReducer });
    const billAmount = myCartItem.reduce((a, b) => a + b.price,0);
    const [cartDisplay, setcartDisplay]=useState(true);
    useEffect(()=>{
        if(myCartItem.length === 0){
            setcartDisplay(true)
        }else{
            setcartDisplay(false)
        }

    },[myCartItem])

    return (
        <div className="Cart">
            <table>
                <thead>
                    <tr>
                        <th>Food Item</th>
                        <th></th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {myCartItem.map((cval, index) => {
                        return (
                            <tr key={index}>
                                <td>{cval.name}</td>
                                <td>
                                    <button
                                        className="btn_2"
                                        onClick={() => { dispatch(DeleteItem(index)) }}
                                    >
                                        Delete Item
                                    </button>
                                </td>
                                <td>{cval.price}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td></td>
                        <td>Total Amount</td>
                        <td>Rs. {billAmount}</td>
                    </tr>
                </tbody>
            </table>
            {/* <h1>{billAmount.reduce((a,b)=>{return a+b})}</h1> */}
            <button
                className="btn_3"
                onClick={() => { dispatch(DeleteAllItem()) }}
            >
                {cartDisplay ? "Your Cart Is Empty" : "Delete All Item"}
            </button>


        </div>
    )
}

export default Cart;