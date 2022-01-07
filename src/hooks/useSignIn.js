import {  useMutation, useApolloClient } from "@apollo/client";
import { AUTHORIZE } from "../graphql/mutations";
import useAuthStorage from '../hooks/useAuthStorage';



const useSignIn = () => {
    
    const authStorage = useAuthStorage()
    const [mutate, result] =  useMutation(AUTHORIZE)
    const apolloClient = useApolloClient();

    const signIn = async ( {username, password}) => {
       const newResult = await mutate( { variables: { username: username, password: password}})
       await authStorage.setAccessToken(newResult.data.authorize.accessToken)
       apolloClient.resetStore();
       return newResult;
    }

    return [signIn, result];
};

export default useSignIn;