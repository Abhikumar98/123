export enum AppSections {
    Marketplace = 'marketplace',
}

export const Routes = {
    MarketplaceHome: `/${AppSections.Marketplace}`,
    NFTDetails: `/${AppSections.Marketplace}/nft/{id}`,
    CreateNFT: `/${AppSections.Marketplace}/create`,
    CreateSingleNFT: `/${AppSections.Marketplace}/create/single`,
    CreateMultipleNFT: `/${AppSections.Marketplace}/create/multiple`,
    MarketplaceFAQ: `/${AppSections.Marketplace}/faq`,
    MarketplaceAbout: `/${AppSections.Marketplace}/about`,
    AuctionBoard: `/${AppSections.Marketplace}/auction-board`,
};

export const sampleData = {
    image:
        'https://images.unsplash.com/photo-1620203492457-0bf1274ba4b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1434&q=80',
    name: '#047 Craft Panda - Logan',
    price: '0.8 ETH',
    bid: '0.085 ETH',
    likes: '123',
};
