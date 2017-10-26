import { ApolloClient, createNetworkInterface } from 'react-apollo'

const NETWORK_INTERFACE_URL = 'https://api.graph.cool/simple/v1/cj8on5hop0dq10113o9fsdu7r'

const networkInterface = createNetworkInterface({ uri: NETWORK_INTERFACE_URL })

const client = new ApolloClient({
  networkInterface: networkInterface,
  reduxRootSelector: state => state.differentKey,
  connectToDevTools: true
})

export default client
