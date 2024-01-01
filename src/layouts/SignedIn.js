import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
       <Menu.Item>
           
         <Image avatar spaced="right" src="https://www.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_41073278.htm#query=beautiful%20cat&position=0&from_view=keyword&track=ais&uuid=fe880df3-9b39-403e-9449-761a7737a3f9" />
      
      <Dropdown pointing="top left" text="Kedy">
<Dropdown.Menu>
<Dropdown.Item text="Bilgilerim" icon="info"/>
<Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
</Dropdown.Menu>
      </Dropdown>
       </Menu.Item>

    </div>
  )
}
