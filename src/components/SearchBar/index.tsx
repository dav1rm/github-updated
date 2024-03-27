import React from 'react';
import { ActionButton, Input, Tag, Separator } from '..';
import {
  Container,
  BarContainer,
  InputContainer,
  TagsContainer,
} from './styles';

export type SearchInputType = 'filter' | 'search';

interface SearchBarProps {
  value: string;
  type: SearchInputType;
  onChangeText: (value: string) => void;
  onChangeType: (type: SearchInputType) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  type,
  onChangeType,
  onChangeText,
}) => {
  const placeholder =
    type === 'search'
      ? 'Buscar um repositório pelo nome...'
      : 'Filtrar por uma tecnologia...';

  return (
    <Container>
      <BarContainer testID="search-container">
        {type === 'filter' && (
          <>
            <ActionButton
              testID="search-button"
              onPress={() => onChangeType('search')}
              iconName="search"
              height={40}
              width={48}
              iconSize={24}
              iconColor="#7E7E7E"
              bgColor="#fff"
              rounded={false}
              hasShadow
            />
            <Separator width={8} />
          </>
        )}
        <InputContainer>
          <Input
            testID="search-input"
            background="#fff"
            icon={type === 'search' ? 'search' : 'filter-list'}
            placeholder={placeholder}
            hasShadow
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={onChangeText}
            value={value}
          />
        </InputContainer>
        {type === 'search' && (
          <>
            <Separator width={8} />
            <ActionButton
              testID="filter-button"
              height={40}
              width={48}
              iconSize={24}
              onPress={() => onChangeType('filter')}
              iconName="filter-list"
              iconColor="#7E7E7E"
              bgColor="#fff"
              rounded={false}
              hasShadow
            />
          </>
        )}
      </BarContainer>
      {type === 'filter' && (
        <TagsContainer horizontal testID="filter-list">
          {['Front End', 'Java', 'C#'].map((tag: string) => (
            <Tag label={tag} key={tag} type="add" onPress={() => null} />
          ))}
        </TagsContainer>
      )}
    </Container>
  );
};

export default SearchBar;
