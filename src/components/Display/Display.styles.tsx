import styled from 'styled-components';

export const Amounts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 1rem 1rem 1rem;
  background-color: ${(props) => props.theme.main.neutral5};
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
        color: ${(props) => props.theme.main.neutral0};
      }

      & > span:last-child {
        display: block;
        font-size: 0.5rem;
        color: ${(props) => props.theme.main.neutral3};
      }
    }
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: ${(props) => props.theme.main.primary};
  }

  @media (min-width: 1024px) {
    grid-area: display;
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => props.theme.main.neutral5};
  background-color: ${(props) => props.theme.main.primary};
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
