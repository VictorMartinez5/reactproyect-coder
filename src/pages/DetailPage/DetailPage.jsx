//React
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Sytles
import "./DetailPage.css"

//Components
import CardProduct from "../../components/CardProduct/CardProduct";

const DetailPage = () => {
  const [product, setProducts] = useState({});

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [id]);

  return (
    <div className="DetailContainer">
      <div>{product.id ? <CardProduct product={product} /> : null}</div>
      <div>
        <p>{product.description}</p>
        <p>{`Categoria: ${product.category}`}</p>
      </div>
    </div>
  );
};

export default DetailPage;
