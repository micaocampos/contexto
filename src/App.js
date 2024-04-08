import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
ReactDOM.render(
  function App() {
    return (
        <Wrapper>
            <Navbar/>
            <FormWrapper/>
        </Wrapper>
    );
}    
);