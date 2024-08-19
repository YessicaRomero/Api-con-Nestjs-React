import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function CardsBandas({ banda, onEdit, onDelete}) {
  
return (
    <div>
    <Card  style={{ width: '18rem' }} className="card">
        <div id={banda.id}>
      <Card.Img variant="top"  src={banda.imagen} className="card-img-top" />
      <Card.Body>
        <Card.Title >{banda.nombre}</Card.Title>
       </Card.Body>
      <ListGroup className="list">
        <ListGroup.Item>{banda.genero}</ListGroup.Item>
        <ListGroup.Item>{banda.año_de_creacion}</ListGroup.Item>
       
      </ListGroup>
      <button type="button" className="btn btn-outline-primary" onClick={onEdit}>Editar</button>
      <button type="button" className="btn btn-danger" onClick={onDelete}>Eliminar</button>
     </div>
    
    </Card>
    </div>
  );
}

export default CardsBandas;