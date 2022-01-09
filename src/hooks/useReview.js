import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const sendReview = async ({rating, repositoryName, ownerName, text}) => {
        const x =  await mutate( { variables: {"repositoryName": repositoryName,
        "ownerName": `${ownerName}`,
        "rating": Number(rating),
        "text": `${text}`
      }})
        return x;
    }

    return [sendReview, result];
}

export default useReview;