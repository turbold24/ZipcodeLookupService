import React from 'react';
import Result from "../components/Result";
import {RESULT_COUNT} from "../utils/constants";
import {resultType} from "../types";

type ResultType = {
    result: Array<resultType>
    setResult: (p: any[]) => void
}

function RightSection({result, setResult}: ResultType) {

    return (
        <div className="right f-column">
            <h2 className="title">Search History</h2>
            <div className="history">
                {
                    result
                        .reverse().filter((v: any) => Object.keys(v).length !== 0)
                        .slice(0, RESULT_COUNT)
                        .map((c, i) => (
                        <Result
                            key={i}
                            post_code={c.post_code}
                            country={c.country}
                            country_abbreviation={c.country_abbreviation}
                            places={c.places}
                        />
                    ))
                }
            </div>
            <button type="button" className="clear-btn" onClick={() => {
                localStorage.clear();
                setResult([]);
            }}>
                Clear search history
            </button>
        </div>
    );
}

export default RightSection;
