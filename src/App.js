import React from 'react';
import Courses from './Courses';
// import logo from './logo.svg';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';

const client = new ApolloClient({
  uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="null">React and GraphQL - App</a>
      </nav>
      <div>
      <Courses />
      </div>
    </div>
  </ApolloProvider>
)




export default App;
