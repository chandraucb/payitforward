import React, { useState, useEffect } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Organization from './pages/Organization';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Project from './pages/Project';
import Auth from './utils/auth';
import Footer from './components/Footer/index';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginLogout = (logoutLogin) => {
    setIsLoggedIn(logoutLogin);
  };
  useEffect(() => {
    Auth.loggedIn() ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  if (isLoggedIn) {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-center align-center min-100-vh bg-primary">
            <Header isLoggedIn={isLoggedIn} handleLoginLogout={handleLoginLogout} />
            <Routes>
              <Route
                path="/"
                element={<Profile />}
              />
              <Route
                path="/Profile"
                element={<Profile />}
              />
            <Route
              path="/Project"
              element={<Project />}
            />              
              <Route
                path="/Organization/:organizationId"
                element={<Organization />}
              />
              <Route
                path="/Organizations"
                element={<Organization />}
              />

              <Route path="*" element={<Profile />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  } else {

    return (
    <ApolloProvider client={client}>
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Header isLoggedIn={isLoggedIn} handleLoginLogout={handleLoginLogout} />
        <Routes>
          <Route
            path="/"
            element={<Login />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
              path="/Signup"
              element={<Signup />}
            />
          <Route path="*" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>);
    
  }
}

export default App;
