import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  background: rgba(0, 0, 0, 0.72);
`;

export const Content = styled.View`
  width: 100%;
  padding: 32px 27px 27px 25px;
  background: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-family: 'Mulish-Bold';
  font-size: 22px;
  line-height: 27px;
  color: #000;
  margin-bottom: 18px;
`;

export const Subtitle = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 16px;
  line-height: 20px;
  color: #7e7e7e;
`;

export const TagsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

interface SeparatorProps {
  height?: number;
  width?: number;
}

export const Separator = styled.View<SeparatorProps>`
  height: ${({ height }) => height || 24}px;
  width: ${({ width }) => width || 24}px;
`;
