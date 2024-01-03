import React, {useState} from 'react'
import {  Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import {useNavigate } from 'react-router'
import { useSelector } from 'react-redux'


export default function Navi() {
    const {cartItems} =useSelector(state =>state.cart)
   const [ IsAuthenticated, setIsAuthenticated] = useState(false)
   const history =useNavigate()

   function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
   }
   function handleSignIn() {
    setIsAuthenticated(true)
   }
    return (
        <div> <Menu inverted fixed="top">
            <Container>
                <Menu.Item
                    name='home' />
                <Menu.Item
                    name='messages' />

                <Menu.Menu position='right'>
                {cartItems.length>0&&<CartSummary/>}
             
                {IsAuthenticated?<SignedIn signOut={handleSignOut}/> 
                :<SignedOut singIn={handleSignIn}/>}
                

                </Menu.Menu>
            </Container>

        </Menu>
        </div>
    )
}
