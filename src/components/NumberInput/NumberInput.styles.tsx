import styled from 'styled-components';

interface InputProps {
  readonly iconUrl?: string;
}

export const Input = styled.input<InputProps>`
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  padding: 0.375rem 0.75rem 0.375rem 1.75rem;
  ${({ iconUrl }) =>
    iconUrl && `background: url(${iconUrl}) no-repeat 0.75rem center`};
  background-color: ${(props) => props.theme.main.neutral1};
  color: ${(props) => props.theme.main.neutral5};
  text-align: right;

  &:focus {
    outline: 2px solid ${(props) => props.theme.main.primary};
  }

  &::placeholder {
    color: ${(props) => props.theme.main.neutral4};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
