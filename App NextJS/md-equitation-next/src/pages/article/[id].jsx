import { withRouter } from 'next/router';
import React, { Component, createRef } from 'react';
import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Layout/Footer';
import {
  Sticky,
  Header,
  Segment,
  Loader,
  Rating,
  Image,
  Container,
  Grid,
  Comment,
  Button,
  Icon,
  List,
  Popup,
  Divider,
  Form,
} from 'semantic-ui-react';
import LeftSideBar from '../../components/Layout/LeftSideBar';
import { withFirebase } from '../../firebase';

class Article extends Component {


  constructor(props) {
    super(props);
    this.state = {
      animation: 'overlay',
      direction: 'left',
      visible: false,
      article: [],
      loading: false,
      error: null,
      Name: '',
      Brand: '',
      Price: '',
      CrossedPrice: '',
      Stock: '',
      Weight: '',
      Height: '',
      Width: '',
      Lenght: '',
      Description: '',
      isOnTop: '',
      urlImage1: '',
    };
  }

  contextRef = createRef();

  handleAnimation = (animation) => () =>
    this.setState((prevState) => ({ animation, visible: !prevState.visible }));


  componentDidMount() {
    let article = [];
    this.props.firebase
      .article(this.props.artid)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          this.setState({ error });
        } else {
          article.push(doc.data());
          this.setState({ article });
        }
      })
      .then(() => {
        article = this.state.article;
        this.setState({
          Name: article[0].Name,
          Brand: article[0].Brand,
          Price: article[0].Price,
          CrossedPrice: article[0].CrossedPrice,
          Stock: article[0].Stock,
          Weight: article[0].Weight,
          Height: article[0].Height,
          Width: article[0].Width,
          Lenght: article[0].Lenght,
          Description: article[0].Description,
          urlImage1: article[0].url,
          isOnTop: article[0].isOnTop,
        });
      })
      .catch((error) => {
        this.setState(error);
      });
  }

  render() {
    const {
      animation,
      direction,
      visible,
      urlImage1,
      error,
      Name,
      Brand,
      Price,
      CrossedPrice,
      Weight,
      Height,
      Width,
      Lenght,
      Description,
    } = this.state;
    return (
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

        <Container className="mt-3">
          <Segment basic clearing>
            <Header as="h2" floated="left">
              {Name}
              <Header.Subheader>{Brand}</Header.Subheader>
            </Header>

            <Header as="h2" color="brown" floated="right">
              <Header.Subheader>
                <del>{CrossedPrice}€</del>
              </Header.Subheader>
              {Price}€
              <Divider />
            </Header>
          </Segment>

          <Grid stackable columns={2}>
            <Grid.Column>
              <Image rounded bordered src={urlImage1} size="large" />
            </Grid.Column>
            <Grid.Column>
              <Button
                circular
                animated="vertical"
                floated="right"
                style={{
                  minWidth: '85px',
                }}
                className={'btn-shop'}
              >
                <Button.Content hidden>Au panier </Button.Content>
                <Button.Content visible>
                  <Icon inverted name="add to cart" />
                </Button.Content>
              </Button>
              <Popup
                hoverable
                content={<a href="#comments">Voir l'avis des utilisateurs</a>}
                trigger={<Rating defaultRating={3} maxRating={5} disabled />}
              />

              <Header as="h3">Description : </Header>
              {Description}
              <Header as="h3">Informations : </Header>

              <List>
                <List.Item>Poids : {Weight} kg</List.Item>
                <List.Item>Hauteur : {Height} cm</List.Item>
                <List.Item>Largeur : {Width} cm</List.Item>
                <List.Item>Profondeur : {Lenght} cm</List.Item>
              </List>
            </Grid.Column>
          </Grid>

          <Header as="h2" content="Dans la même catégorie" />

          <Comment.Group id="comments">
            <Header as="h3" dividing>
              L'avis des utilisateurs
            </Header>

            <Comment>
              <Comment.Avatar src="/user.png" />
              <Comment.Content>
                <Comment.Author as="a">Matt</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>How artistic!</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>

            <Comment>
              <Comment.Avatar src="/user.png" />
              <Comment.Content>
                <Comment.Author as="a">Elliot Fu</Comment.Author>
                <Comment.Metadata>
                  <div>Yesterday at 12:30AM</div>
                </Comment.Metadata>
                <Comment.Text>
                  <p>
                    This has been very useful for my research. Thanks as well!
                  </p>
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>

            <Comment>
              <Comment.Avatar src="/user.png" />
              <Comment.Content>
                <Comment.Author as="a">Joe Henderson</Comment.Author>
                <Comment.Metadata>
                  <div>5 days ago</div>
                </Comment.Metadata>
                <Comment.Text>
                  Dude, this is awesome. Thanks so much
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>

            <Form reply>
              <Form.TextArea />
              <Button
                content="Add Reply"
                labelPosition="left"
                icon="edit"
                primary
              />
            </Form>
          </Comment.Group>
        </Container>
        <Footer/>
        {error && error.message}
      </div>
    );
  }
}


export async function getServerSideProps(context) {
  



  return {
    props: {
      artid : context.query.id
    }, // will be passed to the page component as props
  }
}

export default withRouter(withFirebase(Article));
