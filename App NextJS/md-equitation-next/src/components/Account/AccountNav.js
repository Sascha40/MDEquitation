import faker from 'faker'
import React from 'react'
import {Dropdown, Image, Icon} from 'semantic-ui-react'
import Link from 'next/link'
import {MediaContextProvider, Media} from "../../media/media";
import SignOutButton from '../SignOut/SignOutButton';


const trigger = (
    <span>
        <Image avatar src={faker.internet.avatar()} />
        &nbsp;
        {faker.name.firstName()}
  </span>
)

/*
const options = [
    { key: 'user', text:"Mon compte", icon: 'user' },
    { key: 'settings', text: 'Paramètres', icon: 'settings' },
    { key: 'sign-out', text: 'Déconnexion', icon: 'sign out' },
]
*/

const AccountNav = () => (
<MediaContextProvider>
    <Media greaterThanOrEqual="md">
        <Dropdown trigger={trigger}>
            <Dropdown.Menu>
                <Link href={"/compte"}>
                    <Dropdown.Item>
                        <Icon name='user' />
                        Mon Compte
                    </Dropdown.Item>
                </Link>
                <Dropdown.Item>
                    <Icon name='wrench'/>
                    Paramètres
                </Dropdown.Item>
                <Dropdown.Header>
            <SignOutButton/>
            </Dropdown.Header>
            </Dropdown.Menu>

        </Dropdown>
   </Media>
</MediaContextProvider>
)

export default AccountNav;