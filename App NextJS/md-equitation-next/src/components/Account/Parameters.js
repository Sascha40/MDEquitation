import faker from 'faker'
import React from 'react'
import {Segment, Header, Container, Table, Button, Card} from 'semantic-ui-react'
import Link from 'next/link'
import {MediaContextProvider, Media} from "../../media/media";





class Parameters extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const items = [
            {
              header: 'Domicile',
              description:
                '108 Bis Cours Saint Louis, Résidence Jardins des Chartrons, Bat H, 33300, Bordeaux',
            },
            {
              header: 'Maman',
              description:
                'Bring to the table win-win survival strategies to ensure proactive domination.',
            },
            {
              header: 'Papa',
              description:
                'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
            },
          ]

        return (
            <div>
                
                <Container text className='mt-2 mb-1'> 
                <Header at='h2'>Informations liés au compte</Header>
                    <Table basic='very'>
                        <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        Prénom
                                    <Header.Subheader>{this.props.firstName}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell textAlign="right">
                                <Button icon='pencil' content='Modifier' />
                            </Table.Cell>
                        </Table.Row> 
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        Nom
                                    <Header.Subheader>{this.props.lastName}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell textAlign="right">
                                <Button icon='pencil' content='Modifier' />
                            </Table.Cell>
                        </Table.Row> 
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        Adresse E-mail
                                    <Header.Subheader>{this.props.email}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                                </Table.Cell>
                            <Table.Cell textAlign="right">
                                <Button icon='pencil' content='Modifier' />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        Numéro de téléphone portable
                                    <Header.Subheader>{this.props.password}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                                </Table.Cell>
                            <Table.Cell textAlign="right">
                                <Button icon='pencil' content='Modifier' />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                        <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        Mot de passe
                                    <Header.Subheader>*******</Header.Subheader>
                                    </Header.Content>
                                </Header>
                                </Table.Cell>
                            <Table.Cell textAlign="right">
                                <Button icon='pencil' content='Modifier' />
                            </Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>
                    <Header at='h2'>Mes Adresses</Header>
                    <Card.Group items={items} />
                </Container>
                

            </div>
        )
    }
}

export default Parameters;