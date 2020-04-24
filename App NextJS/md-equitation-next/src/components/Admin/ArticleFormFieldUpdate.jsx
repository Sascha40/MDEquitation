import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Icon, Header } from 'semantic-ui-react';
import { withFirebase } from '../../firebase';

class ArticleFormFieldUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Form unstackable onSubmit={this.props.onSubmit}>
          <Form.Group inline>
            <Form.Field width={13}>
              <Input
                label={this.props.label}
                onChange={this.props.onChange}
                placeholder={this.props.placeholder}
                value={this.props.value}
                name={this.props.name}
              />
            </Form.Field>
            <Button circular color="yellow" type="submit" icon="edit"></Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default ArticleFormFieldUpdate;
