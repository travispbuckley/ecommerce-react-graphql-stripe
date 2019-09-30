import React, { Component } from 'react';
import { Container, Box, Heading } from 'gestalt';
import './App.css';
import Strapi from 'strapi-sdk-javascript/build/main';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class App extends Component {
  state = {
    brands: []
  };

  async componentDidMount() {
    try {
      // request takes in verb, endpoint, and query
      const response = await strapi.request('POST', '/graphql', {
        data: {
          query: `query {
            brands {
              _id
              name
              description
              image {
                url
              }
            }
          }` 
        }
      });
      
      this.setState({ brands: response.data.brands });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <Container>
        {/* Brands */}
        <Box
          display="flex"
          justifyContent="center"
          marginBottom={2}
        >
          <Heading color="midnight" size="md">
            Brew Brands
          </Heading>
        </Box>
      </Container>
    );
  }
}

export default App;
