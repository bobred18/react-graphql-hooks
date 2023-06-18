# react-graphql-hooks
A custom hook, written for Apollo Server

# Usage
```
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
