import React from 'react'
import {Image,Text,View, Button, ScrollView,FlatList,StyleSheet,ListView as LV,Dimensions,TouchableOpacity } from 'react-native'
//import Image from 'react-native-scalable-image'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import {ListItem} from 'react-native-elements'
import {GetAllUsers} from './GraphQl'
// import console = require('console');
import Icon from 'react-native-vector-icons/MaterialIcons';





const UserBlock = ({username,flatNo,mobile,id,props}) => {
    return(
        <View style={{flex:1,flexDirection:'row',padding:10,height:'auto',borderRadius:10,margin:5,marginBottom:10,backgroundColor:'white',elevation:5}}>
            <TouchableOpacity>
                <Icon name="account-circle" size={50} style={{height:50,width:50,borderRadius:50}}/>
            </TouchableOpacity>
                <View style={{flex:1,flexDirection:'row',alignSelf:"center",paddingLeft:10}} >
                        <View style={{flex:1,flexDirection:'column'}}>
                        <TouchableOpacity onPress={()=>
                            props.navigation.navigate("DetailView",
                            {
                                username:username,
                                flatNo:flatNo,
                                mobile:mobile,
                                id:id
                            
                            }
                            
                            )
                            }>
                            <Text style={{fontSize:18,fontWeight:'200',color:'black',textTransform:'capitalize'}}>{username}</Text>
                            <Text>{flatNo}</Text>
                            </TouchableOpacity>
                        </View>
                    <View>
                        <TouchableOpacity>
                            <Icon name="call" size={30} color="blue" />
                        </TouchableOpacity>
                    </View>
                </View> 

            
        </View>
    )
}



class ListView extends React.Component{
    static navigationOptions =  {
        title:"NSocial"
      }
      constructor(props)
      {
          super(props);
          this.state={
              list:[]
          }
      }
      componentDidMount()
      {
        //   console.log(this.props)
      }
      render()
      {
        //   console.log(this.props)
          let {loading,error,users} = this.props.data
          if(loading)
          {
            //   console.log(this.props)
              return(
                
                  <Text>loading.....</Text>
              )
          }
          if(error)
          {
            return(<Text>Error In Network</Text>)
          }
        //   this.setState({list:users})

          users = users.edges
          
          return(
            <ScrollView>
                {users.map(user=>
                    <UserBlock props={this.props} key={user.node.id} id={user.node.id} username = {user.node.username} mobile={user.node.profile?user.node.profile.phone:'none'} flatNo={user.node.profile?user.node.profile.flat.number:'none'}
                    />)}
            </ScrollView>

          )
      }
}

export default compose(
    graphql(GetAllUsers)
)(ListView)