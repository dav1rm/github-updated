import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, StyledTextInput, IconInput } from './styles';

interface InputProps extends TextInputProps {
  icon?: string;
  background?: string;
  hasShadow?: boolean;
}

const Input: React.FC<InputProps> = ({
  icon,
  background,
  hasShadow,
  ...rest
}) => {
  return (
    <Container
      testID="input-container"
      background={background}
      hasShadow={hasShadow}>
      {icon && (
        <IconInput testID="input-icon" name={icon} size={24} color="#E5E5E5" />
      )}
      <StyledTextInput
        testID="input-text"
        placeholderTextColor={'#7E7E7E'}
        {...rest}
      />
    </Container>
  );
};

export default Input;
