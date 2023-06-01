
import Card from 'react-bootstrap/Card';

function ItemListContainer({cont = "", title = "Hola Mundo"}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {cont}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemListContainer;