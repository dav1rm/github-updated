import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1 },
})`
  padding: 32px 40px;
`;

export const Form = styled.View`
  flex: 1;
  margin-top: 80px;
`;

export const Image = styled.Image`
  margin-top: 28px;
  width: 197px;
  height: 80px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  line-height: 27.6px;
  font-family: 'Mulish-Bold';
  color: #000;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 20px;
  font-family: 'Mulish-Regular';
  color: #7e7e7e;
`;

interface LabelProps {
  underline?: boolean;
}

export const Label = styled.Text<LabelProps>`
  font-size: 16px;
  line-height: 20px;
  font-family: 'Mulish-Regular';
  color: #7e7e7e;
  text-align: center;
  text-decoration-line: ${props => (props.underline ? 'underline' : 'none')};
`;

interface SeparatorProps {
  height?: number;
}

export const Separator = styled.View<SeparatorProps>`
  height: ${props => props.height || 24}px;
`;
