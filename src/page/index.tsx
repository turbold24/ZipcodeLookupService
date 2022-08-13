import React, {useState} from 'react';
import {HomePageStyled} from "./index.style";
import MiddleSection from '../sections/Middle.section';
import RightSection from '../sections/Right.section';
import LeftSection from '../sections/Left.section';
import {paramType} from '../types';
import {INITIAL_VALUES} from "../utils/constants";
import useResult from "../hooks/useResult";


function HomePage() {
    const [param, setParam] = useState<paramType>(INITIAL_VALUES);
    const {result, setResult} = useResult();

    return (
        <HomePageStyled className="home-page">
            <LeftSection setParam={setParam}/>
            <MiddleSection setResult={setResult} post_code={param.post_code} country_abbreviation={param.country_abbreviation}/>
            <RightSection setResult={setResult} result={result} />
        </HomePageStyled>
    );
}

export default HomePage;
