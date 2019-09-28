import React from 'react';
import { Box, Text, Heading, Image } from 'gestalt';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >
    <NavLink to="/signin">
      <Text size="x1" color="white">Sign In</Text>
    </NavLink>

    <NavLink to="/">
      <Box display="flex" alignItems="center">
        <Box margin={2} height={50} width={50}>
          <Image
            src="./icons/logo.svg"
            alt="BrewHaha Logo"
            naturalHeight={1}
            naturalWidth={1}
          />
        </Box>
        <Heading size="xs" color="orange">
          BrewHaha
        </Heading>
      </Box>
    </NavLink>

    <NavLink to="/signup">
      <Text size="x1" color="white">Sign Up</Text>
    </NavLink>
  </Box>
);

export default Navbar;