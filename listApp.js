/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, {Component} from 'react';
import ListView from './components/ListPage'
import DetailView from './components/Detailpage'
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

import { createSwitchNavigator,createAppContainer ,createStackNavigator } from "react-navigation";
import client from './components/GraphQlConnection'
import { ApolloProvider } from "react-apollo";




// class ListView extends React.Component{
//   static navigationOptions = {
//     title:"List Page"
//   };
//   render()
//   {
//       console.log(this.props)
//       return(
//           <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//               <Text>List Page</Text>
//               <Button title="List" onPress={()=>this.props.navigation.navigate("Friends")}/>
//           </View>

//       )
//   }
// }



// const AppSwitchNavigator = createSwitchNavigator({
//   listpage:{
//     screen:ListView
//   },
//   detailpage:{
//     screen:DetailView
//   }
// })

class Friends extends React.Component {
  static navigationOptions = {
    headerTitle:"Detail Page",
    headerRight:(
      <Text style={{paddingRight:4}}>Click</Text>
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>
        <Button title="backtohome" onPress={()=>this.props.navigation.navigate("ListView")}/>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator({
  ListView:ListView,
  Friends:Friends,
  DetailView:DetailView,
},{
  initialRouteName:"ListView"
}
)

const AppContainer = createAppContainer(AppNavigator)








const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppContainer/>
       </ApolloProvider>
    );
  }
}

export default App;