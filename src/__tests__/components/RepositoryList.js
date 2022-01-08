import React from 'react';
import { RepositoryListContainer } from "../../components/RepositoryList"
import { render } from '@testing-library/react-native';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', () => {
        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };

  
        // Add your test code here
        const { getByTestId, debug } = render(<RepositoryListContainer repositories={repositories} />);

        expect(getByTestId('jaredpalmer.formik:fullName')).toHaveTextContent('jaredpalmer/formik')
        expect(getByTestId('jaredpalmer.formik:description')).toHaveTextContent('Build forms in React, without the tears')
        expect(getByTestId('jaredpalmer.formik:language')).toHaveTextContent('TypeScript');
        expect(getByTestId('jaredpalmer.formik:Stars')).toHaveTextContent('21.9k');
        expect(getByTestId('jaredpalmer.formik:Forks')).toHaveTextContent('1.6k');
        expect(getByTestId('jaredpalmer.formik:Reviews')).toHaveTextContent('3');
        expect(getByTestId('jaredpalmer.formik:Rating')).toHaveTextContent('88');
      });
    });
  });