import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    console.log(cartItems);
    

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-image" src={url+"/images/"+image} alt="" />
                {cartItems && cartItems[id] !== undefined ? (
                    <div className="food-item-counter">
                      <button className="fooditem-button" onClick={() => removeFromCart(id)} disabled={cartItems[id]==0}>
                        <img  src={assets.remove_icon_red}  alt="" />

                      </button>
                        <p>{cartItems[id]}</p>
                        <button className="fooditem-button" onClick={() => addToCart(id)} >
                        <img  src={assets.add_icon_green} alt="" />

                        </button>
                    </div>
                ) : (

                    <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                )}
            </div>

            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>

                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">Rs. {price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
