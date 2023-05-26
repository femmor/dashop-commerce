// React router dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Container } from 'react-bootstrap';
import { Footer, Header } from './components';
import { HomeScreen, ProductScreen } from './screens';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <main className='py-3'>
          <Routes>
            <Route path='/*' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
          </Routes>
        </main>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
