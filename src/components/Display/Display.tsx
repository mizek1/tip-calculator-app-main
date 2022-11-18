import { Amounts, Button } from './Display.styles';

export interface DisplayProps {
  totalTipPerPerson: number;
  totalAmountPerPerson: number;
  disableReset: boolean;
  reset: () => void;
}

export function Display({
  totalTipPerPerson: totalTipPerPerson,
  totalAmountPerPerson,
  disableReset,
  reset,
}: DisplayProps) {
  return (
    <Amounts>
      <div>
        <section>
          <div>
            <span>Tip Amount</span>
            <span>/ person</span>
          </div>
          <h2 data-testid="totalTipPerPerson">
            ${totalTipPerPerson.toFixed(2)}
          </h2>
        </section>
        <section>
          <div>
            <span>Total</span>
            <span>/ person</span>
          </div>
          <h2 data-testid="totalAmountPerPerson">
            ${totalAmountPerPerson.toFixed(2)}
          </h2>
        </section>
      </div>
      <Button disabled={disableReset} onClick={reset}>
        Reset
      </Button>
    </Amounts>
  );
}
