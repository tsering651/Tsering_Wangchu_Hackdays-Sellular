import React from "react";
import Header from "./Header";
import "../Styling/Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <img
          src="./retrosupply-jLwVAUtLOAQ-unsplash.jpg"
          alt="image"
          className="homeImage"
        />
        <div className="homeRow">
          <Product
            id="1216"
            title="Nike Shoes:Light Weight sports shoe"
            price={3600}
            rating={4}
            image="https://5.imimg.com/data5/SELLER/Default/2021/12/IQ/PI/OZ/24989634/nike-joy-ride-1-sports-shoes-1000x1000.jpg"
            
          />
          <Product
            id="1216"
            title="Nike Shoes:Light Weight sports shoe"
            price={3600}
            rating={4}
            image="https://5.imimg.com/data5/SELLER/Default/2021/12/IQ/PI/OZ/24989634/nike-joy-ride-1-sports-shoes-1000x1000.jpg"
            
          />
          <Product
            id="1216"
            title="Nike Shoes:Light Weight sports shoe"
            price={3600}
            rating={4}
            image="https://5.imimg.com/data5/SELLER/Default/2021/12/IQ/PI/OZ/24989634/nike-joy-ride-1-sports-shoes-1000x1000.jpg"
           
          />
        </div>

        <div className="homeRow">
          <Product
            id="1216"
            title="Nike Shoes:Light Weight sports shoe"
            price={3600}
            rating={4}
            image="https://5.imimg.com/data5/SELLER/Default/2021/12/IQ/PI/OZ/24989634/nike-joy-ride-1-sports-shoes-1000x1000.jpg"
          />
          <Product
            id="1216"
            title="Nike Shoes:Light Weight sports shoe"
            price={3600}
            rating={4}
            image="https://5.imimg.com/data5/SELLER/Default/2021/12/IQ/PI/OZ/24989634/nike-joy-ride-1-sports-shoes-1000x1000.jpg"
          />
          <Product
            id="1216"
            title="Nike Shoes:Light Weight sports shoe"
            price={3600}
            rating={4}
            image="https://5.imimg.com/data5/SELLER/Default/2021/12/IQ/PI/OZ/24989634/nike-joy-ride-1-sports-shoes-1000x1000.jpg"
          />
        </div>
      </div>
    </div>
  );
}
