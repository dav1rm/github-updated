import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

import { User } from '~/services/graphql/queries';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f8f8f8;
`;

export const UsersList = styled(FlatList as new () => FlatList<User>).attrs({
  contentContainerStyle: { paddingHorizontal: 16, paddingVertical: 8 },
})<FlatListProps<User>>`
  flex: 1;
`;
