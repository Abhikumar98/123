import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Like from '../../../../assets/heart.svg';
import Close from '../../../../assets/close.svg';

interface Props {
    readonly image: string;
    readonly name: string;
    readonly price: string;
    readonly bid: string;
    readonly likes: string;
    readonly closeModal: () => void;
}

const CardContainer = styled.div`
    padding: 16px;
    height: 100%;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 8px;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr;

    img {
        border-radius: 4px;
    }
    color: ${({ theme }) => theme.colors.secondary};

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};
        .bid-price {
            font-size: ${({ theme }) => theme.size[0]};
            color: ${({ theme }) => theme.colors.primary};
        }
        .likes {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

const NFTInfoContainer = styled.div`
    background: ${({ theme }) => theme.colors.white};
    padding: 0 16px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

const NFTDescriptionContainer = styled.div`
    background: ${({ theme }) => theme.colors.white};
    padding: 16px;
    height: 14rem;
    overflow-y: auto;
`;
const NFTFooterContainer = styled.div`
    height: 7.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    padding: 8px 16px;
    background: ${({ theme }) => theme.colors.white};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;

const NFTDetailsCard: React.FC<Props> = ({
    image,
    name,
    price,
    bid,
    likes,
    closeModal,
}) => {
    return (
        <CardContainer>
            <div className="bg-gray-100 rounded-lg flex items-center">
                <img src={image} />
            </div>
            <div>
                <NFTInfoContainer>
                    <div className="pt-4">
                        <div className="my-1 flex items-center justify-between">
                            <span className="nft-details-title">{name}</span>
                            <span>
                                <Close
                                    height={24}
                                    width={24}
                                    className="cursor-pointer"
                                    onClick={closeModal}
                                />
                            </span>
                        </div>
                        <div className="my-1">{price}</div>
                    </div>
                    <div className="footer">
                        <div className="bid-price">{bid}</div>
                        <div className="likes">
                            <Like className="mr-2" /> {likes}
                        </div>
                    </div>
                </NFTInfoContainer>
                <NFTDescriptionContainer>
                    Donec sollicitudin molestie malesuada. Vivamus suscipit
                    tortor eget felis porttitor volutpat. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Donec velit neque, auctor sit amet aliquam
                </NFTDescriptionContainer>
                <NFTFooterContainer>
                    <div>Highest bid by NFTArts</div>
                    <div>0.085 WETH $192.65 for 2 editions</div>
                    <div>
                        <Button className="ml-0">Ready for Sell</Button>
                    </div>
                </NFTFooterContainer>
            </div>
        </CardContainer>
    );
};

export default NFTDetailsCard;
