import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import ProductAdd from '../pages/ProductAdd'



export default function 
Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
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
            <Route path="/product/add" component={ProductAdd} />

        </Routes>
       
        </Grid.Column>
    </Grid.Row>
   </Grid>
    
    </div>
  )
}
