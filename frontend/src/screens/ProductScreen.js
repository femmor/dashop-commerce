import { Link, useParams } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
} from 'react-bootstrap';
import { Loader, Rating } from '../components';
import { FiShoppingCart } from '../utils/icons';
import { useGetProductDetailsQuery } from '../slices/productApiSlice';

const ProductScreen = () => {
  const params = useParams();
  const { id } = params;

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(id);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error?.data?.message || error?.message}</div>
      ) : (
        <>
          <Row>
            <Col md={6}>
              <Image src={product?.image} alt={product?.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product?.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product?.rating}
                    color='text-warning'
                    text={`${product?.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  Price: ${product?.price}
                </ListGroup.Item>
                <ListGroup.Item>
                  Description: {product?.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product?.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product?.countInStock > 0 ? (
                          <span className='text-success'>
                            {product?.countInStock} items in stock
                          </span>
                        ) : (
                          <span className='text-danger'>
                            Out of Stock
                          </span>
                        )}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      className='btn w-100 d-flex align-items-center justify-content-center gap-1'
                      type='button'
                      disabled={product?.countInStock === 0}
                    >
                      <FiShoppingCart className='me-1' size={20} />
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
export default ProductScreen;
