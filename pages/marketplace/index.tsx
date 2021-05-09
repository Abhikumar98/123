import Link from 'next/link';
import Button from '../../components/UI/atoms/Button';
import useAuth from '../../hooks/useAuth';
import { Routes } from '../../utils';
import Tabs, { TabPane } from 'rc-tabs';
import styled from 'styled-components';
import NFTCard from '../../components/UI/atoms/NFTCard';
import React, { useState } from 'react';
import PageLayout, { Topbar } from '../../components/UI/organisms/PageLayout';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Modal from 'react-modal';
import NFTDetailsCard from '../../components/UI/atoms/NFTDetailsCard';

const TabsWrapper = styled(Tabs)`
    position: relative;
    .rc-tabs-nav {
        position: sticky;
        top: 4rem;
        background: ${({ theme }) => theme.colors.background};
        .rc-tabs-nav-wrap {
            .rc-tabs-nav-list {
                display: flex;
                .rc-tabs-tab {
                    width: 10rem;
                    color: ${({ theme }) => theme.colors.primary};
                    .rc-tabs-tab-btn {
                        width: fit-content;
                        &:hover {
                            cursor: pointer;
                        }
                    }
                    &.rc-tabs-tab-active {
                        color: ${({ theme }) => theme.colors.secondary};
                        font-weight: ${({ theme }) => theme.weight[1]};
                    }
                }
            }
        }
    }
    .rc-tabs-content-holder {
    }
`;

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
    z-index: 11;
    &::after {
        content: ' ';
    }
    &::before {
        content: ' ';
    }
`;

const Marketplace = () => {
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
        setNftDetailsModalOpen(false);
        setCurrentActiveNFT(null);
    };

    const sampleNFTData = {
        image:
            'https://images.unsplash.com/photo-1620203492457-0bf1274ba4b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1434&q=80',
        name: '#047 Craft Panda - Logan',
        price: '0.8 ETH',
        bid: '0.085 ETH',
        likes: '123',
    };

    return (
        <PageLayout>
            <Topbar placement="right">
                <Link href={Routes.CreateNFT}>
                    <Button>Create NFT</Button>
                </Link>
            </Topbar>
            <TabsWrapper defaultActiveKey="1" onChange={(v) => console.log(v)}>
                <TabPane key="1" tab="Your NFTs">
                    <CardContainer>
                        {[...new Array(10)].map((_i, index) => (
                            <NFTCard
                                {...sampleNFTData}
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
                        <NFTDetailsCard
                            {...sampleNFTData}
                            closeModal={closeModal}
                        />
                    </NFTDetailsModal>
                </TabPane>
                <TabPane key="2" tab="Collectables">
                    <CardContainer>
                        {[...new Array(10)].map((_i, index) => (
                            <NFTCard
                                {...sampleNFTData}
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
                        <NFTDetailsCard
                            {...sampleNFTData}
                            closeModal={closeModal}
                        />
                    </NFTDetailsModal>
                </TabPane>
                <TabPane key="3" tab="Bids">
                    Bids
                </TabPane>
            </TabsWrapper>
        </PageLayout>
    );
};

export default useAuth(Marketplace);
