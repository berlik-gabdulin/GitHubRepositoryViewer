import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query GET_REPOSITORIES($searchQuery: String!, $first: Int!) {
    search(query: $searchQuery, type: REPOSITORY, first: $first) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            stargazers {
              totalCount
            }
            pushedAt
            owner {
              login
            }
            url
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query GetRepository($login: String!, $name: String!) {
    repository(owner: $login, name: $name) {
      id
      name
      stargazers {
        totalCount
      }
      pushedAt
      owner {
        avatarUrl
        login
      }
      primaryLanguage {
        name
      }
      languages(first: 5) {
        nodes {
          name
        }
      }
      description
      url
    }
  }
`;
