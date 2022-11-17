import NumberInput from '../Input/NumberInput';
import { Tips, TipSelect } from './TipsSelect.styles';

export interface TipsSelectProps {
  selectedTip: number;
  onSelectedTipChange: (value: number) => void;
}

export default function TipsSelect({
  selectedTip,
  onSelectedTipChange,
}: TipsSelectProps) {
  function getTipAmounts() {
    return [5, 10, 15, 25, 50].map((tip) => {
      return (
        <TipSelect
          key={tip}
          className={tip === selectedTip ? 'selected' : ''}
          onClick={() => onSelectedTipChange(tip)}
        >
          {tip}%
        </TipSelect>
      );
    });
  }

  return (
    <Tips>
      {getTipAmounts()}
      <NumberInput
        value={selectedTip}
        min={0}
        name="Custom tip"
        placeholder="Custom"
        onChange={onSelectedTipChange}
      />
    </Tips>
  );
}
