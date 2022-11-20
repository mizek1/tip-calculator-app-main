import { useState } from 'react';
import './styles/App.less';
import { Display } from './components/Display';
import { NumberInput } from './components/NumberInput';
import { Card, InputGroup, Label } from './styles/General.styles';
import { TipsSelect } from './components/TipsSelect';

function App() {
  const [bill, setBill] = useState<number>(0);
  const [person, setPerson] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);

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
          <NumberInput
            value={bill}
            min={0}
            name="bill"
            placeholder="0"
            onChange={onChangeBill}
            iconUrl={'/icon-dollar.svg'}
          />
        </InputGroup>

        <InputGroup>
          <Label>Select Tip %</Label>
          <TipsSelect
            selectedTip={tipAmount}
            onSelectedTipChange={onChangeTipAmount}
          />
        </InputGroup>

        <InputGroup>
          <Label>Number of Person</Label>
          <NumberInput
            value={person}
            min={0}
            name="person"
            placeholder="0"
            onChange={onChangePeople}
            iconUrl={'/icon-person.svg'}
          />
        </InputGroup>

        <Display
          totalTipPerPerson={getTotalTipByPerson()}
          totalAmountPerPerson={getTotalAmountPerPerson()}
          disableReset={bill === 0 || person === 0}
          reset={reset}
        />
      </Card>
    </>
  );
}

export default App;
