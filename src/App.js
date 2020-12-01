import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
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
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      setLoggedIn(!!user);
      setUserInfo(user || null);
      setLoading(false);
    });
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

  function logOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setLoggedIn(false);
      })
      .catch((e) => {
        console.error(e);
        setLoggedIn(true);
      });
  }

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

  if (loading) {
    return null;
  }

  return (
    <div className="App">
      <Header loggedIn={loggedIn} logOut={logOut} />
      <Router>
        <Route exact path="/login">
          {/* If someone is logged in, do not take them to login page - take them to user profile */}
          {!loggedIn ? <Login logIn={logIn} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/create-account">
          {/* If someone is logged in, do not take them to create account page - take them to user profile */}
          {!loggedIn ? (
            <CreateAccount createAccount={createAccount} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/">
          {/* If someone is not logged in, do not take them to user profile page - take them to login page */}
          {!loggedIn ? (
            <Redirect to="/login" />
          ) : (
            <UserProfile userInfo={userInfo} />
          )}
        </Route>
      </Router>
    </div>
  );
}

export default App;
