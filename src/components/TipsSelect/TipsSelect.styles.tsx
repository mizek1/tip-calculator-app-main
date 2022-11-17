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
    background-color: hsl(189, 41%, 97%);
    color: hsl(183, 100%, 15%);
    font-size: 1rem;
    padding: 0.25rem 0.5rem;

    &:focus {
      outline: 2px solid hsl(172, 67%, 45%);
    }

    &::placeholder {
      color: hsl(186, 14%, 43%);
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
  background-color: ${({ className }) =>
    className === 'selected' ? 'hsl(172, 67%, 45%)' : 'hsl(183, 100%, 15%)'};
  text-align: center;
  border-radius: 0.25rem;
  color: ${({ className }) =>
    className === 'selected' ? 'hsl(183, 100%, 15%)' : 'hsl(0, 0%, 100%)'};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%);
    filter: brightness(1.1);
  }
`;
