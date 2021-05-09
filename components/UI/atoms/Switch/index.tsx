import React from 'react';
import styled from 'styled-components';

const SwitchWrapper = styled.div<React.HTMLProps<HTMLInputElement>>`
    position: relative;
    .toggle-checkbox:checked {
        @apply: right-0 border-green-400;
        right: 0;
        border-color: ${({ theme }) => theme.colors.primary};
    }
    .toggle-checkbox:checked + .toggle-label {
        @apply: bg-green-400;
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;

const Switch: React.FC<React.HTMLProps<HTMLInputElement>> = ({
    children,
    ...props
}) => {
    const { type, as, ref, className, name, ...rest } = props;
    return (
        <SwitchWrapper
            {...rest}
            className={`relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ${className}`}
            type={type}
        >
            <input
                type="checkbox"
                name={name}
                id={name}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-gray-300 border-4 appearance-none cursor-pointer"
            />
            <label
                htmlFor={name}
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            >
                {children}
            </label>
        </SwitchWrapper>
    );
};

export default Switch;
