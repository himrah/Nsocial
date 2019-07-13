import React from 'react'
import {Image,Text,View, Button, ScrollView,FlatList,StyleSheet,ListView as LV,Dimensions,TouchableOpacity } from 'react-native'
//import Image from 'react-native-scalable-image'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import {ListItem} from 'react-native-elements'
import {GetAllUsers} from './GraphQl'
// import console = require('console');

// import {User,InsertUser,GetUsers,CheckExist,queryAllUsers} from './localdatabase/models'

// import {UserModel,UserService} from './localdatabase/usermodel'
import UserServices from './localdatabase/userservice';
import UserModel from './localdatabase/usermodel';


import realm from './localdatabase/models'

import Icon from 'react-native-vector-icons/MaterialIcons';
// import console = require('console');
// import Realm from 'realm';
const Realm = require('realm');
import { connectRealm } from 'react-native-realm';


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

const databaseOptions = {
    path: 'realmT4.realm',
    schema: ['User'],
    schemaVersion: 0
  };

class ListView extends React.Component{
    static navigationOptions =  {
        title:"NSocial"
      }
      constructor(props)
      {
          super(props);
          this.state={
              list:[],
              users:null,
              size:0,
          }
      }


      componentWillMount()
      {
        // Realm.open(databaseOptions).then(realm => {
        //     //this.setState({ size: realm.objects(User).length });
        //   });

        // this.setState({size:GetUsers.length})
        // console.log("userLengt",GetUsers.length)
      }

      componentWillReceiveProps(nextProps) {
        console.log(nextProps)

        let {users,loading}  = nextProps.data
        // console.log(users.edges)
        users.edges.map(user=>{
            
                console.log(user.node)

                UserServices.save(new UserModel(
                        user.node.id,
                        user.node.firstName,
                        user.node.lastName,
                        user.node.username,
                        // last_login:'null'
                    ))
                

            // }
            // console.log(user.node.id)
        })

        this.setState({users:UserServices.findAll()})
        // console.log(GetUsers.length)

            // queryAllUsers().then((u)=>{
            //     //console.log(u)
            //     this.setState({users:u})

            // }).catch((err)=>console.log(err))
        // GetUsers().then((uu)=>{
        //     console.log(uu.length())
        //     this.setState({users:uu})
        // }).catch((err)=>console.log(err))


        
      }
      

      componentDidMount()
      {
           console.log(this.props)
      }
      render()
      {
        //   console.log(this.props)
        // Realm.open({}).then(real=>{
        //     console.log(real.path)
        // })

        let {loading,error,users} = this.props.data

            // console.log(UserModel)
        // console.log(UserServices.findAll())

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

        
        console.log(this.state.users[1].first_name)
        users = users.edges
          
          return(
            <ScrollView>

                {/* {users.map(user=>
                    <UserBlock props={this.props} key={user.node.id} id={user.node.id} username = {user.node.username} mobile={user.node.profile?user.node.profile.phone:'none'} flatNo={user.node.profile?user.node.profile.flat.number:'none'}
                    />)} */}
                {
                    this.state.users.map(user=>
                        <UserBlock props={this.props} key={user.id} username={user.username} id={user.id} mobile="989" flatNo="101" />
                        )
                }

            </ScrollView>

          )
      }
}

export default compose(
    
    graphql(GetAllUsers)
)(ListView)