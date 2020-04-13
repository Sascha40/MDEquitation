import React from 'react';
import Router from 'next/router';
import { withFirebase } from '../firebase';
import AuthUserContext from './context';
import { compose } from 'recompose';

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          if (!condition(authUser)) {
            Router.push('/');
          }
        },
        () => Router.push('/'),
      );
    }

      componentWillUnmount() {
        this.listener;
      }


    render() {
        return(
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
        )
    }
  }
  return compose(withFirebase)(WithAuthorization);
};
export default withAuthorization;