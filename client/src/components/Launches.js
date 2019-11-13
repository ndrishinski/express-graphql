import React, {Component} from 'react';
import gql from 'graphql-tag';
// import {query} from 'react-apollo'
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
    {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
          }
    }
`;

const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return (
            <>
                {data.launches.map(item => {
                  return  <LaunchItem launch={item} key={item.flight_number} />
                })}
            </>
        )
}

export default Launches