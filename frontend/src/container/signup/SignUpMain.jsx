import React from 'react';
import SignUpPage from './SignUpPage';
import SignUpHeader from './SignUpHeader';
import styled from 'styled-components';

const SignUpMain = () => {
    return (
        <Wrapper>
            <SignUpHeader/>
            <SignUpPage/>
        </Wrapper>
    );
};

export default SignUpMain;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

