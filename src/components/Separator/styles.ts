import styled from 'styled-components/native';
import { SeparatorProps } from './';

export const Container = styled.View<SeparatorProps>`
  height: ${({ height }) => height || 24}px;
  width: ${({ width }) => width || 24}px;
`;
