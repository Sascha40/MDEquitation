import React, { Component } from 'react';
import { Grid, Segment, Statistic } from 'semantic-ui-react';

class General extends Component {
  render() {
    return (
      <div>
        <Grid stackable columns={2}>
          <Grid.Column>
            <Segment textAlign="center">
              <Statistic>
                <Statistic.Value>5.550</Statistic.Value>
                <Statistic.Label>Commandes</Statistic.Label>
              </Statistic>
              <Statistic color="orange">
                <Statistic.Value>13</Statistic.Value>
                <Statistic.Label>A Valider</Statistic.Label>
              </Statistic>
              <Statistic color="yellow">
                <Statistic.Value>3</Statistic.Value>
                <Statistic.Label>Messages Non Lus</Statistic.Label>
              </Statistic>
              <Statistic color="green">
                <Statistic.Value>49</Statistic.Value>
                <Statistic.Label>Membres</Statistic.Label>
              </Statistic>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Test</Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default General;
