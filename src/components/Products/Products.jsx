//react
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

//Style
import "./Products.css"

//Componentes
import CardProduct from "../CardProduct/CardProduct";

const Products = ({products}) => {

  return (
      <div className="Cards-List">
      {products.map((product) => {
        return (
          <div style={{ margin: 10 }} key={product.id}>
            <Link to={`/reactproyect-coder/detail/${product.id}`}>
              <CardProduct product={product} />
            </Link>
          </div>
        )
      })}

    </div>
  ); 
};

export default Products;
