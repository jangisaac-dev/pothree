import React from 'react';
import styled from 'styled-components';
import icon from '../../images/icon.png';
import typo from '../../images/typo.png';

const SignUpHeader = () => {
    return (
        <Container>
            <HeaderLogos>
                <img src={icon} alt='' width={60} height={60}/>
                <img src={typo} alt='' width={80} height={20}/>
            </HeaderLogos>
        </Container>
    );
};

export default SignUpHeader;

const Container = styled.div`
    width: 100%;
`

const HeaderLogos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`