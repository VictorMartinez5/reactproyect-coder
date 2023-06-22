import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardProduct.css"

const CardProduct = ({ product }) => {
  const { image, id, title, price } = product;
  return (
    <Card key={id} style={{ width: "18rem", height: "34rem" }}>
      <Card.Img style={{height: "20rem"}} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price} </Card.Text>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
