
export type paramType = Partial<{ post_code: string; country_abbreviation: string, result: any, setResult: any }>;

export type placesType = Array<{
    "place_name": string,
    "longitude": string,
    "state": string,
    "state_abbreviation": string,
    "latitude": string,
}>

export type resultType = Partial<{
    "post_code": string,
    "country": string,
    "country_abbreviation": string,
    "places": placesType
}>
