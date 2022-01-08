import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query {
    repositories
      {
      edges {
        node {
          fullName,
          id,
          ratingAverage,
          reviewCount,
          stargazersCount,
          watchersCount,
          forksCount,
          url,
          ownerAvatarUrl,
          description,
          language
        }
      }
    }
  }
`;

export const AUTHORIZE_USER = gql`
query {
  authorizedUser {
    id
    username
  }
}
`;