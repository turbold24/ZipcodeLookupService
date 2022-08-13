const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = require('graphql');

const placesType = new GraphQLObjectType({
    name: 'Places',
    fields: () => ({
        place_name: { type: GraphQLString },
        longitude: { type: GraphQLString },
        latitude: { type: GraphQLString },
        state: { type: GraphQLString },
        state_abbreviation: { type: GraphQLString },
    })
});

const countryType = new GraphQLObjectType({
    name: 'Country',
    fields: () => ({
        post_code: { type: GraphQLString },
        country: { type: GraphQLString },
        country_abbreviation: { type: GraphQLString },
        places: { type: new GraphQLList(placesType) },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'CountryInfo',
    fields: () => ({
        country: {
            type: countryType,
            args: {
                post_code: { type: GraphQLString },
                country_abbreviation: { type: GraphQLString },
            },
            resolve(parent, args) {
                const clearKeys = (obj) => {
                    const keys = Object.keys(obj);
                    return keys.reduce((arg, k) => {
                        let v = obj[k];

                        if(typeof v === 'object' && !v.length) { // when it's object
                            v = clearKeys(v);
                        }
                        if(typeof v === 'object' && !!v.length) { // when it's array of objects
                            v = v.map((c) => clearKeys(c));
                        }

                        return ({...arg, [k.replace(/\s/g, '_')]: v});
                    },{})
                }
                return axios
                    .get(`https://api.zippopotam.us/${args?.country_abbreviation}/${args?.post_code}`)
                    .then(res => clearKeys(res.data));
            }
        },
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});