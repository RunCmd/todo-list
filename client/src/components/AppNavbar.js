import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component{
  state = {
      isOpen : false
  }
  toggle = () => {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }

  render(){
      return(
        <div>
          <Navbar color="dark" dark expand="sm" className="md-5">
            <Container>
              <NavbarBrand href="/">To do...</NavbarBrand>
              <NavbarToggler onClick={this.toggle}/>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto">
                  <NavItem>
                    <NavLink href="/">Daniel</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
      );
  }
}

export default AppNavbar;
