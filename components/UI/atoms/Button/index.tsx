import React from 'react';
import { IButton } from './interface';
import styled from 'styled-components';

const ButtonContainer = styled.button<IButton>`
    background: ${({ theme }) => theme.colors.background};
    padding: 0.5rem;
    min-width: 10rem;

    padding: ${(props) => (props.rounded ? '0.5rem' : '0.25rem 1rem')};
    width: max-content;
    border-radius: ${(props) => (props.rounded ? '50%' : '6px')};
    position: relative;
    display: flex;
    align-items: center;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    &::before {
        content: '';
        opacity: ${(props) => (props.disabled ? '0' : '1')};
        border-radius: ${(props) => (props.rounded ? '50%' : '6px')};
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 3px 3px 4px 0px #bababa, -3px -4px 4px white;
        transition: all 200ms ease-in-out;
    }

    &::after {
        content: '';
        opacity: 0;
        border-radius: ${(props) => (props.rounded ? '50%' : '6px')};
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: none;
        background: transparent;
        transition: all 100ms ease-in-out;
    }

    &:hover {
        &::before {
            box-shadow: var(2px 2px 4px #bababa, -2px -2px 4px #ffffff ;);
        }
    }

    ${(props) =>
        props.disabled
            ? ''
            : `&:active {
		&::before {
			box-shadow: none;
			opacity: 0;
		}
		&::after {
			opacity: 1;
			box-shadow: inset 3px 3px 4px 0px #bababa,
				inset -3px -3px 4px #f9f9f9;
		}
	}`}

    &:focus {
        outline: none;
    }

    color: ${({ theme }) => theme.colors.secondary};
    justify-content: center;
    height: 2.5rem;
`;

const Button: React.FC<IButton> = (props) => {
    const { type, children, as, ref, className, ...rest } = props;

    return (
        <ButtonContainer {...rest} className={`m-2 ${className}`}>
            {children}
        </ButtonContainer>
    );
};

export default Button;
