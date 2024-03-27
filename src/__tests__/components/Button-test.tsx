import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Button } from '~/components';

describe('Button Component', () => {
  const title = 'My Button';
  const mockFn = jest.fn();

  test('should render title correctly', () => {
    render(<Button onPress={mockFn} label={title} />);

    const foundButton = screen.getByTestId('button');

    expect(foundButton).not.toBeNull();
  });

  test('should have height of 50', () => {
    render(<Button onPress={mockFn} height={50} label={title} />);

    const button = screen.getByTestId('button');

    expect(button.props.style).toHaveProperty('height', 50);
  });

  test('should have light mode', () => {
    render(<Button onPress={mockFn} light label={title} />);

    const button = screen.getByTestId('button');
    const text = screen.getByText(title);

    // Checking styling
    expect(button.props.style).toHaveProperty('backgroundColor', '#fff');
    expect(text.props.style).toHaveProperty('color', '#000');

    expect(text.props.light).toBeTruthy();
  });

  test('should be pressed', () => {
    render(<Button onPress={mockFn} label={title} />);

    const button = screen.getByTestId('button');
    fireEvent.press(button);

    expect(mockFn).toHaveBeenCalled();
  });
});
