import ApolloClient  from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import {AsyncStorage} from 'react-native'
import { InMemoryCache } from 'apollo-cache-inmemory';


// const server = "http://mybebo.pythonanywhere.com/graphql/";
const server = "http://10.0.2.2:8000/graphql/"
const httpLink = createHttpLink({
    uri:server
})


const authLink = setContext((_,{headers})=>{
    const token =  AsyncStorage.getItem('jwtToken');
    return {
        headers:{
            ...headers,
            authorization : token ? `JWT ${token}` : "",
        }
    }
});

const client  = new ApolloClient({
    link:authLink.concat(httpLink),
    cache:new InMemoryCache(),
})

export default client