import {
  Dimmer,
  Card,
  Icon,
  Container,
  Loader,
  Divider,
  Table,
  Button,
} from 'semantic-ui-react';
import { withFirebase } from '../../../firebase';
import { withAuthorization, AuthUserContext } from '../../../session';
import * as ROLES from '../../../constants/roles';
import React, { Component } from 'react';
import AddArticle from '../../../components/Admin/AddArticle';
import AdminHeader from '../../../components/Admin/Header';
import Link from 'next/link';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isAddOpen: false,
      loading: false,
    };
  }

  componentDidMount() {
    this.unsubscribe = this.props.firebase.articles().onSnapshot((snapshot) => {
      let articles = [];
      snapshot.forEach((doc) =>
        articles.push({ ...doc.data(), articleid: doc.id }),
      );
      this.setState({
        articles,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  addModalOpen = () => this.setState({ isAddOpen: true });
  addModalClose = () => this.setState({ isAddOpen: false });

  deleteArticle(articleid) {
    this.props.firebase.article(articleid).delete();
  }


  render() {
    const {
      articles,
      isAddOpen,
      activeIndex,
      error,
      loading,
      articleid,
    } = this.state;
    return (
      <div>
        <AdminHeader />
        <AddArticle
          open={isAddOpen}
          onOpen={this.addModalOpen}
          onClose={this.addModalClose}
        />

        <Container>
          {loading && (
            <Loader
              size="large"
              active
              inline="centered"
              style={{ marginTop: '200px' }}
            />
          )}
          <Card.Group centered>
            <Card as="a" onClick={this.addModalOpen}>
              <Card.Content textAlign="center">
                <Card.Header>Articles</Card.Header>
                <Card.Meta>143 articles</Card.Meta>
                <Card.Description>
                  Ajouter <Icon color="yellow" name="add circle" size="large" />
                </Card.Description>
              </Card.Content>
            </Card>
            <Card as="a">
              <Card.Content textAlign="center">
                <Card.Header>Catégories</Card.Header>
                <Card.Meta>143 categories</Card.Meta>
                <Card.Description>
                  Ajouter <Icon color="orange" name="add circle" size="large" />
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>

          <Divider hidden />
          <Divider hidden />

          <Table stackable basic="very">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Articles</Table.HeaderCell>
                <Table.HeaderCell>Marque</Table.HeaderCell>
                <Table.HeaderCell>Catégorie</Table.HeaderCell>
                <Table.HeaderCell>Prix</Table.HeaderCell>
                <Table.HeaderCell>Prix Barré</Table.HeaderCell>
                <Table.HeaderCell>Stock</Table.HeaderCell>
                <Table.HeaderCell>Modifier / Supprimer</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {articles.map((article, index) => (
                <Table.Row key={index}>
                  <Table.Cell collapsing>{article.Name}</Table.Cell>
                  <Table.Cell collapsing>{article.Brand}</Table.Cell>
                  <Table.Cell collapsing>Catégorie</Table.Cell>
                  <Table.Cell collapsing>{article.Price} €</Table.Cell>
                  <Table.Cell collapsing><del>{article.CrossedPrice}</del> €</Table.Cell>
                  <Table.Cell collapsing>{article.Stock} pcs</Table.Cell>
                  <Table.Cell collapsing textAlign="center">
                    <Link
                      href="/admin/products/update/[id]"
                      as={`/admin/products/update/${article.articleid}`}
                    >
                      <Button
                        as="a"
                        circular
                        compact
                        color="yellow"
                        icon="pencil"
                      />
                    </Link>
                    <Button
                      onClick={() => this.deleteArticle(article.articleid)}
                      circular
                      compact
                      color="orange"
                      icon="trash"
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Container>
      </div>
    );
  }
}

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default withFirebase(withAuthorization(condition)(Products));
