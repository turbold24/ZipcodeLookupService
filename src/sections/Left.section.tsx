import React, {useState} from 'react';
import countries from "../utils/countries.json";
import {paramType} from "../types";
import {INITIAL_VALUES} from "../utils/constants";

function LeftSection({setParam}: {setParam: (val: paramType) => void}) {
    const [values, setValues] = useState<paramType>(INITIAL_VALUES);

    return (
        <div className="left f-column">
            <h2 className="title">Lookup Form</h2>
            <form className="zip-form" onSubmit={(e) => {
                e.preventDefault();
                setParam(values);
            }}>
                <label className="countries-label">
                    Please select your country:
                    <select
                        className="countries-select"
                        defaultValue="US"
                        name="country_abbreviation"
                        onChange={({target: {name, value}}) => setValues({...values, [name]: value})}
                    >
                        {countries.map((item, index) => (
                            <option key={index} value={String(item.code)}>{item.name}</option>
                        ))}
                    </select>
                </label>
                <label className="zipcode-label">
                    Please enter your zip code:
                    <input
                        required
                        name="post_code"
                        onChange={
                            ({target: {name, value}}) => setValues({...values, [name]: value})
                        }
                    />
                </label>
                <button type="submit" className="search-btn">
                    Search
                </button>
            </form>
            <div />
        </div>
    );
}

export default LeftSection;