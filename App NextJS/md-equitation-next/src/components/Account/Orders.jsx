import React, { Component } from 'react';
import { Table, Button, List, Image, Accordion, Icon } from 'semantic-ui-react';

class Orders extends Component {
  state = { activeIndex: -1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  render() {
    const { activeIndex } = this.state;

    return (
      <div>
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={2}>Commande</Table.HeaderCell>
              <Table.HeaderCell colSpan={2}> Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell verticalAlign={'top'} colSpan={2}>
                <Accordion>
                  <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    Commande du 02.12.20 - N°218219
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 0}>
                    <List verticalAlign={'middle'} relaxed>
                      <List.Item>
                        <Image
                          avatar
                          src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                        />
                        <List.Content as={'a'}>Article Name</List.Content>
                      </List.Item>
                      <List.Item>
                        <Image
                          avatar
                          src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                        />
                        <List.Content as={'a'}>Article Name</List.Content>
                      </List.Item>
                      <List.Item>
                        <Image
                          avatar
                          src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                        />
                        <List.Content as={'a'}>Article Name</List.Content>
                      </List.Item>
                    </List>
                  </Accordion.Content>
                </Accordion>
              </Table.Cell>
              <Table.Cell warning>En attente de validation</Table.Cell>
              <Table.Cell textAlign="right">
                <Button circular>Détails</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell verticalAlign={'top'} colSpan={2}>
                <Accordion>
                  <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    Commande du 02.12.20 - N°218219
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 1}>
                    <List verticalAlign={'middle'} relaxed>
                      <List.Item>
                        <Image
                          avatar
                          src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                        />
                        <List.Content as={'a'}>Article Name</List.Content>
                      </List.Item>
                      <List.Item>
                        <Image
                          avatar
                          src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                        />
                        <List.Content as={'a'}>Article Name</List.Content>
                      </List.Item>
                      <List.Item>
                        <Image
                          avatar
                          src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                        />
                        <List.Content as={'a'}>Article Name</List.Content>
                      </List.Item>
                    </List>
                  </Accordion.Content>
                </Accordion>
              </Table.Cell>
              <Table.Cell positive>Livrée</Table.Cell>
              <Table.Cell textAlign="right">
                <Button circular>Détails</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell verticalAlign={'top'} colSpan={2}>
                <Accordion>
                  <Accordion.Title
                    active={activeIndex === 2}
                    index={2}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    Commande du 02.12.20 - N°218219
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 2}>
                    <List verticalAlign={'middle'} relaxed>
                      <List.Item>
                        <Image
                          avatar
                          src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                        />
                        <List.Content as={'a'}>Article Name</List.Content>
                      </List.Item>
                      <List.Item>
                        <Image
                          avatar
                          src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                        />
                        <List.Content as={'a'}>Article Name</List.Content>
                      </List.Item>
                      <List.Item>
                        <Image
                          avatar
                          src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                        />
                        <List.Content as={'a'}>Article Name</List.Content>
                      </List.Item>
                    </List>
                  </Accordion.Content>
                </Accordion>
              </Table.Cell>
              <Table.Cell negative>Suspendu</Table.Cell>
              <Table.Cell textAlign="right">
                <Button circular>Détails</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default Orders;
