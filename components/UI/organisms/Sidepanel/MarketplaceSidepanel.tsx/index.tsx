import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Routes } from '../../../../../utils';
import Button from '../../../atoms/Button';
import SidepanelContainer from '../index';

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
`;

const MarketplaceSidepanel = () => {
    return (
        <SidepanelContainer>
            <ButtonContainer>
                <Link href={Routes.MarketplaceHome}>
                    <Button>My Account</Button>
                </Link>
                <Link href={Routes.AuctionBoard}>
                    <Button>Auction Board</Button>
                </Link>
                <Link href={Routes.MarketplaceFAQ}>
                    <Button>FAQ</Button>
                </Link>
                <Link href={Routes.MarketplaceAbout}>
                    <Button>About</Button>
                </Link>
            </ButtonContainer>
        </SidepanelContainer>
    );
};

export default MarketplaceSidepanel;
