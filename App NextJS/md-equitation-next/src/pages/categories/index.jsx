import React, { createRef, useState } from 'react';
import { Card, Image, Header, Sticky, Container } from 'semantic-ui-react';
import NavBar from '../../components/Nav/NavBar';
import LeftSideBar from '../../components/Layout/LeftSideBar';
import Footer from '../../components/Layout/Footer';
import { withFirebase } from '../../firebase';

function index() {
  const [animation, setAnimation] = useState('overlay');
  const [visible, setVisible] = useState(false);
  const contextRef = createRef();

  const handleAnimation = () => setVisible(() => !visible);
  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <LeftSideBar animation={animation} direction="left" visible={visible} />
        <NavBar sideDetail={'left'} sidebarAnimation={() => handleAnimation} />
      </Sticky>
      <Container className="mt-3">
        <Header as="h1"> Nos Catégories</Header>
        <Card.Group className="mt-2" centered>
          <Card
            as="a"
            raised
            style={{
              boxShadow:
                'rgb(238, 238, 238) 0px 0px 0px 1px, rgba(34, 36, 38, 0.12) 0px 2px 4px 0px, rgba(34, 36, 38, 0.15) 0px 2px 10px 0px',
            }}
          >
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
              wrapped
              rounded
              ui={false}
            />
            <Card.Content>
              <Card.Header textAlign="center">Licols</Card.Header>
            </Card.Content>
          </Card>

          <Card
            as="a"
            raised
            style={{
              boxShadow:
                'rgb(238, 238, 238) 0px 0px 0px 1px, rgba(34, 36, 38, 0.12) 0px 2px 4px 0px, rgba(34, 36, 38, 0.15) 0px 2px 10px 0px',
            }}
          >
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header textAlign="center">Fouets</Card.Header>
            </Card.Content>
          </Card>

          <Card
            as="a"
            raised
            style={{
              boxShadow:
                'rgb(238, 238, 238) 0px 0px 0px 1px, rgba(34, 36, 38, 0.12) 0px 2px 4px 0px, rgba(34, 36, 38, 0.15) 0px 2px 10px 0px',
            }}
          >
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/molly.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header textAlign="center">Filets</Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
      <Footer />
    </div>
  );
}

export default withFirebase(index);
