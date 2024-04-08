import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Navbar = () => {
  const { username } = useContext(UserContext);

  return <div>¡Hola, {username}!</div>;
};

export default Navbar;