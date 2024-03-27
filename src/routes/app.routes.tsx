import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from '~/components';
import {
  UsersScreen,
  RepositoriesScreen,
  LoginScreen as AddUserScreen,
} from '~/screens';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Users"
        component={UsersScreen}
        options={{ header: props => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Repositories"
        component={RepositoriesScreen}
        options={{ header: props => <Header {...props} /> }}
      />
      <Stack.Screen
        name="AddUser"
        component={AddUserScreen}
        options={{ header: props => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
