import { useMutation } from "@apollo/client";
import { AUTHORIZE } from "../graphql/mutations";

const useSignIn = () => {
    const [mutate, result] =  useMutation(AUTHORIZE)

    const signIn = async ( {username, password}) => {
       return mutate( { variables: { username: username, password: password}})
    }

    return [signIn, result];
};

export default useSignIn;