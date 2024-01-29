import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import dropDown_icon from "../Components/Assets/dropdown_icon.png";
import { ShopContext } from "../Context/ShopContext";
import Items from "../Components/Items/Items";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shopCategory">
      <img className="shopCategory-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1 - 12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropDown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map((item, i) => {
          console.log("jafbdsjfbdj",item,i)
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id} 
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadmore">
      Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
