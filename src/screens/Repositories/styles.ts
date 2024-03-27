import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

import { Repository } from '~/services/graphql/queries';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f8f8f8;
`;

export const ReposList = styled(
  FlatList as new () => FlatList<Repository>,
).attrs({
  contentContainerStyle: { paddingHorizontal: 16, paddingVertical: 8 },
})<FlatListProps<Repository>>`
  flex: 1;
`;

export const EmptyText = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 14px;
  line-height: 17.5px;
  color: #000;
`;

export const EmptyContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;
