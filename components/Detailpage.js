import { Text,View,Button,TouchableOpacity } from "react-native";
import React from 'react'
import { HeaderBackButton } from "react-navigation";
import { Header } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons';

// const CustomHeader = props=>{
//     // console.log(props.navigation.goBack)
//     console.log(props)
//     return(

//     <View style={{height:56,backgroundColor:'white',flexDirection:'row',alignItems:'center',elevation:5}}>
//         <View>
//             <TouchableOpacity>
//                 <Icon name="arrow-back" size={30} color={"black"}  onPress={alert("clicked")}   />
//             </TouchableOpacity>
//         </View>
//         <View>

//         </View>
//     </View>
//     )
// }
const CustomHeader =()=> {
    return(
        <View>
            <Text>Details</Text>
        </View>

    )
}


class DetailVew extends React.Component{

    // static {navigation} = this.props
    
    static navigationOptions =({navigation})=> {
        let {username,flatNo,mobile,id} = navigation.state.params
        return{
            // header:<CustomHeader />,
            // header:props=><CustomHeader {...props}/>,
            headerTitle:(
            <View style={{flex:1,flexDirection:'row',alignSelf:"center",paddingLeft:10}}>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <Icon size={40} name="account-circle" color="white" />                
                    </View>
                    <View style={{paddingLeft:5}}>
                        <Text style={{fontSize:18,color:'white',fontWeight:'500'}}>{username}</Text>
                        <Text style={{color:'white'}}>{flatNo}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                        <Icon name="more-vert" size={20} color="white"/>
                    </View>      
                </TouchableOpacity>
            </View>
            
            ),
            
            
            headerRight:(<Text>Right</Text>),
            tabBarIcon: <Icon name="arrow-back" size={30} color={"black"}  />,
            headerStyle: {
                backgroundColor: "black"
              },
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#fff",                
                marginLeft:0
              },
              headerTintColor: "#fff",
              animationEnabled: true
        }
        // return{
        //     //console.log(navigation)
        //     title:navigation.state.params.user,
            
        // }
      }
    render()
    {

        const { navigation } = this.props;
        const itemId = navigation.getParam('id');
        //const otherParam = navigation.getParam('otherParam');
        // console.log(navigation)

        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>{itemId}</Text>
                <Button title="List" onPress={()=>this.props.navigator.navigate("listpage")}/>
            </View>
        )
    }
}
export default DetailVew