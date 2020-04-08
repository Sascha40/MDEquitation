{/*
import React from 'react'
import Link from 'next/link'
import Head from "next/head"
import { auth, firebase } from '../firebase/index'


class Home extends React.Component {
    handleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        auth.signInWithPopup(provider)
            .then(() => {
                alert('You are signed In');
            })
            .catch(err => {
                alert('OOps something went wrong check your console');
                console.log(err);
            });
    }
    handleLogout = () => {
        auth.signOut().then(function () {
            alert('Logout successful');
        }).catch(function (error) {
            alert('OOps something went wrong check your console');
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <Head title="Home"/>
                <div className="hero">
                    <h1 className="title">Welcome to Firebase Authentication in Next.js!</h1>
                    <p className="description">
                        Click on the Dashboard link to visit the dashboard page.
                    </p>
                    <div className="row">
                        <Link href="/compte">
                            <a className="card">
                                <h3>Go to Dashboard&rarr;</h3>
                                <p>Visit Dashboard</p>
                            </a>
                        </Link>
                        <button onClick={this.handleSignIn}>Sign In using google</button>
                        <button onClick={this.handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;*/}
