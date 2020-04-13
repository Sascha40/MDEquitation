import React, { Component } from 'react'
import {Grid, Segment, Statistic} from "semantic-ui-react";
import { UserList } from "./Userlist"
class Users extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Grid stackable columns={2}>
                    <Grid.Column>
                    <Segment>
                        <UserList users={this.props.users} />
                    </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}


export default Users;