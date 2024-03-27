import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { User } from '~/services/graphql/queries';
import ActionButton from '../ActionButton';
import {
  Container,
  Avatar,
  Title,
  Description,
  Label,
  Header,
  Footer,
  FooterItem,
  HeaderContent,
  HeaderInfo,
} from './styles';

interface UserCardProps {
  user: User;
  onPress: () => void;
  onDeletePress: () => void;
  testID?: string;
}

const UserCard: React.FC<UserCardProps> = ({
  user,
  onPress,
  onDeletePress,
  testID,
}) => {
  const footerInfos = [
    {
      icon: 'business',
      label: user.company || 'Nenhuma',
    },
    {
      icon: 'place',
      label: user.location,
    },
    {
      icon: 'star',
      label: user.starredRepositories?.totalCount || 0,
    },
  ];

  return (
    <Container testID={testID} onPress={onPress}>
      <Header>
        <Avatar source={{ uri: user.avatarUrl }} />
        <HeaderContent>
          <HeaderInfo>
            <Title>{user.name}</Title>
            <Icon name="keyboard-arrow-right" size={24} color="#000" />
          </HeaderInfo>
          <Description>@{user.login}</Description>
        </HeaderContent>
        <ActionButton
          testID={`remove-${testID}`}
          onPress={onDeletePress}
          iconName="delete"
          iconSize={18}
          iconColor="#000"
        />
      </Header>
      <Footer>
        {footerInfos.map((info, index) => (
          <FooterItem key={info.icon} isLast={footerInfos.length - 1 === index}>
            <Icon name={info.icon} size={16} color="#E5E5E5" />
            <Label numberOfLines={1}>{info.label}</Label>
          </FooterItem>
        ))}
      </Footer>
    </Container>
  );
};

export default UserCard;
