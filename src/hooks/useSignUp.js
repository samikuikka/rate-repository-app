import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations";

const useSignUp = () => {
    const [mutate,result] = useMutation(SIGN_UP);

    const signUp = async ({username, password}) => {
        return await mutate( { variables: {username: username, password: password}})
    }

    return [signUp, result];
};

export default useSignUp;