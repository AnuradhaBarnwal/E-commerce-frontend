import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import dropDown_icon from '../Components/Assets/dropdown_icon.png'
import { shopContext } from "../Context/ShopContext";
import Items from "../Components/Items/Items";

const ShopCategory = (props) => {
  const { all_product } = useContext(shopContext);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1 - 12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
        Sort by <img src={dropDown_icon} alt=""/>
        </div>
      </div>
      <div className="shopCategory-product">
      {all_product.map((item, i) => {
        if(props.category === item.category){
          return <Items key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }else{
          return null
        }
      })}
      </div>
    </div>
  );
};

export default ShopCategory;
