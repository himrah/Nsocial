
import Realm from 'realm'

let User = new Realm({
    schema:[{
        name : "User",
        primaryKey: 'id',
        properties:{
            id:'string',
            first_name:'string?',
            last_name:'string?',
            username:'string?',
        }
    }],

    migration:(oldRealm,newRealm)=>{
        if(oldRealm.schemaVersion<1)
        {
            const oldObjects = oldRealm.objects('User')
            const newObjects = newRealm.objects('User')
            for(let i=0;i<oldObjects.length;i++)
            {
                newObjects[i].name = oldObjects[i]
            }

        }
    }
});


let UserServices = {
    findAll:function()
    {
        // if(!sortBy) sortBy = [["complete",false],[""]]
        return Array.from(User.objects("User"))
    },
    save:function(user){
        console.log(user)
        // console.log(User.objects("User").filtered(`id="${user.id}"`).length)
        // if(!User.objects("User").filtered(`id="${user.id}"`).length) return ;
        if(!User.objects("User").filtered(`id="${user.id}"`).length)
        {
            User.write(()=>{
                User.create("User",user)
            })
        }
    }
}

module.exports = UserServices