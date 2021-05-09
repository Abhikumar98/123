import { useRouter } from 'next/router';
import React from 'react';
import Header from '../components/UI/organisms/Header';
import useSidepanel from '../hooks/useSidepanel';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import '../styles/globals.css';

const PageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 5.5rem 1fr;
    grid-gap: 2rem;
    background: ${({ theme }) => theme.colors.background};
`;

const SidepanelPageContainer = styled.div`
    height: calc(100vh - 8rem);
    padding: 0 6rem;
    overflow-y: auto;
`;

const RoutePageContainer = styled.div`
    margin-left: 22rem;
    height: 100%;
    position: relative;
`;

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    const Sidepanel = useSidepanel(router.pathname);

    return (
        <ThemeProvider theme={theme}>
            <PageContainer>
                <Header />
                <SidepanelPageContainer>
                    <div className="h-full flex flex-col fixed">
                        <div className="text-center h-16 text-4xl">Hi User</div>
                        <Sidepanel />
                    </div>
                    <RoutePageContainer>
                        <Component {...pageProps} />
                    </RoutePageContainer>
                </SidepanelPageContainer>
            </PageContainer>
        </ThemeProvider>
    );
}

export default MyApp;
