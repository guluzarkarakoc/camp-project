import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
       <Menu.Item>
           
         <Image avatar spaced="right" src="https://tr.wikipedia.org/wiki/Kedi#/media/Dosya:June_odd-eyed-cat_cropped.jpg" />
      
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
