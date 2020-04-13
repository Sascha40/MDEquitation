import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import Router from "next/router";

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
      this.db = app.firestore();
      this.storage = app.storage();
      this.storageRef = this.storage.ref();
    }

    /*  Auth  */

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => {
      this.auth.signOut();
      Router.push('/')
    }
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);

    user = uid => this.db.doc(`users/${uid}`);
    users = () => this.db.collection('users');

    article = articleid => this.db.doc(`articles/${articleid}`);
    articles = () => this.db.collection('articles');

  

    onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .get()
          .then(snapshot => {
            const dbUser = snapshot.data();
            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }
            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };
            next(authUser);
          });
      } else {
        fallback();
      }
    });
  }

  export default Firebase;