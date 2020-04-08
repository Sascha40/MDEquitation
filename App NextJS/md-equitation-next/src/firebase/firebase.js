import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC37Ha3JlOGZhy8LIABbUXAlGo6dnSOrHU",
  authDomain: "md-equitation.firebaseapp.com",
  databaseURL: "https://md-equitation.firebaseio.com",
  projectId: "md-equitation",
  storageBucket: "md-equitation.appspot.com",
  messagingSenderId: "446753132934",
  appId: "446753132934:web:af194f6468fb72e424dc07",
  measurementId: "G-H8G17B9NLN"
  };


class Firebase {
    constructor() {
      if (!app.apps.length) {
        app.initializeApp(config)};

      this.auth = app.auth();
    }

    /*  Auth  */

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  }

  export default Firebase;