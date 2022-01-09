import { gql } from '@apollo/client';

export const AUTHORIZE = gql`
    mutation AUTHORIZE($username: String!, $password: String!) {
        authorize(credentials: { username: $username, password: $password}) {
            accessToken
        }
    }
`

export const CREATE_REVIEW = gql`
mutation REVIEW($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String) {
    createReview(review: {repositoryName: $repositoryName, ownerName: $ownerName, rating: $rating, text: $text }) {
        repositoryId
    }
}
`;

export const SIGN_UP = gql`
mutation SIGN_UP($username: String!, $password: String!) {
    createUser(user: {username: $username, password: $password}) {
      username
      createdAt
    }
  }
`;