import React from 'react'
import { Tab, List, Menu, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import General from "../components/Admin/General";
import Products from "../components/Admin/Products"
import * as ROLES from '../constants/roles';
import { withAuthorization, AuthUserContext } from '../session';
import SignOutButton from "../components/SignOut/SignOutButton"
import Users from "../components/Admin/Users";
import { withFirebase } from '../firebase';

class AdminPage extends React.Component {

    state = {
        users: [], 
        loading: false
    }

    panes = [

        {
            menuItem: <Menu.Item><h3>Administration MDEquitation</h3></Menu.Item>,
            render: () => <Tab.Pane basic attached={false}><General /></Tab.Pane>,
        },
        {
            menuItem: 'Produits',
            render: () => <Tab.Pane basic attached={false}><Products /></Tab.Pane>,
        },
        {
            menuItem: 'Commandes',
            render: () => <Tab.Pane basic attached={false}></Tab.Pane>,
        },
        {
            menuItem: 'Utilisateurs',
            render: () => <Tab.Pane basic attached={false}>
                                <Users users={this.state.users}/>
                            </Tab.Pane>,
        },
        {
            menuItem: <Menu.Item><Link href="/"><a>Voir le site</a></Link></Menu.Item>
        },
        {
            menuItem: <Menu.Item onClick={this.props.firebase.doSignOut}> Déconnexion </Menu.Item>
        }
    ]

    componentDidMount() {
        this.setState({ loading: true });
        this.unsubscribe = this.props.firebase
            .users()
            .onSnapshot(snapshot => {
                let users = [];
                snapshot.forEach(doc =>
                    users.push({ ...doc.data(), uid: doc.id }),
                );
                this.setState({
                    users,
                    });
            });
    }
      
    componentWillUnmount() {
        this.unsubscribe();
    }

      render() {
        return (
            <div>
            <AuthUserContext.Consumer>
                {authUser => (
                    <div>
                        <Tab 
                        menu={<Menu size='huge' stackable secondary bordeless inverted color="blue" />} 
                        panes={this.panes}/>
                    </div>
                    )
                }
            </AuthUserContext.Consumer>
            </div>
        )
    }
}



const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

  export default withFirebase(withAuthorization(condition)(AdminPage));