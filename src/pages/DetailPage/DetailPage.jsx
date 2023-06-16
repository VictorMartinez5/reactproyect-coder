//React
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {prenda.id ? <CardProduct prenda={prenda} /> : null}
      <p>{prenda.description}</p>
    </div>
  );
};

export default DetailPage;