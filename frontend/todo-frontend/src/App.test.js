import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders TodoList', () => {
    render(<App />);
    expect(screen.getByText('Your Todo List')).toBeInTheDocument();
  });
});
