import { ApolloClient, InMemoryCache } from '@apollo/client'
import { API_URL } from '@env'

// Initialize Apollo Client
const client = new ApolloClient({
    uri: `${API_URL}/graphql`,
    cache: new InMemoryCache({
        typePolicies: {
            CategoryEntity: {
                merge: true
            },
            Restaurant: {
                merge: true
            }
        }
    })
})

export default client
