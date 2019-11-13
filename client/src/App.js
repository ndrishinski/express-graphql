import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Launches from './components/Launches';

import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
      <ApolloProvider client={client}>
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={'https://cdn.dribbble.com/users/610788/screenshots/5157282/spacex.png'} alt={'whatup'} style={{height: 250, width: 300}} />
          </div>
          <Launches />
        </div>
      </ApolloProvider>
  );
}

export default App;
