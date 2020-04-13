import React from 'react';
import { List, Button} from 'semantic-ui-react';



export const UserList = ({ users }) => (
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
  );