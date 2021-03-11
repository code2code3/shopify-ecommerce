import React, {useContext} from 'react'
import { Container, Div, SideDrawer, Text, Row, Col, Anchor} from 'atomize'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome'
import { faShoppingCart } from '../../node_modules/@fortawesome/free-solid-svg-icons'
import logo from '../images/97f24862-3686-4c22-87e6-cbc5158eaaea_200x200.png';

function Header() {
    // Import result is the URL of your image
    return <img src={logo} alt="Logo" />;
  }


  
const Navbar = () => {

    const { openCart } = useContext(ShopContext)

    return (
        <Container d="flex" flexDirecton="row" p="2rem"  justify="space-between" style = {{
            width: '90vw',
            background: '#28a7e9',
            marginTop: '20px',
            marginBottom: '20px'
            }}>
            <Anchor href = "/" style = {{
                color: 'white'
            }}>
                Shop
            </Anchor>
            <Header />
            <Anchor onClick={() => openCart()}
            style = {{
                color: 'white',
            }}>
                 
                Go to cart <FontAwesomeIcon icon={faShoppingCart} size="lg"  />
            </Anchor>
        </Container>
    )
}

export default Navbar