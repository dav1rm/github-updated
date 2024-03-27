import { gql } from '@apollo/client';

export interface User {
  id: string;
  name: string;
  login: string;
  avatarUrl: string;
  location: string;
  company: string;
  starredRepositories: {
    totalCount: number;
  };
}

export const GET_USER_INFO = gql`
  query GetUserInfo($username: String!) {
    user(login: $username) {
      id
      avatarUrl
      name
      login
      company
      location
      starredRepositories {
        totalCount
      }
    }
  }
`;
