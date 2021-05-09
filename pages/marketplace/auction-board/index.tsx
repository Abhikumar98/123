import React, { useState } from 'react';
import styled from 'styled-components';
import NFTCard from '../../../components/UI/atoms/NFTCard';
import NFTDetailsCard from '../../../components/UI/atoms/NFTDetailsCard';
import PageLayout, {
    Topbar,
} from '../../../components/UI/organisms/PageLayout';
import { sampleData } from '../../../utils';
import Modal from 'react-modal';

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const NFTDetailsModal = styled(Modal)`
    position: absolute;
    height: 30rem;
    width: 50rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
`;

const AuctionBoard = () => {
    const [currentActiveNFT, setCurrentActiveNFT] = useState<string | null>(
        null
    );
    const [nftDetailsModalOpen, setNftDetailsModalOpen] = useState<boolean>(
        false
    );

    const openNFTDetails = (id: string) => {
        setNftDetailsModalOpen(true);
        setCurrentActiveNFT(id);
    };

    const closeModal = () => {
        console.log('called');
        setNftDetailsModalOpen(false);
        setCurrentActiveNFT(null);
    };

    return (
        <PageLayout>
            <Topbar placement="left">
                {' '}
                <div>Welcome to Auction Board</div>
            </Topbar>
            <CardContainer>
                {[...new Array(10)].map((_i, index) => (
                    <NFTCard
                        {...sampleData}
                        id={index.toString()}
                        onClick={openNFTDetails}
                    />
                ))}
            </CardContainer>
            <NFTDetailsModal
                shouldCloseOnEsc
                onRequestClose={closeModal}
                isOpen={nftDetailsModalOpen}
                contentLabel="onRequestClose Example"
                className="nft-details-modal"
                shouldReturnFocusAfterClose={false}
            >
                <NFTDetailsCard {...sampleData} closeModal={closeModal} />
            </NFTDetailsModal>
        </PageLayout>
    );
};

export default AuctionBoard;
