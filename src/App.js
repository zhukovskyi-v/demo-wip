import React, {useEffect, useState} from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import {Header} from "./component/Header/Header";
import {AuthForm} from "./component/AuthForm/AuthForm";
import {Generate} from "./component/generate";
import {firebaseAuth} from "./firebase";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/auth">
                        <AuthForm/>
                    </Route>
                    <Route path="/g-password">
                        <Generate/>
                    </Route>
                    <Route path="/">
                        <h1>Home</h1>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
