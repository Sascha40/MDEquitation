import { withRouter } from 'next/router';
import { withAuthorization, AuthUserContext } from '../../../../session';
import { withFirebase } from '../../../../firebase';
import * as ROLES from '../../../../constants/roles';
import AdminHeader from '../../../../components/Admin/Header';
import React from 'react';
import {
  Container,
  Form,
  Button,
  Header,
  Divider,
  Statistic,
} from 'semantic-ui-react';
import Link from 'next/link';

const INITIAL_STATE = {
  error: null,
  article: [],
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

class UpdateArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }

  componentDidMount() {
    let article = [];
    this.props.firebase
      .article(this.props.router.query.id)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          alert('Document Indisponible');
        } else {
          article.push(doc.data());
          this.setState({ article });
        }
      })
      .then(() => {
        article = this.state.article
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
          isOnTop: article[0].isOnTop,
        })
      })
      .catch((error) => {
        this.setState(error);
      });
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onCheckboxChange = () => {
    this.setState(({ isOnTop }) => ({ isOnTop: !isOnTop }));
  };

  onSubmit(event) {
    const {
      Name,
      Brand,
      Price,
      CrossedPrice,
      Stock,
      Weight,
      Height,
      Width,
      Lenght,
      Description,
      isOnTop,
    } = this.state

    this.props.firebase
      .article(this.props.router.query.id)
      .update({
        Name: Name,
        Brand: Brand,
        Price: Price,
        CrossedPrice: CrossedPrice,
        Stock: Stock,
        Weight: Weight,
        Height: Height,
        Width: Width,
        Lenght: Lenght,
        Description: Description,
        isOnTop: isOnTop,
      })
      .then(() => {
        alert("Article Modifié")
      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  }

  render() {
    const {
      Name,
      Brand,
      Price,
      CrossedPrice,
      Stock,
      Weight,
      Height,
      Width,
      Lenght,
      Description,
      isOnTop,
      error,
    } = this.state;
    return (
      <div>
        <AdminHeader />
        <Container text>
          <Header>
            Modifier un article
            <Header.Subheader className="mt-1">
              <Link href="/admin/products">
                <Button circular content="Retour" icon="left arrow" />
              </Link>
              <Divider hidden />
            </Header.Subheader>
          </Header>
          <Form onSubmit={this.onSubmit}>
            <Form.Input
              label="Nom de l'article"
              onChange={this.onChange}
              value={Name}
              name="Name"
            />
            <Form.Input
              label='Marque'
              value={Brand}
              onChange={this.onChange}
              name="Brand"
            />
            <Form.Input
              label="Prix TTC"
              value={Price}
              onChange={this.onChange}
              name="Price"
            />
            <Form.Input
              label="Prix barré TTC"
              value={CrossedPrice}
              name="CrossedPrice"
              onChange={this.onChange}
            />
            <Form.Input
              label="Stock"
              value={Stock}
              onChange={this.onChange}
              name="Stock"
            />
            <Form.Input
              label="Poids en kg"
              value={Weight}
              onChange={this.onChange}
              name="Weight"
            />
            <Form.Input
              label="Hauteur en cm"
              value={Height}
              onChange={this.onChange}
              name="Height"
            />
            <Form.Input
              label="Largeur en cm"
              value={Width}
              onChange={this.onChange}
              name="Width"
            />
            <Form.Input
              label="Profondeur en cm"
              value={Lenght}
              onChange={this.onChange}
              name="Lenght"
            />
            <Form.Input
              label="Description"
              value={Description}
              onChange={this.onChange}
              name="Description"
            />
            <Form.Checkbox
              label="Page d'accueil"
              name="isOnTop"
              value={isOnTop}
              checked={isOnTop}
              onChange={this.onCheckboxChange}
            />
            <Button
              type="submit"
              color="yellow"
              content="Modifier"
              circular
              icon="pencil"
              floated="right"
            />
            {error && error.message}
          </Form>
        </Container>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
      </div>
    );
  }
}

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default withRouter(
  withFirebase(withAuthorization(condition)(UpdateArticle)),
);
