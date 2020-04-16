import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { withFirebase } from '../../firebase';
import Link from 'next/link';

class AdminHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
    }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state
      return (
        <Menu color="blue" secondary inverted stackable>
          <Menu.Item>
            <img src='/horse.png' />
            Administration
          </Menu.Item>

          <Link href="/admin">
              <Menu.Item
              active={activeItem === 'general'}
              onClick={(e) => this.handleItemClick(e, {name})}
              name='general'
              content="General"
              icon="home" />
          </Link>

          <Link href="/admin/products">
              <Menu.Item
              active={activeItem === 'products'}
              onClick={(e) => this.handleItemClick(e, {name})}
              name='products'
              content="Produits"
              icon="tags"
              />
          </Link>

          <Link href="/admin/users">
              <Menu.Item
              active={activeItem === 'users'}
              onClick={(e) => this.handleItemClick(e, {name})}            
              name='users'
              content="Utilisateurs"
              icon="users"
              />
          </Link>


          <Link href="/">
              <Menu.Item
              name='site'
              content="Voir le site"
              icon="eye"/>
          </Link>

          <Menu.Item
            onClick={this.props.firebase.doSignOut}
            icon="sign out"
            content="Déconnexion"/>
        </Menu>
      )
    }
}


export default withFirebase(AdminHeader);