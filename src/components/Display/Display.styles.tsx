import styled from 'styled-components';

export const Amounts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 1rem 1rem 1rem;
  background-color: hsl(183, 100%, 15%);
  border-radius: 0.5rem;
  gap: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      & > span:first-child {
        display: block;
        font-size: 0.625rem;
        color: hsl(0, 0%, 100%);
      }

      & > span:last-child {
        display: block;
        font-size: 0.5rem;
        color: hsl(184, 14%, 56%);
      }
    }
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: hsl(172, 67%, 45%);
  }

  @media (min-width: 1024px) {
    grid-area: display;
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: hsl(183, 100%, 15%);
  background-color: hsl(172, 67%, 45%);
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  justify-self: end;
  ${({ disabled }) => disabled && `opacity: 0.1;`};
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.25) saturate(1.25);
  }
`;
