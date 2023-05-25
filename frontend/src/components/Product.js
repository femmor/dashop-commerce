import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { _id, name, image, price, rating, numReviews } = product;
  return (
    <Card style={{ width: '18rem' }}>
      <a href={`/product/${_id}`}>
        <Card.Img variant='top' src={image || ''} />
      </a>
      <Card.Body>
        <a href={`/product/${_id}`}>
          <Card.Title as='div'>{name}</Card.Title>
        </a>
        <div className='my-3'>
          {rating} from {numReviews} reviews
        </div>
        <Card.Text as='h3'>${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
