import React, { Component, createRef } from 'react';
import NavBar from '../components/Nav/NavBar';
import {
  Sticky,
  Menu,
  Container,
  Header,
  Button,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';
import LeftSideBar from '../components/Layout/LeftSideBar';
import Footer from '../components/Layout/Footer';
import faker from 'faker';
import Orders from '../components/Account/Orders';
import Parameters from '../components/Account/Parameters';
import SignOutButton from '../components/SignOut/SignOutButton';
import {
  withAuthorization,
  withAuthentication,
  AuthUserContext,
} from '../session';
import { Media } from '../media/media';
import { useRouter } from 'next/router';

class Compte extends Component {
  state = {
    animation: 'overlay',
    direction: 'left',
    visible: false,
    dimmed: false,
    activeItem: 'Mes Commandes',
  };

  contextRef = createRef();

  handleAnimation = (animation) => () =>
    this.setState((prevState) => ({ animation, visible: !prevState.visible }));

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { animation, direction, visible, activeItem } = this.state;
    return (
      <div>
        <Menu.Menu>
          {(authUser) => (
            <div ref={this.contextRef}>
              <Sticky context={this.contextRef}>
                <LeftSideBar
                  animation={animation}
                  direction={direction}
                  visible={visible}
                />
                <NavBar
                  sideDetail={direction}
                  sidebarAnimation={this.handleAnimation}
                />
              </Sticky>

              <Container>
                <div className={'mt-3'}>
                  <Segment clearing basic>
                    <Header
                      as="h2"
                      content={'Mon Compte'}
                      textAlign={'left'}
                      floated={'left'}
                      subheader="Suivez vos commandes et accedez à vos paramètres"
                      style={{ fontSize: '2em' }}
                    />

                    <Header
                      as="h3"
                      floated={'right'}
                      dividing
                      style={{ marginTop: '10px' }}
                    >
                      <Image avatar size="small" src="/user.png" />
                      {authUser.firstName + ' ' + authUser.lastName}
                    </Header>
                  </Segment>

                  <Menu pointing secondary>
                    <Menu.Item
                      name="Mes Commandes"
                      active={activeItem === 'Mes Commandes'}
                      onClick={this.handleItemClick}
                    >
                      <Media greaterThanOrEqual="md">
                        <Icon name="box" />
                      </Media>{' '}
                      Mes Commandes
                    </Menu.Item>
                    <Menu.Item
                      name="Mes Paramètres"
                      active={activeItem === 'Mes Paramètres'}
                      onClick={this.handleItemClick}
                    >
                      {' '}
                      <Media greaterThanOrEqual="md">
                        <Icon name="box" />
                      </Media>{' '}
                      Mes Paramètres
                    </Menu.Item>
                    <Menu.Menu position="right">
                      <Media greaterThanOrEqual="md">
                        <Menu.Item
                          name="Déconnexion"
                          active={activeItem === 'Déconnexion'}
                          onClick={this.handleItemClick}
                        >
                          <SignOutButton />
                        </Menu.Item>
                      </Media>
                    </Menu.Menu>
                  </Menu>
                  <div className={'mt-2'}>
                    <div>
                      {activeItem === 'Mes Commandes' && <Orders />}
                      {activeItem === 'Mes Paramètres' && (
                        <Parameters
                          firstName={authUser.firstName}
                          lastName={authUser.lastName}
                          email={authUser.email}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </Container>
              <Footer />
            </div>
          )}
        </Menu.Menu>
      </div>
    );
  }
}

const condition = (authUser) => authUser !== null;

export default withAuthorization(condition)(Compte);
