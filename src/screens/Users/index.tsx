import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { UserCard, Loading, Separator } from '~/components';
import { useStorage } from '~/hooks/storage';
import { usersScreenProp } from '~/routes/types';
import { User } from '~/services/graphql/queries';
import { Container, UsersList } from './styles';

function Users() {
  const { users, loading, updateUsers } = useStorage();
  const navigation = useNavigation<usersScreenProp>();

  if (loading) {
    return <Loading />;
  }

  const handleOpenRepositories = (user: User) => {
    navigation.navigate('Repositories', { user });
  };

  const handleRemoveUser = (userId: string) => {
    const newUsers = users.filter(user => user.id !== userId);

    updateUsers(newUsers);
  };

  return (
    <Container>
      <UsersList
        data={users}
        keyExtractor={(item, index) => `${item.id}_${index}`}
        ItemSeparatorComponent={() => <Separator height={8} />}
        renderItem={({ item, index }) => (
          <UserCard
            testID={`user-${index+1}`}
            user={item}
            onPress={() => handleOpenRepositories(item)}
            onDeletePress={() => handleRemoveUser(item.id)}
          />
        )}
      />
    </Container>
  );
}

export default Users;
