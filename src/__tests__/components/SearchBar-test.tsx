import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { SearchBar } from '~/components';

describe('SearchBar Component', () => {
  const newValue = 'New value';
  const onChangeText = jest.fn();
  const onChangeType = jest.fn();

  it('should be changed value correctly', () => {
    render(
      <SearchBar
        type="search"
        onChangeText={onChangeText}
        onChangeType={onChangeType}
        value=""
      />,
    );

    const foundInput = screen.getByTestId('search-input');

    fireEvent(foundInput, 'focus');
    fireEvent.changeText(foundInput, newValue);

    expect(onChangeText).toHaveBeenCalledWith(newValue);
  });

  it('should be changed type correctly', () => {
    render(
      <SearchBar
        type="search"
        onChangeText={onChangeText}
        onChangeType={onChangeType}
        value=""
      />,
    );
    const foundFilterButton = screen.getByTestId('filter-button');

    fireEvent.press(foundFilterButton);

    expect(onChangeType).toHaveBeenCalledWith('filter');
  });

  it('should be rendered type search correctly', async () => {
    render(
      <SearchBar
        type="search"
        onChangeText={onChangeText}
        onChangeType={onChangeType}
        value=""
      />,
    );

    const foundSearchInput = screen.getByTestId('search-input');
    const foundFilterButton = screen.getByTestId('filter-button');
    const foundSearchButton = screen.queryByTestId('search-button');
    const foundFilterList = screen.queryByTestId('filter-list');

    expect(foundSearchInput.props.placeholder).toMatch('Buscar');

    expect(foundSearchInput).toBeTruthy();
    expect(foundFilterButton).toBeTruthy();
    expect(foundSearchButton).toBeNull();
    expect(foundFilterList).toBeNull();
  });

  it('should be rendered type filter correctly', async () => {
    render(
      <SearchBar
        type="filter"
        onChangeText={onChangeText}
        onChangeType={onChangeType}
        value=""
      />,
    );

    const foundSearchInput = screen.getByTestId('search-input');
    const foundFilterButton = screen.queryByTestId('filter-button');
    const foundSearchButton = screen.getByTestId('search-button');
    const foundFilterList = screen.getByTestId('filter-list');

    expect(foundSearchInput.props.placeholder).toMatch('Filtrar');

    expect(foundSearchInput).toBeTruthy();
    expect(foundFilterButton).toBeNull();
    expect(foundSearchButton).toBeTruthy();
    expect(foundFilterList).toBeTruthy();
  });
});
