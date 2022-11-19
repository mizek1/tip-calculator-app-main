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
  background-color: hsl(189, 41%, 97%);
  color: hsl(183, 100%, 15%);
  text-align: right;

  &:focus {
    outline: 2px solid hsl(172, 67%, 45%);
  }

  &::placeholder {
    color: hsl(186, 14%, 43%);
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
