import { Container } from 'react-bootstrap';
import { Footer, Header } from './components';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <main className='py-3'>
          <h1>Welcome to DaShop</h1>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default App;
