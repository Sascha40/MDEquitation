import faker from 'faker';
import React from 'react';
import {
  Dropdown,
  Image,
  Icon,
  Button,
  Popup,
  Grid,
  Column,
} from 'semantic-ui-react';
import Link from 'next/link';
import { MediaContextProvider, Media } from '../../media/media';
import SignOutButton from '../SignOut/SignOutButton';
import { AuthUserContext } from '../../session';

function AccountNavLogged(props) {
	return (
    <Dropdown
      trigger={
        <span>
          <Image avatar src="/user.png" />
          &nbsp;
          {props.firstName}
        </span>
      }
    >
      <Dropdown.Menu>
        <Link href={'/compte'}>
          <Dropdown.Item>
            <Icon name="user" />
            Mon Compte
          </Dropdown.Item>
        </Link>
        <Dropdown.Header className="mx-auto">
          <SignOutButton />
        </Dropdown.Header>
      </Dropdown.Menu>
    </Dropdown>
  );
}

class AccountNavLogOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <Popup
          trigger={<Button circular icon="user" basic content="Mon Compte" />}
          onClose={this.handleClose}
          onOpen={this.handleOpen}
          open={this.state.isOpen}
          on="click"
          hideOnScroll
          wide
          position="top center"
        >
          <Grid divided columns={2}>
            <Grid.Column verticalAlign={'middle'}>
              <Link href="/connexion">
                <Button circular fluid className="btn-shop">
                  <Icon name="sign-in" />
                  Connexion
                </Button>
              </Link>
            </Grid.Column>
            <Grid.Column verticalAlign={'middle'}>
              <Link href="/inscription">
                <Button circular fluid color="brown">
                  <Icon name="add" />
                  Je m'inscris
                </Button>
              </Link>
            </Grid.Column>
          </Grid>
        </Popup>
      </React.Fragment>
    );
  }
}

const AccountNav = () => (
  <MediaContextProvider>
    <Media greaterThanOrEqual="md">
      <AuthUserContext.Consumer>
        {(authUser) =>
          authUser ? (
            <AccountNavLogged firstName={authUser.firstName} />
          ) : (
            <AccountNavLogOut />
          )
        }
      </AuthUserContext.Consumer>
    </Media>
  </MediaContextProvider>
);

export default AccountNav;
