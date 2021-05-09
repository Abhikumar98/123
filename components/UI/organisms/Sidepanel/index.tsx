import React from 'react';
import styled from 'styled-components';

const SidepanelWrapper = styled.div`
    width: 16rem;
    height: 30rem;
    border-right: 4px solid ${({ theme }) => theme.colors.primary};
`;

const SidepanelContainer: React.FC = (props) => {
    return <SidepanelWrapper>{props.children}</SidepanelWrapper>;
};

export default SidepanelContainer;
