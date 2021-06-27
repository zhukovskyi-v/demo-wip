import React, {useState} from "react";
import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon} from 'mdbreact';
import firebase from "firebase";
import './signin.css';
import {firebaseAuth} from "../../firebase";

export const AuthForm = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        console.log('registered');
        if (email && password) {
            firebaseAuth.createUserWithEmailAndPassword(email, password).then(user => console.log(user)).catch(error => {
                console.log(error.message)
            })
        }
    }
    const signIn = () => {
        console.log('signIn');
        if (email && password) {
            try {
                firebaseAuth.signInWithEmailAndPassword(email, password).then(res => {
                    console.log(res)
                }).catch(error => {
                    console.log(error.message);
                })
            } catch (e) {
                console.log('something went wrong', e.error);
            }
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        isSignup ?
            register(e) :
            signIn(e)
    }
    const signWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log('credential', credential)
                console.log('token', token)
                console.log('user', user)
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
        });
    }

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6" className='m-auto'>
                    <MDBCard>
                        <div className="header pt-3 aqua-gradient-rgba">
                            <MDBRow className="d-flex justify-content-center">
                                <h3 className="white-text mb-3 pt-3 font-weight-bold">
                                    {isSignup ? 'Sign up with: ' : 'Log in with:'}
                                </h3>
                            </MDBRow>
                            <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                                <button onClick={signWithGoogle} className="fa-lg p-2 m-2 gplus-ic">
                                    <MDBIcon fab className="fa-google white-text fa-lg"/>
                                </button>
                            </MDBRow>
                        </div>
                        <form action="#" onSubmit={handleSubmit}>
                            <MDBCardBody className="mx-4 mt-4">
                                <MDBInput label="Your email" getValue={setEmail} group type="text" validate/>
                                <MDBInput
                                    label="Your password"
                                    group
                                    type="password"
                                    validate
                                    containerClass="mb-0"
                                    getValue={setPassword}
                                />
                                <p className="font-small grey-text d-flex justify-content-end">
                                    Forgot
                                    <a
                                        href="#!"
                                        className="dark-grey-text ml-1 font-weight-bold"
                                    >
                                        Password?
                                    </a>
                                </p>
                                <MDBRow className="d-flex align-items-center mb-4 mt-5">
                                    <MDBCol md="5" className="d-flex align-items-start">
                                        <div className="text-center">
                                            <MDBBtn
                                                color="grey"
                                                rounded
                                                type="button"
                                                className="z-depth-1a"
                                                onClick={handleSubmit}
                                            >
                                                {isSignup ? 'Sign up' : 'Log in'}
                                            </MDBBtn>
                                        </div>
                                    </MDBCol>
                                    <MDBCol md="7" className="d-flex justify-content-end">
                                        <p className="font-small grey-text mt-3">
                                            Don't have an account?
                                            <button
                                                className="dark-grey-text ml-1 font-weight-bold"
                                                onClick={() => setIsSignup(prev => !prev)}
                                            >
                                                {isSignup ? 'Sign in' : 'Sign up'}
                                            </button>
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </form>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};