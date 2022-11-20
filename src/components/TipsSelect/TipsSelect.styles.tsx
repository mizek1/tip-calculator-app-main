import styled from 'styled-components';

export const Tips = styled.section`
  display: grid;
  width: 100%;
  align-items: center;
  justify-items: stretch;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  input {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 0.25rem;
    text-align: right;
    background-color: ${(props) => props.theme.main.neutral1};
    color: ${(props) => props.theme.main.neutral5};
    font-size: 1rem;
    padding: 0.25rem 0.5rem;

    &:focus {
      outline: 2px solid ${(props) => props.theme.main.primary};
    }

    &::placeholder {
      color: ${(props) => props.theme.main.neutral4};
    }
  }

  @media (min-width: 1024px) {
    grid-area: tip;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TipSelect = styled.span`
  display: block;
  padding: 0.5rem;
  background-color: ${({ className, theme }) =>
    className === 'selected' ? theme.main.primary : theme.main.neutral5};
  text-align: center;
  border-radius: 0.25rem;
  color: ${({ className, theme }) =>
    className === 'selected' ? theme.main.natural : theme.main.neutral0};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.main.primary};
    color: ${(props) => props.theme.main.neutral5};
    filter: brightness(1.1);
  }
`;
