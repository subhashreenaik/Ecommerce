import React from 'react'
import{Navbar,Container, FormControl, Nav, Dropdown, Badge} from "react-bootstrap";
import{Link} from 'react-router-dom';





const Header = () => {

    return (
      <>
      <div>
      <Navbar className='navbar navbar-custom' bg="danger" variant='dark'  style={{height:80}}>
        <Container>
          <Navbar.Brand>
          
          <Link to="/">Ecommerce </Link>
          </Navbar.Brand>
          <Navbar.Text className='search'>
          <FormControl style={{width:500}} placeholder='Search a item'
                      className='m-auto' />

          </Navbar.Text>
 
        </Container>
      </Navbar>
     
      </div>
      
      </>
    )
  }
  
  export default Header;