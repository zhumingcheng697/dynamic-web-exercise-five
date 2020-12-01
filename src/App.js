import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import firebase from "firebase/app";
import "firebase/auth";

import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import UserProfile from "./containers/UserProfile";

import Header from "./components/Header";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "dynamic-web-exercise-five-mz.firebaseapp.com",
  databaseURL: "https://dynamic-web-exercise-five-mz.firebaseio.com",
  projectId: "dynamic-web-exercise-five-mz",
  storageBucket: "dynamic-web-exercise-five-mz.appspot.com",
  messagingSenderId: "689657591490",
  appId: "1:689657591490:web:68ee4d98fea645b7902d5b",
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  function logIn(e) {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget["current-password"].value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        setLoggedIn(true);
      })
      .catch((e) => {
        console.error(e);
        setLoggedIn(false);
      });
  }

  function logOut() {}

  function createAccount(e) {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget["new-password"].value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        setLoggedIn(true);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  return (
    <div className="App">
      <Header loggedIn={loggedIn} logOut={logOut} />
      <Router>
        <Route exact path="/login">
          <Login logIn={logIn} />
        </Route>
        <Route exact path="/create-account">
          <CreateAccount createAccount={createAccount} />
        </Route>
        <Route exact path="/">
          <UserProfile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
