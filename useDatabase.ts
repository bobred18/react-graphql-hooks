import { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
// import your ApolloClient here

export const useDatabase = (q: string) => {
    const [data, setData] = useState<any>({});
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {

        setLoading(true);

        apolloClient
            .query({
                query: gql`${q}`
            })
            .then((result) => {
                setData(result.data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [q])

    return { data, loading, error };
};
