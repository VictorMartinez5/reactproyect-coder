import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardProduct = ({ prenda }) => {
  const { image, id, title, price } = prenda;
  return (
    <Card key={id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price} </Card.Text>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
