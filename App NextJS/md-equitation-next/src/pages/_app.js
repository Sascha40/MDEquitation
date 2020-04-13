import 'react-awesome-slider/dist/styles.css';
import "../media/styles.css";
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { withAuthentication } from '../session';
import { withFirebaseProvider } from '../firebase'
import { compose } from "recompose";


class MyApp extends App {   
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <div>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link
                        href="https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap"
                        rel="stylesheet"
                        key="google-font-nunito"
                    />
                    <link rel="stylesheet"
                          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                </Head>

                    <Component {...pageProps}/>

                <style global jsx>
                    {
                    `
                    body {
                        font-family: 'Nunito Sans', sans-serif;
                        }
                    `
                    }
                </style>
            </div>
        );
    }
}

const MyAppWithAuth = compose(withFirebaseProvider, withAuthentication)(MyApp)
export default MyAppWithAuth;