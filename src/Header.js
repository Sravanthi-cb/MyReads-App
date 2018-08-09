
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import React from 'react';

class Header extends React.Component {
    render() {
      return (
        <div>
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div>
            {/* Shelf Detail Pages */}
            <Navbar>
              <Nav>
                <NavItem eventKey={1} href="/">Currently Reading</NavItem>
                <NavItem eventKey={2} href="/WantToRead">Want To Read</NavItem>
                <NavItem eventKey={3} href="/Read">Read</NavItem>
                <NavItem eventKey={4} href="/Search">Search</NavItem>
              </Nav>
            </Navbar>
          </div>
        </div>
      )
    };
  }

  export default Header
  