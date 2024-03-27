import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';

const marginTop = isIphoneX() ? 0 : 20;

export const Container = styled.View`
  margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight()+marginTop  : 0}px;
  height: 72px;
  padding: 16px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image`
  height: 40px;
  width: 100px;
`;

export const Avatar = styled.Image`
  height: 32px;
  width: 32px;
  border-radius: 100px;
`;

export const Left = styled.View``;

export const Center = styled.View``;

export const Right = styled.View``;
