import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useRoute } from '@react-navigation/native';

import {
  Loading,
  RepositoryCard,
  SearchBar,
  TagsModal,
  Separator,
} from '~/components';
import { RouteRepositoriesProp } from '~/routes/types';
import { SearchInputType } from '~/components/SearchBar';
import { GET_USER_REPOSITORIES, Repository } from '~/services/graphql/queries';
import { Container, EmptyContainer, EmptyText, ReposList } from './styles';

function Repositories() {
  const [term, setTerm] = useState('');
  const [inputType, setInputType] = useState<SearchInputType>('search');
  const [repos, setRepos] = useState<Repository[]>();
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>();
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const { params } = useRoute<RouteRepositoriesProp>();

  const [getUserRepositories, { data, loading, error }] = useLazyQuery(
    GET_USER_REPOSITORIES,
  );

  useEffect(() => {
    getUserRepositories({ variables: { username: params?.user?.login } });

    if (!loading && !error && !!data?.repositoryOwner) {
      setRepos(data?.repositoryOwner.repositories?.nodes);
      setFilteredRepos(data?.repositoryOwner.repositories?.nodes);
      setLoadingRepos(false);
    }
  }, [data, error, getUserRepositories, loading, params?.user?.login]);

  if (loading || loadingRepos) {
    return <Loading />;
  }

  const handleInputChange = (text: string) => {
    filterRepos(text);
    setTerm(text);
  };

  const handleTypeChange = (text: SearchInputType) => {
    setTerm('');
    setInputType(text);
  };

  const filterRepos = (value: string) => {
    if (repos && repos?.length > 0 && inputType === 'search') {
      if (value !== '') {
        const hasTermInName = (repo: Repository) =>
          repo.name.search(new RegExp(value, 'i')) !== -1;
        setFilteredRepos(repos.filter(hasTermInName));
      } else {
        setFilteredRepos(repos);
      }
    }
  };

  const renderEmptyMessage = () => {
    const message =
      term !== ''
        ? `Nenhum resultado encontrado para '${term}'`
        : 'Nenhum repositório encontrado';

    return (
      <EmptyContainer>
        <EmptyText>{message}</EmptyText>
      </EmptyContainer>
    );
  };

  return (
    <Container>
      <SearchBar
        value={term}
        type={inputType}
        onChangeType={handleTypeChange}
        onChangeText={handleInputChange}
      />

      <ReposList
        data={filteredRepos}
        ItemSeparatorComponent={() => <Separator height={8} />}
        renderItem={({ item }) => (
          <RepositoryCard
            repo={item}
            onEditTech={() => setModalVisible(true)}
          />
        )}
        ListEmptyComponent={renderEmptyMessage}
      />

      <TagsModal
        visible={modalVisible}
        title="Adicionar tags"
        onRequestClose={() => setModalVisible(false)}
      />
    </Container>
  );
}

export default Repositories;
