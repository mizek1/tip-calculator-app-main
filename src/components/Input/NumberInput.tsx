import { Input } from './NumberInput.styles';

export interface NumberInputProps {
  name: string;
  placeholder: string;
  min: number;
  value: number;
  onChange: (value: number) => void;
  iconUrl?: string;
}

export default function NumberInput({
  name,
  placeholder,
  value,
  onChange,
  iconUrl,
  min,
}: NumberInputProps) {
  return (
    <Input
      type="number"
      name={name}
      min={min}
      placeholder={placeholder}
      value={value || ''}
      onChange={(e) => onChange(e.target.valueAsNumber)}
      iconUrl={iconUrl}
    />
  );
}
