import { Container } from 'react-bootstrap';
import { Footer, Header } from './components';
import { HomeScreen } from './screens';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <main className='py-3'>
          <HomeScreen />
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default App;
