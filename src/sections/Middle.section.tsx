import React, {useEffect} from 'react';
import Result from "../components/Result";
import {useQuery, gql} from '@apollo/client';
import {paramType} from '../types';
import {STORAGE_KEY} from "../utils/constants";

const GET_COUNTRY = gql`
    query getCountry($post_code: String!, $country_abbreviation: String!){
        country(post_code: $post_code, country_abbreviation: $country_abbreviation) {
            country
            post_code
            country_abbreviation
            places {
                place_name
                longitude
                latitude
                state
                state_abbreviation
            }
        }
    }
`;

function MiddleSection({post_code, country_abbreviation, setResult}: paramType) {
    const {data, loading} = useQuery(GET_COUNTRY, {
        variables: {post_code, country_abbreviation}
    });
    const {country = {}} = data || {};

    useEffect(() => {
        if(country) {
            const arr = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
            arr.push(country);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
            setResult(arr);
        }
    }, [data]);

    if(loading) return <span>loading</span>;

    return (
        <div className="middle f-column">
            <h2 className="title">Result</h2>
            <Result
                post_code={country.post_code}
                country={country.country}
                country_abbreviation={country.country_abbreviation}
                places={country.places}
            />
            <div />
        </div>
    );
}

export default MiddleSection;
