import React from 'react';
import { List, Button, Grid, Segment} from 'semantic-ui-react';



export const UserList = ({ users }) => (
  <Grid stackable columns={2}>
    <Grid.Column>
      <Segment>
        <List verticalAlign='middle'>
          {users.map(user => (
            <List.Item key={user.uid}>
              <List.Content floated='right'>
                <Button circular color="yellow" icon='pencil'/>
                <Button circular color="orange" icon='trash'/>
              </List.Content>
                <List.Icon name='user circle' size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header>{user.firstName + ' ' + user.lastName} </List.Header>
                <List.Description>{user.email}</List.Description>
              </List.Content>
            </List.Item>  
          ))}
        </List>
      </Segment>
    </Grid.Column>
  </Grid>
  );