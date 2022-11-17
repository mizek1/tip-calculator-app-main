import styled from 'styled-components';

export const Card = styled.main`
  display: flex;
  flex-direction: column;
  background-color: hsl(0, 0%, 100%);
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
  color: hsl(186, 14%, 43%);
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
