import React from 'react'
import { Menu, Button} from 'semantic-ui-react'


export default function SignedOut({signIn}) {
  return (
    <div>
    
        <Menu.Item>
        <Button onClick={signIn} primary>Giriş Yap</Button>
        <Button primary style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
        </Menu.Item>
    
    </div>
  )
}
