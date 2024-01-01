import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'



export default function 
Dashboard() {
  return (
    <div>
   <Grid>
    <Grid.Row>
      <Grid.Column width={4}>
      <Categories></Categories>
      </Grid.Column>

      <Grid.Column width={12}>
        <Routes>
        <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:id" component={ProductDetail} />
            <Route path="/cart" component={CartDetail} />
            <Route path="/login" component={SignedOut} />

        </Routes>
       
        </Grid.Column>
    </Grid.Row>
   </Grid>
    
    </div>
  )
}
