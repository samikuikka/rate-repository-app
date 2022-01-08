import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/quesries';
import { useState, useEffect } from 'react';

const useRepositories =  () => {
  const [repositories, setRepositories] = useState();

  const { data , error, loading } =   useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });

  useEffect( () => {
    if(!loading) {
      setRepositories(data.repositories)
    }
  },[loading])
  
  return { repositories, loading };
};

export default useRepositories;