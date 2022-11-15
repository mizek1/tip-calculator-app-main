import { useState } from 'react';
import styled from 'styled-components';
import './styles/App.less';

const Card = styled.main`
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

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.span`
  display: block;
  font-size: 0.75rem;
  color: hsl(186, 14%, 43%);
`;

const Input = styled.input`
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  padding: 0.375rem 0.75rem 0.375rem 1.75rem;
  background: ${(props) =>
      props.name === 'person'
        ? 'url(/icon-person.svg)'
        : 'url(/icon-dollar.svg)'}
    no-repeat 0.75rem center;
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

const Tips = styled.section`
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

const TipSelect = styled.span`
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

const Display = styled.div`
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

const Button = styled.button`
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

function App() {
  const [bill, setBill] = useState<number>(0);
  const [person, setPerson] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);

  function getTipAmounts() {
    return [5, 10, 15, 25, 50].map((tip) => {
      return (
        <TipSelect
          key={tip}
          className={tip === tipAmount ? 'selected' : ''}
          onClick={() => setTipAmount(tip)}
        >
          {tip}%
        </TipSelect>
      );
    });
  }

  function onChangeBill(value: number) {
    setBill(value);
  }

  function onChangePeople(value: number) {
    setPerson(value);
  }

  function onChangeTipAmount(value: number) {
    setTipAmount(value || 0);
  }

  function reset() {
    setBill(0);
    setPerson(0);
    setTipAmount(0);
  }

  function getTotalTipByPerson() {
    if (person) {
      return ((tipAmount / 100) * bill) / person;
    }
    return 0;
  }

  function getTotalAmountPerPerson() {
    if (person) {
      return (bill + Number(getTotalTipByPerson() * person)) / person;
    }
    return 0;
  }

  return (
    <>
      <header>
        <h1>
          SPLI
          <br />
          TTER
        </h1>
      </header>
      <Card>
        <InputGroup>
          <Label>Bill</Label>
          <Input
            type="number"
            placeholder="0"
            min={0}
            value={bill || ''}
            onChange={(e) => onChangeBill(e.target.valueAsNumber)}
          />
        </InputGroup>
        <InputGroup>
          <Label>Select Tip %</Label>
          <Tips>
            {getTipAmounts()}
            <input
              type="number"
              placeholder="Custom"
              onChange={(e) => onChangeTipAmount(e.target.valueAsNumber)}
            />
          </Tips>
        </InputGroup>
        <InputGroup>
          <Label>Number of People</Label>
          <Input
            type="number"
            name="person"
            placeholder="0"
            value={person || ''}
            onChange={(e) => onChangePeople(e.target.valueAsNumber)}
          />
        </InputGroup>
        <Display>
          <div>
            <section>
              <div>
                <span>Tip Amount</span>
                <span>/ person</span>
              </div>
              <h2>${getTotalTipByPerson().toFixed(2)}</h2>
            </section>
            <section>
              <div>
                <span>Total</span>
                <span>/ person</span>
              </div>
              <h2>${getTotalAmountPerPerson().toFixed(2)}</h2>
            </section>
          </div>
          <Button disabled={!person || !bill} onClick={reset}>
            Reset
          </Button>
        </Display>
      </Card>
    </>
  );
}

export default App;
