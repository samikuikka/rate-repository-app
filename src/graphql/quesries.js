import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query GET_REPOSITORIES($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) { 
	repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
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
    }}
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

export const REPOSITORY = gql`
query REPOSITORY($id: ID!) {
  repository(id: $id) {
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
          reviews {
            edges {
              node {
                id
                text
                rating
                createdAt
                user {
                  id
                  username
                }
              }
            }
          }
  }
}
`;