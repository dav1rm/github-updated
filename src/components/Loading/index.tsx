import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#000" />
    </Container>
  );
};

export default Loading;
