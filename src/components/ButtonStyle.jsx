// ButtonStyle.js
import React from 'react';
import styled, { css } from 'styled-components';

export default function ButtonStyle({ title, variant, disabled }) {
  return (
    <StyledButton variant={variant} disabled={disabled}>
      {title}
    </StyledButton>
  );
}

const variantStyles = {
  contained: css`
    background-color: #1976d2;
    color: white;
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

    &:hover:not(:disabled) {
      background-color: #1565c0;
    }

    &:active:not(:disabled) {
      background-color: #0d47a1;
    }

    &:disabled {
      background-color: #cfd8dc;
      color: #ffffff;
      cursor: not-allowed;
    }
  `,
  outlined: css`
    background-color: transparent;
    color: #1976d2;
    border: 2px solid #1976d2;

    &:hover:not(:disabled) {
      background-color: #e3f2fd;
    }

    &:active:not(:disabled) {
      background-color: #bbdefb;
    }

    &:disabled {
      color: #b0bec5;
      border-color: #cfd8dc;
      cursor: not-allowed;
    }
  `,
  Warning: css`
    background-color: #fb8c00;
    color: white;
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

    &:hover:not(:disabled) {
      background-color: #f57c00;
    }

    &:active:not(:disabled) {
      background-color: #ef6c00;
    }

    &:disabled {
      background-color: #ffe0b2;
      color: white;
      cursor: not-allowed;
    }
  `,
  Danger: css`
    background-color: #f44336;
    color: white;
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

    &:hover:not(:disabled) {
      background-color: #e53935;
    }

    &:active:not(:disabled) {
      background-color: #c62828;
    }

    &:disabled {
      background-color: #ef9a9a;
      cursor: not-allowed;
    }
  `,
};

const StyledButton = styled.button`
  padding: 10px 22px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  cursor: pointer;

  ${(props) => variantStyles[props.variant] || variantStyles['contained']}
`;

