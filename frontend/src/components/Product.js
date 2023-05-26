import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { _id, name, image, price, rating, numReviews } = product;
  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/product/${_id}`}>
        <Card.Img variant='top' src={image || ''} />
      </Link>
      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title as='div'>{name}</Card.Title>
        </Link>
        <div className='my-3 rating-container'>
          <Rating value={rating} color='text-warning' />
          <span>from {numReviews} reviews</span>
        </div>
        <Card.Text as='h3'>${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
