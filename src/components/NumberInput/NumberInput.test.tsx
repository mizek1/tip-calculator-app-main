import { fireEvent, render, screen } from '@testing-library/react';
import { NumberInput, NumberInputProps } from './NumberInput';

const mock: NumberInputProps = {
  name: 'Teste',
  placeholder: 'Teste',
  min: 0,
  value: 0,
  onChange: jest.fn(),
};

const sut = async () => {
  return await render(<NumberInput {...mock} />);
};

describe('NumberInput', () => {
  const dataTestId = 'input-number-' + mock.name;
  describe('Default', () => {
    beforeEach(async () => {
      await sut();
    });
    it('should render input with correct name', () => {
      expect(screen.getByTestId(dataTestId)).toHaveAttribute('name', mock.name);
    });
    it('should render input with correct placeholder', () => {
      expect(screen.getByPlaceholderText(mock.placeholder)).toBeInTheDocument();
    });
    it('should render input with correct min value', () => {
      expect(screen.getByTestId(dataTestId)).toHaveAttribute(
        'min',
        mock.min.toString()
      );
    });
    it('should have value null when value is zero', () => {
      const input = screen.getByTestId(dataTestId);
      fireEvent.change(input, { target: { value: 0 } });
      expect(input).toHaveValue(null);
    });
    it('should change value when input changes', () => {
      const input = screen.getByTestId(dataTestId);
      fireEvent.change(input, { target: { value: 10 } });
      expect(mock.onChange).toHaveBeenCalledWith(10);
    });
  });
  describe('Icon', () => {
    it('should not render input with icon', async () => {
      await sut();
      expect(screen.queryByTestId(dataTestId)).not.toHaveStyle(
        `background: url(${mock.iconUrl}) no-repeat center`
      );
    });
    it('should render input with correct icon', async () => {
      mock.iconUrl = '/icon-dollar.svg';
      await sut();
      expect(screen.getByTestId(dataTestId)).toHaveStyle(
        `background: url(${mock.iconUrl}) no-repeat center`
      );
    });
  });
});
