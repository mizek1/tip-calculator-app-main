import styled from 'styled-components';

export const theme = {
  main: {
    primary: 'hsl(172, 67%, 45%)',
    neutral0: 'hsl(0, 0%, 100%)',
    neutral1: 'hsl(189, 41%, 97%)',
    neutral2: 'hsl(185, 41%, 84%)',
    neutral3: 'hsl(184, 14%, 56%)',
    neutral4: 'hsl(186, 14%, 43%)',
    neutral5: 'hsl(183, 100%, 15%)',
  },
};

export const Card = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.main.neutral0};
  padding: 1rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  gap: 1.25rem;
  font-size: 24px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'bill display' 'select display' 'people display';
    gap: 2rem;
    border-radius: 1rem;
    padding: 1.5rem 1.5rem 1.5rem 2rem;
  }
`;

export const Label = styled.span`
  display: block;
  font-size: 0.75rem;
  color: ${(props) => props.theme.main.neutral4};
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
