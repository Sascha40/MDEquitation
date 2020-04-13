import React from 'react';
import { Tab, List, Menu, Icon, Container } from 'semantic-ui-react';
import Link from 'next/link';
import AdminHeader from "../../components/Admin/Header";
import General from "../../components/Admin/General";
import * as ROLES from '../../constants/roles';
import { withAuthorization, AuthUserContext } from '../../session';
import { withFirebase } from '../../firebase';

class Admin extends React.Component {

      render() {
        return (
            <div>
                <AdminHeader />
                <Container>
                    <General />
                </Container>
            </div>
        )
    }
}



const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

  export default withFirebase(withAuthorization(condition)(Admin));