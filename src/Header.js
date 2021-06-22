// src/components/ui/Header.js

import React from 'react';
import styled from 'styled-components';
import AinizeLogo from './static/Logo.svg';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 24px 0;
    background-color: #ffffff;
`;

const Logo = styled.img`
    position: relative;
    width: 180px;
    left: 12px;
    object-fit: contain;
`;


class Header extends React.Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return (
            <Wrapper>
                <Logo
                    src={AinizeLogo}
                    onClick={() => window.open('https://ainize.ai/', '_blank')} />
            </Wrapper>
        );
    }
}

export default Header;
