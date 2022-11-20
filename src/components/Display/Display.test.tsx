import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/General.styles';
import { Display, DisplayProps } from './Display';

const mock: DisplayProps = {
  totalTipPerPerson: 10,
  totalAmountPerPerson: 100,
  disableReset: false,
  reset: jest.fn(),
};

const sut = async (props: DisplayProps = mock) => {
  return await render(
    <ThemeProvider theme={theme}>
      <Display {...props} />
    </ThemeProvider>
  );
};

describe('Display', () => {
  it('should render labels correctly', async () => {
    await sut();
    expect(screen.getByText(/tip amount/i)).toBeInTheDocument();
    expect(screen.getByText(/total/i)).toBeInTheDocument();
  });
  it('should render total tip per person correctly', async () => {
    await sut();
    expect(screen.getByTestId('totalTipPerPerson')).toHaveTextContent(
      mock.totalTipPerPerson.toFixed(2)
    );
  });
  it('should render total amount per person correctly', async () => {
    await sut();
    expect(screen.getByTestId('totalAmountPerPerson')).toHaveTextContent(
      mock.totalAmountPerPerson.toFixed(2)
    );
  });
  it('should render reset button correctly', async () => {
    await sut();
    expect(screen.getByRole('button')).toHaveTextContent(/reset/i);
  });
  it('should call reset function when reset button is clicked', async () => {
    await sut();
    screen.getByRole('button').click();
    expect(mock.reset).toHaveBeenCalled();
  });
  it('should render reset button disabled', async () => {
    await sut({ ...mock, disableReset: true });
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
