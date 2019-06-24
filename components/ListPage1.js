import React from 'react'
import {Image,Text,View, Button, ScrollView,FlatList,StyleSheet,ListView as LV,Dimensions,TouchableOpacity } from 'react-native'
//import Image from 'react-native-scalable-image'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import {ListItem} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';


export const GetAllFeeds = gql `query all{
  allContext(first:50){
    edges
    {
      node{
        id
        thumbs
        originalPhoto
        uploadBy{
          username
          id
          profilePic{
            id
            profilePhoto
            profileThumbs
          }
        }
      }
      
    }
  }
}`




// const CustomRow = ({ title, description, image_url }) => (

//   <View style={styles.container}>

//       {/* <Image source={{ uri: "http://mybebo.pythonanywhere.com/media/"+image_url}} style={styles.photo} /> */}
      
//       <ListItem
//         title={`${title}`}  
//         subtitle={description}                           
//         avatar={{ uri: `http://mybebo.pythonanywhere.com/media/${image_url}` }}   
//         containerStyle={{ borderBottomWidth: 0 }} 
//        /> 

//       {/* <View style={styles.container_text}>
//           <Text style={styles.title}>
//               {title}
//           </Text>
//           <Text style={styles.description}>
//               {description}
//           </Text>
//       </View> */}

//   </View>
// );


const Article = ({img,context,logo,user}) =>{
  console.log(logo)
  return(
  // <FlatList style={styles.containers}>
    
   
  //   </FlatList>
  
  <View style={styles.containers}>
    <View style={{flex:1,flexDirection:'row',backgroundColor:'white',alignContent:'center',alignItems:'center',padding:10,borderTopWidth:0.2,borderTopColor:'grey',elevation:5}}>
       <Image source={{uri:`http://mybebo.pythonanywhere.com/media/${logo}`}} style={{height:50,width:50,borderRadius:50}} />
      <View style={{flex:1,flexDirection:'column',alignContent:'center'}}>
        <Text style={{fontWeight:'bold',paddingLeft:10,color:'black',fontSize:17,textTransform:'capitalize'}}>{user}</Text>
        <Text style={{paddingLeft:10,color:'grey'}}>{context}</Text>
      </View>
      <TouchableOpacity>
      <Icon name="more-vert" size={20} color="#999999"/>
      </TouchableOpacity>
    </View>

    <Image resizeMode={'cover'} source={{uri:`http://mybebo.pythonanywhere.com/media/${img}`}} style={{height:500}} />
    <View style={styles.description}>
         <Text>{context}</Text>
          <View>
            <Text numberOfLines={2} >http://mybebo.pythonanywhere.com/media/{img}</Text>
          </View>
    </View>
    
    </View>
)
}


class ListView extends React.Component{
  static navigationOptions =  {
    title:"List Page"
  }

  constructor(props)
  {
      super(props);
      this.state={
          list:[]
      }
  }

  componentDidMount(){
      console.log("mounted")
      let {loading,allContext} = this.props.data
      console.log(loading)
      if(!loading)
      {
          console.log(allContext.edges)
          this.setState({list:allContext.edges})
      }
  }

    render()
    {
        //console.log(this.props.children)
        //console.log(this.props.data.allContext.edges)

        let {loading,allContext,error} = this.props.data
        if(loading)
        {
            console.log(this.props)
            return(
              
                <Text>loading.....</Text>
            )
        }
        if(error)
        {
          return(<Text>Error In Network</Text>)
        }
        
        console.log(this.props)
        let cont  = this.props.data.allContext.edges

        console.log(cont)
        //console.log(this.state)
        //let cont = this.props.data.allContext.edges
        //console.log(cont)
        return(
            // <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            //     <Text>List Pages</Text>
            //     <Button title="List" onPress={()=>this.props.navigation.navigate("Friends")}/>
            // </View>

          <ScrollView>


                {/* {
                  cont.map((item)=>(
                    <ListItem
                    title={`${item.node.id}`}  
                    // subtitle={`http://mybebo.pythonanywhere.com/media/${item.node.thumbs}` }
                    subtitle={item.node.thumbs}
                    // avatar={{ uri: `http://mybebo.pythonanywhere.com/media/${item.node.thumbs}` }}   
                    leftAvatar = {{source:{uri:`http://mybebo.pythonanywhere.com/media/${item.node.thumbs}`}}}
                    //containerStyle={{ borderBottomWidth: 0 }} 
                    //badge={{ value: 3 }}
                    onPress={()=>this.props.navigation.navigate(
                        "DetailView",{
                          id:item.node.id,
                        }
                      )}
                    // topDivider={true}
                    // bottomDivider={true}
                    />
                  ))
                } */}
                 
                 <FlatList
                 data={cont}
                 renderItem={({item})=>
                //  <Text>${item}</Text>
                 <Article img={item.node.thumbs} context={item.node.id} logo={item.node.uploadBy.profilePic.profileThumbs} user={item.node.uploadBy.username} />
              }
              />

                 {/* <FlatList
                    data={cont}
                    renderItem={({ item })=>
                    // <CustomRow 
                    //     title = {item.node.id}
                    //     image_url={item.node.thumbs}
                    //     description = {item.node.id}                    
                    // />
                    <ListItem
                    
                    title={`${item.node.id}`}  
                    // subtitle={`http://mybebo.pythonanywhere.com/media/${item.node.thumbs}` }
                    subtitle={item.node.thumbs}
                    // avatar={{ uri: `http://mybebo.pythonanywhere.com/media/${item.node.thumbs}` }}   
                    leftAvatar = {{source:{uri:`http://mybebo.pythonanywhere.com/media/${item.node.thumbs}`}}}
                    //containerStyle={{ borderBottomWidth: 0 }} 
                    //badge={{ value: 3 }}
                    
                    onPress={()=>this.props.navigation.navigate("Friends")}
                   />
                  
                  }
                    /> */}
          </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
  containers:{
      // padding:10,
      flex:1,
      marginBottom:20
      // // maxWidth :win.width,
      // marginBottom:10,
      // width:400,
  },
  header:{
    height:70,
    flex:1,
    flexDirection:'row',
    backgroundColor:'white',
    
  },
  container: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      marginTop: 8,
      marginBottom: 8,
      borderRadius: 5,
      width:600,
      backgroundColor: '#FFF',
      // elevation: 2,
  },
  title: {
      fontSize: 16,
      color: '#000',
  },
  container_text: {
      flex: 1,
      flexDirection: 'column',
      marginLeft: 12,
      justifyContent: 'center',
  },
  description: {
      fontSize: 11,
      minHeight:70,
      fontStyle: 'italic',
  },

});

export default compose(
    graphql(GetAllFeeds)
)(ListView)