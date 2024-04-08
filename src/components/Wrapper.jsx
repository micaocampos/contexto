import React from 'react';
import FormWrapper from './FormWrapper';
import Navbar from './Navbar';
import Form from './Form';
import { UserProvider } from '../UserContext';

const Wrapper = () => {
  return (
    <UserProvider>
      <div>
        <Navbar />
        <FormWrapper>
          <Form />
        </FormWrapper>
      </div>
    </UserProvider>
  );
};

export default Wrapper;