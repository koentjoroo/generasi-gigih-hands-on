import React from 'react'
import { Flex, Link } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex align="center" justify="center">
      <Link as={NavLink} mx={2} p={4} to="/trending">Trending</Link>
      <Link as={NavLink} mx={2} p={4} to="/search">Search</Link>
    </Flex>
  )
}

export default Navbar
