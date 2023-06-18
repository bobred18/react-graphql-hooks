# react-graphql-hooks
A custom hook, written for Apollo Server

# Usage
## useDatabase

```ts
const fetch = useDatabase(query)
```

The `useDatabase` hook takes the following parameters:

- `query`: backticks string of GraphQL query

Returns:

- `data`: a GraphQL like JSON object. Your resolved queries will be inside this object
- `loading`: a `boolean` to indicate if the data is still being loaded
- `error`: a GraphQL error. `undefined` if there is no error

```ts

const fetch = useDatabase(`#graphql
    {
        users {
            userId
            name
            bio
            profileImage
        }

         findPosts(postId: "${postId}"){
            postId
            description
            title
            createdAt
            user {
                userId
                name
                bio
                profileImage
            }
            
        }

        # ...Other queries
    }
`)
```
