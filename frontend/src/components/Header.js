import { Container, Nav, Navbar } from 'react-bootstrap';
import { FiShoppingCart, AiOutlineUser } from '../utils/icons';
import IconLink from './IconLink';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' expand='lg' variant='dark' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>DaShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <IconLink
                icon={<FiShoppingCart />}
                text='Cart'
                url='/cart'
              />
              <IconLink
                icon={<AiOutlineUser />}
                text='Sign In'
                url='/login'
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
