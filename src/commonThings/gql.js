import getGQL from "./getGQL";

const gql = getGQL('/graphql', {Authorization: "Bearer " + localStorage.authToken})
export default gql