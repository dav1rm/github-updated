import React from 'react';

import { Container } from './styles';

export interface SeparatorProps {
  height?: number;
  width?: number;
}

const Separator: React.FC<SeparatorProps> = props => {
  return <Container {...props} />;
};

export default Separator;
