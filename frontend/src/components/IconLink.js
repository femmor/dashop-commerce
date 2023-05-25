import { Nav } from 'react-bootstrap';

const IconLink = ({ icon, text, url }) => {
  return (
    <Nav.Link to={url} className='d-flex align-items-center gap-1'>
      {icon} {text}
    </Nav.Link>
  );
};

export default IconLink;
