/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
//import ListView from './components/ListPage'
import DetailView from './components/Detailpage'
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

import { createSwitchNavigator,createAppContainer } from "react-navigation";

class ListView extends React.Component{
  render()
  {
      console.log(this.props)
      return(
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text>List Page</Text>
              <Button title="List" onPress={()=>this.props.navigation.navigate("detailpage")}/>
          </View>

      )
  }
}


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const AppSwitchNavigator = createSwitchNavigator({
  listpage:{
    screen:ListView
  },
  detailpage:{
    screen:DetailView
  }
})

const AppContainer = createAppContainer(AppSwitchNavigator)

//type Props = {};


class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
        
      //   <Text style={styles.welcome}> to </Text>

      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
      <AppContainer />
    );
  }
}


// const AppNavigator = createStackNavigator({
//   //Home:App,
//   Home:ListView,
//   Detail:DetailView
// },
// {
//   initialRouteName:"Home"
// })

//const App = createAppContainer(AppNavigator)


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



export default App;