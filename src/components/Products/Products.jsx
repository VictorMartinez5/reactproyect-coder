//react
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

//Style
import "./Products.css"

//Componentes
import CardProduct from "../CardProduct/CardProduct";

const Prendas = () => {
  const [prenda, setPrenda] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setPrenda(json));
  }, []);



  return (
      <div className="Cards-List">
      {prenda.map((prenda) => {
        return (
          <div style={{ margin: 10 }} key={prenda.id}>
            <Link to={`/reactproyect-coder/detail/${prenda.id}`}>
              <CardProduct prenda={prenda} />
            </Link>
          </div>
        )
      })}

    </div>
  ); 
};

export default Prendas;
