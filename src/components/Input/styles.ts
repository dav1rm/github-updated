import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ContainerProps {
  background?: string;
  hasShadow?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  max-height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 0 8px;
  width: 100%;
  background: ${props => props.background ?? 'transparent'};
  ${({ hasShadow }) =>
    hasShadow &&
    css`
      border: none;
      shadow-color: #000;
      shadow-offset: 1px 1px;
      shadow-opacity: 0.08;
      shadow-radius: 2px;
      elevation: 3;
    `};
`;

export const StyledTextInput = styled(TextInput)`
  padding: 0;
  flex: 1;
  font-family: 'Mulish-Regular';
  font-size: 14px;
  color: #000;
`;

export const IconInput = styled(Icon)`
  margin: 8px;
`;
