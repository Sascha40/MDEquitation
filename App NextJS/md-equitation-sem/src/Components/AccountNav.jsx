import faker from 'faker'
import React from 'react'
import { Dropdown, Image, Icon } from 'semantic-ui-react'
import {Link} from "react-router-dom";


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
    <Dropdown trigger={trigger}
    >
        <Dropdown.Menu>
            <Dropdown.Item as={Link} to={"/moncompte"}>
                <Icon name='user' />
                Mon compte
            </Dropdown.Item>
            <Dropdown.Item>
                <Icon name='wrench'/>
                Paramètres
            </Dropdown.Item>
            <Dropdown.Item>
                <Icon name='sign out' />
                Déconnexion
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
)

export default AccountNav;