import React from 'react';
import { StatusBar } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import logo from '~/assets/images/logo.png';
import { User } from '~/services/graphql/queries';
import { ActionButton, Button } from '..';
import { Center, Container, Image, Avatar, Left, Right } from './styles';

interface RouteParams {
  user?: User;
}

const Header: React.FC<NativeStackHeaderProps> = ({
  back,
  navigation,
  route,
}) => {
  const params: RouteParams | undefined = route.params;

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Container>
        <Left>
          {back && (
            <ActionButton
              testID="header-back"
              onPress={navigation.goBack}
              iconName="arrow-back"
              iconSize={30}
              height={32}
              width={32}
              bgColor="transparent"
              iconColor="#000"
            />
          )}
          {route.name === 'Users' && <Image source={logo} />}
        </Left>
        <Center />
        <Right>
          {params?.user && <Avatar source={{ uri: params?.user?.avatarUrl }} />}
          {route.name === 'Users' && (
            <Button
              height={32}
              label="Adicionar novo"
              onPress={() => navigation.navigate('AddUser')}
            />
          )}
        </Right>
      </Container>
    </>
  );
};

export default Header;
