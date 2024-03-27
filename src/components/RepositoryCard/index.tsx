import React from 'react';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatDistanceToNowStrict } from 'date-fns';

import { Repository } from '~/services/graphql/queries';
import { ActionButton, Tag } from '..';
import {
  Container,
  Title,
  Description,
  Label,
  Header,
  Footer,
  FooterItem,
  HeaderContent,
  HeaderInfo,
  TagList,
} from './styles';

interface RepositoryCardProps {
  repo: Repository;
  onEditTech: () => void;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({
  repo,
  onEditTech,
}) => {
  const footerInfos = [
    {
      icon: 'language',
      label: repo.primaryLanguage?.name || 'Não definido',
    },
    {
      icon: 'star',
      label: repo.stargazerCount,
    },
    {
      icon: 'supervisor-account',
      label: repo.assignableUsers.totalCount,
    },
    {
      icon: 'access-time',
      label: formatDistanceToNowStrict(new Date(repo.createdAt)),
    },
  ];

  const handleOpenLink = () => {
    if (!repo?.url) {
      return;
    }

    Linking.canOpenURL(repo.url).then(async canOpen => {
      if (canOpen) {
        await Linking.openURL(repo.url);
      }
    });
  };

  return (
    <Container onPress={handleOpenLink}>
      <Header>
        <HeaderContent>
          <HeaderInfo>
            <Title>{repo.name}</Title>
            <Icon name="keyboard-arrow-right" size={24} color="#000" />
          </HeaderInfo>
          <ActionButton
            onPress={() => null}
            iconName="star"
            iconSize={18}
            bgColor="rgba(255, 199, 0, 0.16)"
            iconColor="#FFC700"
          />
        </HeaderContent>

        <Description numberOfLines={2}>
          {repo.description || 'Nenhuma descrição cadastrada.'}
        </Description>
      </Header>

      <TagList>
        {repo.languages.nodes.map(({ name }) => (
          <Tag small key={name} label={`#${name}`} />
        ))}
        <ActionButton
          onPress={onEditTech}
          iconName="edit"
          height={20}
          width={20}
          iconSize={12}
          bgColor="#0017FF"
          iconColor="#fff"
        />
      </TagList>

      <Footer>
        {footerInfos.map((info, index) => (
          <FooterItem key={info.icon} isLast={footerInfos.length - 1 === index}>
            <Icon name={info.icon} size={16} color="#E5E5E5" />
            <Label>{info.label}</Label>
          </FooterItem>
        ))}
      </Footer>
    </Container>
  );
};

export default RepositoryCard;
