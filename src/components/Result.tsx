import React from 'react';
import styled from 'styled-components';
import {resultType} from "../types";

const ResultWrapper = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 10px;
  max-width: 360px;
  width: 100%;
  @media only screen and (max-width: 600px) {
    max-width: 280px;
  }
  p {
    margin: 5px 0;
  }
`;

const Result = ({post_code, country, places = []}: resultType) => (
    <ResultWrapper className="result-wrapper">
        <p>Post Code: {post_code}</p>
        <p>Country: {country}</p>
        <p>Place name: {places[0]?.place_name || '-'}</p>
        <p>State: {places[0]?.state || '-'}</p>
        <p>Longitude: {places[0]?.longitude || '-'}</p>
        <p>Latitude: {places[0]?.latitude || '-'}</p>
    </ResultWrapper>
);

export default Result;
