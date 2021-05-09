import React from 'react';
import styled from 'styled-components';

const TopbarContainer = styled.div`
    background: ${({ theme }) => theme.colors.background};
`;

interface TopBarProps {
    readonly placement?: 'left' | 'right';
}

export const Topbar: React.FC<TopBarProps> = ({
    children,
    placement = 'left',
}) => {
    return (
        <TopbarContainer
            className={`h-16 flex ${
                placement === 'right' ? 'justify-end' : 'justify-start'
            } sticky top-0 z-1 `}
        >
            {children}
        </TopbarContainer>
    );
};

const PageLayout: React.FC = ({ children }) => {
    return <div className="">{children}</div>;
};

export default PageLayout;
