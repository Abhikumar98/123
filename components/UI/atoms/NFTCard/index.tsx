import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Like from '../../../../assets/heart.svg';

interface Props {
    readonly image: string;
    readonly name: string;
    readonly price: string;
    readonly bid: string;
    readonly likes: string;
    readonly id: string;
    readonly onClick: (id: string) => void;
}

const CardContainer = styled.div`
    height: 22rem;
    width: 20rem;
    padding: 16px;
    background: ${({ theme }) => theme.colors.white};
    margin: 8px;
    border-radius: 8px;

    .nft-image {
        height: 15.5rem;
        border-radius: 4px;
    }
    color: ${({ theme }) => theme.colors.secondary};

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
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

const NFTCard: React.FC<Props> = ({
    image,
    name,
    price,
    bid,
    likes,
    id,
    onClick,
}) => {
    return (
        <CardContainer>
            <div onClick={() => onClick(id)} className="cursor-pointer">
                <img className="nft-image" src={image} />
                <div className="my-1">{name}</div>
                <div className="my-1">{price}</div>
            </div>
            <div className="footer">
                <div className="bid-price">Bid {bid}</div>
                <div className="likes">
                    <Like className="mr-2" />
                    {likes}
                </div>
            </div>
        </CardContainer>
    );
};

export default NFTCard;
