import {useEffect, useState} from 'react';
import {resultType} from "../types";
import {STORAGE_KEY} from "../utils/constants";

function UseResult() {
    const [result, setResult] = useState<Array<resultType>>([] as Array<resultType>);

    useEffect(() => setResult(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')), []);
    return {result, setResult}
}

export default UseResult;
