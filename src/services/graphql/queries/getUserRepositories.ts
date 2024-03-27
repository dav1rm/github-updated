import { gql } from '@apollo/client';

export interface Repository {
  id: string;
  name: string;
  description?: string;
  stargazerCount: number;
  url: string;
  primaryLanguage?: {
    name: string;
  };
  assignableUsers: {
    totalCount: number;
  };
  languages: {
    nodes: [{ name: string }];
  };
  createdAt: string;
}

export const GET_USER_REPOSITORIES = gql`
  query GetUserRepositories($username: String!) {
    repositoryOwner(login: $username) {
      id
      login
      repositories(isFork: false, first: 50) {
        totalCount
        nodes {
          id
          name
          description
          stargazerCount
          url
          primaryLanguage {
            name
          }
          assignableUsers {
            totalCount
          }
          languages(first: 3) {
            nodes {
              name
            }
          }
          createdAt
        }
      }
    }
  }
`;
