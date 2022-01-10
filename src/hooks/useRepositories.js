import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/quesries';
import { useState, useEffect } from 'react';

const useRepositories =  (selectedSorting) => {
  const [repositories, setRepositories] = useState();
  let orderBy;
  let orderDirection;
  
  switch(selectedSorting) {
    case "latest":
      orderBy = "CREATED_AT";
      orderDirection = "DESC";
      break;
    case "highestRated":
      orderBy =  "RATING_AVERAGE";
      orderDirection = "DESC";
      break;
    case "lowestRated":
      orderBy = "RATING_AVERAGE";
      orderDirection = "ASC";
      break;
    default:
      orderBy = "CREATED_AT";
      orderDirection = "DESC";
  }
  
  const { data , error, loading } =   useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy: orderBy, orderDirection: orderDirection}
  });

  useEffect( () => {
    if(!loading) {
      setRepositories(data.repositories)
    }
  },[loading])
  
  return { repositories, loading };
};

export default useRepositories;