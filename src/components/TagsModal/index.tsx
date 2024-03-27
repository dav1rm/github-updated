import React from 'react';
import { Modal } from 'react-native';

import { Button, Input, Tag, Separator } from '..';
import { Container, TagsContainer, Title, Content, Subtitle } from './styles';

interface TagsModalProps {
  visible: boolean;
  onRequestClose: () => void;
  title: string;
}

const TagsModal: React.FC<TagsModalProps> = ({
  visible,
  onRequestClose,
  title,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <Container>
        <Content>
          <Title>{title}</Title>
          <Input
            background="#fff"
            icon="search"
            placeholder="Digite um nome"
            hasShadow={false}
          />
          <Separator height={8} />
          <TagsContainer>
            {['Front End', 'Java', 'C#'].map((tag: string) => (
              <Tag
                label={tag}
                key={tag}
                hasSpace
                type="add"
                onPress={() => null}
              />
            ))}
          </TagsContainer>

          <Separator height={16} />

          <Subtitle>Sugestões</Subtitle>

          <Separator height={24} />

          <TagsContainer>
            {['Front End', 'IOS', 'Java Script', 'Android', 'Java', 'C#'].map(
              (tag: string) => (
                <Tag
                  label={tag}
                  key={tag}
                  hasSpace
                  type="add"
                  onPress={() => null}
                />
              ),
            )}
          </TagsContainer>

          <Separator height={16} />

          <Button label="Salvar" onPress={() => null} />
          <Separator height={8} />
          <Button label="Cancelar" light onPress={onRequestClose} />
        </Content>
      </Container>
    </Modal>
  );
};

export default TagsModal;
