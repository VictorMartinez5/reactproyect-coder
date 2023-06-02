
import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/prop-types
function ItemListContainer({cont = "", title = "Hola Mundo"}) {
  return (
    <Card style={{zIndex:'-10', width: '18rem' }}>
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