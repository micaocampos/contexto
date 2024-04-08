import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Form = () => {
  const { setUsername } = useContext(UserContext);
  
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <input type="text" placeholder="Cambiar nombre de usuario" onChange={handleChange} />
  );
};

export default Form;