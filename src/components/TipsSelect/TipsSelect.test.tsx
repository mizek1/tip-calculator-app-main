import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/General.styles';
import { TipsSelect, TipsSelectProps } from './TipsSelect';

const mock: TipsSelectProps = {
  selectedTip: 0,
  onSelectedTipChange: jest.fn(),
};

const sut = async () => {
  return await render(
    <ThemeProvider theme={theme}>
      <TipsSelect {...mock} />
    </ThemeProvider>
  );
};

describe('TipsSelect', () => {
  it('should render all options and custom input', async () => {
    await sut();
    [5, 10, 15, 25, 50].forEach((tip) => {
      expect(screen.getByText(`${tip}%`)).toBeInTheDocument();
    });
    expect(screen.getByPlaceholderText('Custom')).toBeInTheDocument();
  });
  it('should call onSelectedTipChange when option is selected', async () => {
    await sut();
    screen.getByText('10%').click();
    expect(mock.onSelectedTipChange).toHaveBeenCalledWith(10);
  });
  it('should call onSelectedTipChange when custom input is changed', async () => {
    await sut();
    const input = screen.getByPlaceholderText('Custom');
    fireEvent.change(input, { target: { value: '20' } });
    expect(mock.onSelectedTipChange).toHaveBeenCalledWith(20);
  });
});
