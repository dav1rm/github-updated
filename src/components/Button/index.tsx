import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, TextButton} from './styles';

interface ButtonProps extends TouchableOpacityProps{
  label: string;
  height?: number;
  light?: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, height, light, onPress, ...rest }) => {
  return (
    <Container testID='button' activeOpacity={0.7} height={height} light={light} onPress={onPress} {...rest}>
      <TextButton light={light}>{label}</TextButton>
    </Container>
  );
};

export default Button;
