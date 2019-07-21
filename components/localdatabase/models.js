import Realm from 'realm'
// import console = require('console');


export const User_schema = "User"

export const User = {
    name : User_schema,
    primaryKey: 'id',
    properties:{
        id:'string',
        first_name:'string?',
        last_name:'string?',
        username:'string?',
        last_login:'string?',
    }
};

const databaseOption ={
    path:'nsocial.realm',
    schema:[User],
    schemaVersion:0
}


export const InsertUser = user => new Promise((resolve,reject)=>{
    Realm.open(databaseOption).then(realm=>{
        if(!realm.objects("User").filtered(`id="${user.id}"`).length)
        {
            realm.write(()=>{
                realm.create(User_schema,user);
                resolve(user)
            })
            resolve("new user")
        }

    }).catch((error)=>reject(error));
})

export const CheckExist = id => new Promise((resolve,reject)=>{
    Realm.open(databaseOption).then(realm => {
        let ids = realm.objects(User_schema).filtered(`id="${id}"`)
        resolve(ids.length)
      }).catch((error)=>reject(error));
})



export const GetUsers =() => new Promise((resolve,reject)=>{
    Realm.open(databaseOption).then(realm => {

        // resolve(realm.objects(User_schema))
        let ids = Array.from(realm.objects(User_schema))
        // let ids = realm.objects(User_schema)
        resolve(ids)
    }).catch((error)=>reject(error));
})


export const queryAllUsers = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOption).then(realm => {        
        let U = realm.objects(User_schema);
        resolve(U);  
    }).catch((error) => {        
        reject(error);  
    });;
});


export const Flat={
    name : 'Flat',
    properties:{
        number:'string'
    }
}

export const Profile = {
    name : 'Profile',
    properties:{
        about:'string',
        phone:'string',
        gender:'string',
        isApproved:'boolean',
        isPhoneVisible:'boolean',
        isNameVisible:'boolean',
        flat:'Flat[]',
        user:'User'
    }
}

export const Society = {
    name : 'Society',
    properties:{
        name:'string',
        location:'string',
        city:'string',
    }
}


export default new Realm(databaseOption);