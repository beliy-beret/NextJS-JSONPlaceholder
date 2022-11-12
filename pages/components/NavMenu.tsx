import Link from "next/link";
import { FC } from "react";
import { Navbar, Container } from "react-bootstrap";

const NavMenu: FC = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Link href='/'>Home</Link>
          <Link href='/users'>Users</Link>
          <Link href='/posts'>Posts</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
