//React
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Sytles
import "./DetailPage.css"

//Components
import CardProduct from "../../components/CardProduct/CardProduct";

const DetailPage = () => {
  const [prenda, setPrenda] = useState({});

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setPrenda(json));
  }, [id]);

  return (
    <div className="DetailContainer">
      <div>{prenda.id ? <CardProduct prenda={prenda} /> : null}</div>
      <div>
        <p>{prenda.description}</p>
        <p>{`Categoria: ${prenda.category}`}</p>
      </div>
    </div>
  );
};

export default DetailPage;
