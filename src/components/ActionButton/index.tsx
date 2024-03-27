import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container } from './styles';

interface ActionButtonProps extends TouchableOpacityProps {
  iconName: string;
  iconSize: number;
  iconColor?: string;
  bgColor?: string;
  height?: number;
  width?: number;
  rounded?: boolean;
  hasShadow?: boolean;
  onPress: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  iconName,
  iconSize,
  bgColor,
  iconColor,
  onPress,
  height,
  width,
  rounded = true,
  hasShadow,
  ...rest
}) => {
  return (
    <Container
      activeOpacity={0.7}
      onPress={onPress}
      height={height}
      width={width}
      color={bgColor}
      rounded={rounded}
      hasShadow={hasShadow}
      {...rest}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </Container>
  );
};

export default ActionButton;
