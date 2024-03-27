import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';

import { Input, Button, Separator } from '~/components';
import { useStorage } from '~/hooks/storage';
import { LoginScreenProp } from '~/routes/types';
import { GET_USER_INFO } from '~/services/graphql/queries';
import logo from '~/assets/images/logo.png';
import {
  Container,
  Content,
  Form,
  Image,
  Title,
  Description,
  Label,
  ErrorMessage,
} from './styles';

function Login() {
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { updateUsers, users } = useStorage();
  const navigation = useNavigation<LoginScreenProp>();
  const [getUserInfo, { data, loading, error }] = useLazyQuery(GET_USER_INFO);

  const description = navigation.canGoBack()
    ? 'Adicione seus novos usuários do GitHub'
    : 'Crie sua conta através do seu usuário do GitHub';

  useEffect(() => {
    if (!loading && !error && !!data) {
      if (data?.user) {
        setErrorMessage('');
        updateUsers([...users, data?.user]);

        if (navigation.canGoBack()) {
          navigation.goBack();
        }
      }
    } else if (!loading && error) {
      setErrorMessage(error.message);
    }
  }, [data, error, loading, navigation, updateUsers, users]);

  async function handleSearchUser() {
    if (!username) {
      setErrorMessage("Username is required!");
      return;
    }

    await getUserInfo({ variables: { username } });
  }

  return (
    <Container>
      <Content>
        <Image source={logo} />

        <Form>
          <Title testID="title">Buscar usuário</Title>

          <Separator height={10} />

          <Description testID="description">{description}</Description>

          <Separator height={32} />

          <Input
            testID="username"
            icon="account-circle"
            value={username}
            onChangeText={text => setUsername(text)}
            placeholder="@username"
            autoCapitalize="none"
            autoCorrect={false}
          />

          {errorMessage && (
            <>
              <Separator height={10} />
              <ErrorMessage testID='error-message'>{errorMessage}</ErrorMessage>
            </>
          )}

          <Separator height={24} />

          <Button
            testID="submit"
            label={loading ? 'Carregando...' : 'Cadastrar'}
            onPress={handleSearchUser}
          />
        </Form>

        <Label>
          Termos de <Label underline>política</Label> e{' '}
          <Label underline>privacidade</Label>
        </Label>
      </Content>
    </Container>
  );
}

export default Login;
