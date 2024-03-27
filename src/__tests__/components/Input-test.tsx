import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Input } from '~/components';

describe('Input Component', () => {
  const placeholder = 'Type your name';
  const newValue = 'New value';
  const onChangeText = jest.fn();

  it('should be changed value correctly', () => {
    render(
      <Input onChangeText={onChangeText} placeholder={placeholder} value="" />,
    );

    const input = screen.getByPlaceholderText(placeholder);

    fireEvent(input, 'focus');
    fireEvent.changeText(input, newValue);

    expect(onChangeText).toHaveBeenCalledWith(newValue);
  });

  it('should have an icon inside', async () => {
    render(
      <Input
        onChangeText={onChangeText}
        icon="search"
        placeholder={placeholder}
        value=""
      />,
    );

    const foundIcon = screen.getByTestId('input-icon');

    expect(foundIcon).not.toBeNull();
  });

  it('should dont have an icon inside', async () => {
    render(
      <Input onChangeText={onChangeText} placeholder={placeholder} value="" />,
    );

    const foundIcon = screen.queryByTestId('input-icon');

    expect(foundIcon).toBeNull();
  });

  it('should have a border and not have a shadow', () => {
    render(<Input onChangeText={onChangeText} placeholder={placeholder} />);

    const foundContainer = screen.getByTestId('input-container');
    const styles = foundContainer.props.style;

    expect(styles).toHaveProperty('backgroundColor', 'transparent');
    expect(styles).toHaveProperty('borderWidth', 1);
    expect(styles).not.toHaveProperty('shadowOffset');
  });

  it('should have a shadow, a backgroundColor and not have a border', () => {
    render(
      <Input
        onChangeText={onChangeText}
        hasShadow
        background="#fff"
        placeholder={placeholder}
      />,
    );

    const foundContainer = screen.getByTestId('input-container');
    const styles = foundContainer.props.style;

    expect(styles).toHaveProperty('backgroundColor', '#fff');
    expect(styles).toHaveProperty('borderWidth', 0);
    expect(styles).toHaveProperty('shadowOffset');
  });
});
