import React from 'react';
import Nav from '../Nav';
 import { Container } from './styles';

const Layout: React.FC = ({children}) => {
  return (
    <Container className="noselect">
      <Nav />
      {children}
    </Container>
  );
}

export default Layout;