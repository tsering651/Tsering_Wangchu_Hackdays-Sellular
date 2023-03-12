import React, { useState } from "react";
import "../Styling/Product.css"

export default function Product(props) {
    const[count,setCount]=useState(0);
    const changeCount=()=>{
           setCount(count+1);
    }
  return (
    <div className="product">
      <div className="productInfo">
        <p>{props.title}</p>
        <p className="productPrice">
          <strong>Rs : { props.price}</strong>
        </p>
        <div className="productRating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p>*</p>
            ))}
        </div>
      </div>
      <img src={props.image} alt="productImg"/>
      <button >Add to basket</button>
    </div>
  );
}
