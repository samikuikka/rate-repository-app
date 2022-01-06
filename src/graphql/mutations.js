import { gql } from '@apollo/client';

export const AUTHORIZE = gql`
    mutation AUTHORIZE($username: String!, $password: String!) {
        authorize(credentials: { username: $username, password: $password}) {
            accessToken
        }
    }
`