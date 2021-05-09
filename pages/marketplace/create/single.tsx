import Link from 'next/link';
import React from 'react';
import PageLayout, {
    Topbar,
} from '../../../components/UI/organisms/PageLayout';
import { Routes } from '../../../utils';
import LeftArrow from '../../../assets/left-arrow.svg';
import Button from '../../../components/UI/atoms/Button';
import Switch from '../../../components/UI/atoms/Switch';

const CreateSingleNFT = () => {
    return (
        <PageLayout>
            <Topbar>
                <Link href={Routes.MarketplaceHome}>
                    <div className="items-center flex cursor-pointer">
                        <LeftArrow className="mr-2" />
                        Manage Collectible Type
                    </div>
                </Link>
            </Topbar>
            <div className="text-4xl text-secondary mb-8">
                Create Single collectible
            </div>
            <div className="grid grid-cols-3 relative">
                <div className="col-start-1 col-end-3">
                    <form>
                        <div className="text-secondary w-3/4">Upload file</div>
                        <div className="w-80 border-border border-solid my-8 border p-4 flex justify-between items-center flex-col h-48 rounded-md">
                            PNG <Button>Choose file</Button>
                        </div>
                        <div className="flex justify-between items-start mt-4 w-3/4">
                            <div>
                                <div className="text-secondary">
                                    Put on sale
                                </div>
                                <div className="text-primary">
                                    You'll recieve bids on this item
                                </div>
                            </div>
                            <Switch name="putSale" />
                        </div>
                        <div className="flex justify-between items-start mt-4 w-3/4">
                            <div>
                                <div className="text-secondary">
                                    Instant price sale
                                </div>
                                <div className="text-primary">
                                    Enter the price for which the item will be
                                    instantly sold
                                </div>
                            </div>
                            <Switch name="instantPriceSale" />
                        </div>
                        <div className="flex justify-between items-start mt-4 w-3/4 mb-4">
                            <div>
                                <div className="text-secondary">
                                    Unlock once purchased{' '}
                                </div>
                                <div className="text-primary">
                                    Content will be unlocked after successful
                                    transaction{' '}
                                </div>
                            </div>
                            <Switch name="unlockOncePurchased" />
                        </div>
                        <div className="mb-4 w-3/4">
                            <label
                                className="block text-secondary mb-2"
                                htmlFor="username"
                            >
                                Name
                            </label>
                            <input
                                className="bg-background border-b border-solid appearance-none w-full py-2 px-3 border-gray-800 focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Reedemable T-shirt with logo"
                                required
                            />
                        </div>
                        <div className="mb-4 w-3/4">
                            <label
                                className="block text-secondary mb-2"
                                htmlFor="description"
                            >
                                Description (Optional)
                            </label>
                            <textarea
                                className="bg-background border-b border-solid appearance-none w-full py-2 px-3 border-gray-800 focus:outline-none focus:shadow-outline"
                                id="description"
                                placeholder="After purchasing you'll be able to get the real T-Shirt"
                            />
                        </div>
                        <div className="mb-4 w-3/4">
                            <label
                                className="block text-secondary mb-2"
                                htmlFor="royalties"
                            >
                                Royalties
                            </label>
                            <input
                                className="bg-background border-b border-solid appearance-none w-full py-2 px-3 border-gray-800 focus:outline-none focus:shadow-outline"
                                id="royalties"
                                type="text"
                                placeholder=""
                                required
                            />
                        </div>
                        {/* <div className="mb-4 w-3/4">
                            <label
                                className="block text-secondary mb-2"
                                htmlFor="royalties"
                            >
                                Properties (Optional)
                            </label>
                            <input
                                className="bg-background border-b border-solid appearance-none w-full py-2 px-3 border-gray-800 focus:outline-none focus:shadow-outline"
                                id="royalties"
                                type="text"
                                placeholder=""
                                required
                            />
                        </div> */}
                        <div className="text-primary mt-8">
                            <Button type="submit">Create Item</Button>
                        </div>
                    </form>
                </div>
                <div className="col-start-3 absolute right-0 m-auto">
                    <div className="text-center">Preview</div>
                    <div className="mt-8 border border-solid border-primary h-80 m-8 w-72 bg-white rounded-md flex justify-center items-center text-primary">
                        Preview of your new collectible
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default CreateSingleNFT;
