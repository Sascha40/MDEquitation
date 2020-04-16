import React from 'react';
import { Container } from 'semantic-ui-react';
import AdminHeader from '../../components/Admin/Header';
import General from '../../components/Admin/General';
import * as ROLES from '../../constants/roles';
import { withAuthorization } from '../../session';
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
    );
  }
}

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default withFirebase(withAuthorization(condition)(Admin));
