import React from 'react'
import { Dropdown } from 'semantic-ui-css'
import { NavLink } from 'react-router-dom'

export default function CartSummary() {
  return (
    <div> <Dropdown item text='Sepet'>
    <Dropdown.Menu>
        <Dropdown.Item>Acer Laptop</Dropdown.Item>
        <Dropdown.Item>Asus Laptop</Dropdown.Item>
        <Dropdown.Item>Casper Laptop</Dropdown.Item>

        <Dropdown.Divider/>
       < Dropdown.Item as={NavLink} to="/cart">
      Sepete Git
       </Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}
