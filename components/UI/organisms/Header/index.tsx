import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';

const HeaderContainer = styled.div`
    height: 4rem;
    padding: 0 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(
        180deg,
        rgba(248, 250, 255, 1) 0%,
        rgba(221, 230, 255, 1) 100%
    );
`;

const Header = () => {
    return (
        <HeaderContainer>
            <span className="yoyo">Logo</span>
            <Button>Button</Button>
        </HeaderContainer>
    );
};

export default Header;
