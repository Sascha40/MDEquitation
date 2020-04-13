import React from 'react';
import { Tab, List, Menu, Icon, Loader, Container } from 'semantic-ui-react';
import Link from 'next/link';
import AdminHeader from "../../../components/Admin/Header";
import * as ROLES from '../../../constants/roles';
import { withAuthorization, AuthUserContext } from '../../../session';
import { withFirebase } from '../../../firebase';
import { UserList } from '../../../components/Admin/Userlist';

class Users extends React.Component {

    state = {
        users: [], 
        loading: false
    }


    componentDidMount() {
        this.setState({ loading: true });
        this.unsubscribe = this.props.firebase
            .users()
            .onSnapshot(snapshot => {
                let users = [];
                snapshot.forEach(doc =>
                    users.push({...doc.data(), uid: doc.id }),
                );
                this.setState({
                    users,
                    loading: false
                    });
            });
    }
      
    componentWillUnmount() {
        this.unsubscribe();
    }

      render() {
          const { loading } = this.state
        return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <div>
                        <AdminHeader />
                        <Container>
                        {loading &&        
                            <Loader size='large' active inline='centered' style={{marginTop:"200px"}}/>
                        }
                        <UserList users={this.state.users}/>
                        </Container>
                    </div>
                    )
                }
            </AuthUserContext.Consumer>
        )
    }
}



const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

  export default withFirebase(withAuthorization(condition)(Users));