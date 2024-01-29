
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import * as FunctionsModule from './Functions';

describe('App component', () => {
  test('calculates delivery price correctly on form submission', () => {
    render(<App />);

    // Mock the calculate function
    const calculateMock = jest.spyOn(FunctionsModule, 'calculate');
    calculateMock.mockReturnValue('10');

    // Fill out the form
    fireEvent.change(screen.getByLabelText('Cart Value'), {
      target: { value: '50' },
    });
    fireEvent.change(screen.getByLabelText('Delivery Distance'), {
      target: { value: '1000' },
    });
    fireEvent.change(screen.getByLabelText('No. of Items'), {
      target: { value: '3' },
    });
    fireEvent.change(screen.getByLabelText('Time & Date'), {
      target: { value: '2024-01-28T12:00' },
    });

    fireEvent.click(screen.getByText('Calculate delivery price'));

    // Assert that calculate function was called with the correct arguments
    expect(calculateMock).toHaveBeenCalledWith(50, 1000, 3, '2024-01-28T12:00');

    // Assert the result is displayed on the screen
    expect(screen.getByText('Delivery price: 10 €')).toBeInTheDocument();
  });
});
