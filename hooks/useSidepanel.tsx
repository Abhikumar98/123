import MarketplaceSidepanel from '../components/UI/organisms/Sidepanel/MarketplaceSidepanel.tsx';
import { Routes } from '../utils';

const useSidepanel = (route: string) => {
    const currentPage = route.split('/').slice(0, 2).join('');

    switch (currentPage) {
        case Routes.MarketplaceHome: {
            return MarketplaceSidepanel;
        }
        default:
            return MarketplaceSidepanel;
    }
};

export default useSidepanel;
