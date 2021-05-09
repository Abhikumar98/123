import Link from 'next/link';
import React from 'react';
import Button from '../../../components/UI/atoms/Button';
import PageLayout, {
    Topbar,
} from '../../../components/UI/organisms/PageLayout';
import { Routes } from '../../../utils';
import LeftArrow from '../../../assets/left-arrow.svg';
import styled from 'styled-components';
import MultipleNFT from '../../../assets/multiple-nft.svg';
import SingleNFT from '../../../assets/single-nft.svg';

const CreateNFTSVGWrapper = styled.div`
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 1rem;
    width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 8px;

    &:hover {
        cursor: pointer;
    }
`;

const CreateNFT = () => {
    return (
        <PageLayout>
            <Topbar>
                <Link href={Routes.MarketplaceHome}>
                    <div className="items-center flex cursor-pointer">
                        <LeftArrow className="mr-2" />
                        Go back
                    </div>
                </Link>
            </Topbar>
            <div className="text-4xl text-secondary mb-4">
                Create collectible
            </div>
            <div className="text-primary w-3/4">
                Choose “Single” if you want your collectible to be one of a kind
                or “Multiple” if you want to sell one collectible multiple times
            </div>
            <div className="flex justify-evenly items-center mt-4">
                <Link href={Routes.CreateSingleNFT}>
                    <CreateNFTSVGWrapper>
                        <SingleNFT className="mt-2" />
                        <div className="mt-2">SINGLE</div>
                    </CreateNFTSVGWrapper>
                </Link>
                <Link href={Routes.CreateMultipleNFT}>
                    <CreateNFTSVGWrapper>
                        <MultipleNFT className="mt-2" />
                        <div className="mt-2">MULTIPLE</div>
                    </CreateNFTSVGWrapper>
                </Link>
            </div>
            <div className="text-primary mt-8">
                We do not own your private keys and cannot access your funds
                without your confirmation
            </div>
        </PageLayout>
    );
};

export default CreateNFT;
