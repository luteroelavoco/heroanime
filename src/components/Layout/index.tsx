import React from 'react';
import Footer from '../Footer';
import Nav from '../Nav';
 import { Container } from './styles';

const Layout: React.FC = ({children}) => {
  return (
    <Container className="noselect">
      <Nav />
      {children}
      <Footer />
    </Container>
  );
}

export default Layout;