import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Div, SideDrawer, Text, Row, Col, Anchor} from 'atomize'
import styled from 'styled-components'

const Button = styled.button`
  background: #28a7e9;
  border-radius: 3px;
  border: 2px solid #28a7e9;
  color: white;
  font-weight: bold;
  margin: 10px;
  padding: 10px;

  :visted {
      color: white};

    :link {
    color: white}
`

const Cart = () => {

    const { isCartOpen, closeCart, checkout} = useContext(ShopContext)

    return (
        <SideDrawer isOpen={isCartOpen} onClose={closeCart}>
            <Div d="flex" flexDir="column" m={{ b: "4rem" }}>
                {checkout.lineItems && checkout.lineItems.map(item => (
                <Row key={item.id}>
                    <Col>
                        <Div bgImg={item.variant.image.src} bgSize="cover" bgPos="center center" h="5rem" w="4rem" />
                    </Col>
                    <Col>
                        <Text>{item.title}</Text>
                        <Text>{item.variant.title}</Text>
                        <Text>{item.quantity}</Text>
                    </Col>
                    <Col>
                        <Text>${item.variant.price}</Text>
                    </Col>
               </Row>
                ))}
                <Button>
                    <Anchor href={checkout.webUrl} target="_blank" style = {{
            color: 'white',
            fontWeight: 'bold'
            }}>
                Go to checkout</Anchor>
                </Button>
            </Div>
        </SideDrawer>
    )
}

export default Cart