import { Row, Col } from 'react-bootstrap';
import { Loader, Message, Product } from '../components';
import { useGetProductsQuery } from '../slices/productApiSlice';

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <div className='home'>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error?.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {Array.isArray(products) &&
              products?.map((product) => (
                <Col
                  key={product._id}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  className='my-3'
                >
                  <Product product={product} />
                </Col>
              ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
