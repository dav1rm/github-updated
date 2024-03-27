import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { User } from '~/services/graphql/queries';

export type RootStackParamList = {
  Users: undefined;
  Repositories: { user?: User };
  AddUser: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
};
export type RouteRepositoriesProp = RouteProp<
  RootStackParamList,
  'Repositories'
>;

export type LoginScreenProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

export type usersScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Users'
>;
