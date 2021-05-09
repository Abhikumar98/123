import React from 'react';
import styled from 'styled-components';

interface Props {
    diagonal: 'left' | 'right';
}

const RoundedBorderTextWrapper = styled.div<Props>`
    background: white;
    padding: 2rem;

    border-top-left-radius: ${({ diagonal }) =>
        diagonal === 'left' ? '2rem' : ''};
    border-bottom-right-radius: ${({ diagonal }) =>
        diagonal === 'left' ? '2rem' : ''};

    border-bottom-left-radius: ${({ diagonal }) =>
        diagonal === 'right' ? '2rem' : ''};
    border-top-right-radius: ${({ diagonal }) =>
        diagonal === 'right' ? '2rem' : ''};

    margin-bottom: 2rem;
`;

const About = () => {
    return (
        <>
            <div className="h-16" />
            <RoundedBorderTextWrapper diagonal="left">
                <div>About craft</div>
                <div>
                    Proin eget tortor risus. Nulla porttitor accumsan tincidunt.
                    Vivamus magna justo, lacinia eget consectetur sed, convallis
                    at tellus. Curabitur arcu erat, accumsan id imperdiet et,
                    porttitor at sem. Curabitur aliquet quam id dui posuere
                    blandit. Donec rutrum congue leo eget malesuada. Sed
                    porttitor lectus nibh. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis at tellus.
                </div>
            </RoundedBorderTextWrapper>
            <RoundedBorderTextWrapper diagonal="right">
                <div>What is craft ?</div>
                <div>
                    Proin eget tortor risus. Nulla porttitor accumsan tincidunt.
                    Vivamus magna justo, lacinia eget consectetur sed, convallis
                    at tellus. Curabitur arcu erat, accumsan id imperdiet et,
                    porttitor at sem. Curabitur aliquet quam id dui posuere
                    blandit. Donec rutrum congue leo eget malesuada. Sed
                    porttitor lectus nibh. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis at tellus.
                </div>
            </RoundedBorderTextWrapper>
        </>
    );
};

export default About;
