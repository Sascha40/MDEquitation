import React from 'react';
import Firebase from './firebase'

const FirebaseContext = React.createContext(null);



export const withFirebaseProvider = Component => props => (
    <FirebaseContext.Provider value={new Firebase()}>
        <Component {...props} />
    </FirebaseContext.Provider>
      );


export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;