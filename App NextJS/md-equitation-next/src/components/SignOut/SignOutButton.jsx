import React from 'react';
import { withFirebase } from '../../firebase';
import { Button, Icon } from 'semantic-ui-react';

const SignOutButton = ({ firebase }) => (
  <Button
    type="button"
    circular
    className="btn-shop"
    onClick={firebase.doSignOut}
  >
    <Icon name="sign out" />
    Déconnexion
  </Button>
);
export default withFirebase(SignOutButton);
