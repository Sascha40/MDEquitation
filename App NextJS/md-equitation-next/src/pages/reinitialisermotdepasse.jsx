import React, { Component } from 'react';
import Link from 'next/link';
import { withFirebase } from '../firebase';
import ResetPasswordBase from '../components/Forget/ResetPasswordBase';
import { Button, Menu, Image, Grid, Header, Message } from 'semantic-ui-react';
import Footer from '../components/Layout/Footer';

const PasswordForgetPage = () => (
  <div>
    <Menu secondary borderless>
      <Link href={'/'}>
        <Menu.Item header={true} className="nav-header">
          <Image src={'/horse.png'} size={'mini'} alt={'Logo MDEquitation'} />
          <h1>
            <span className="capital-color">MD</span>
            <span className="minimal-color">Equitation</span>
          </h1>
        </Menu.Item>
      </Link>
    </Menu>

    <Grid
      textAlign="center"
      style={{ marginTop: '120px', marginBottom: '50px' }}
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header
          as="h2"
          style={{
            color: 'rgb(48, 122, 86)',
            fontFamily: "'Nunito', sans-serif",
          }}
          textAlign="center"
        >
          <Image src={'/horse.png'} style={{ margin: '0' }} size={'tiny'} />{' '}
          Réinitialiser mon mot de passe
        </Header>
        <PasswordForgetForm />
      </Grid.Column>
    </Grid>

    <Footer />
  </div>
);

export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(ResetPasswordBase);
export { PasswordForgetForm };
