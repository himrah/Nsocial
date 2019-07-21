export class UserModel{
    constructor(id,password,last_login,is_superuser,username,firstName,lastName,email,is_staff,is_active,date_joined)
    {
        this.id = id;
        this.first_name = firstName
        this.last_name = lastName
        this.username = username
        this.password = password
        this.last_login = last_login
        this.is_superuser = is_superuser
        this.email = email
        this.is_staff = is_staff
        this.is_active = is_active
        this.date_joined = date_joined
    }
}


export class Profile{
    constructor(id,about,phone,gender,isPhoneVisible,isNameVisible,pic,flat_id,user_id,isApproved)
    {
        this.id = id;
        this.about = about
        this.phone = phone
        this.gender = gender
        this.isPhoneVisible = isPhoneVisible
        this.isNameVisible = isNameVisible
        this.pic = pic
        this.flat_id = flat_id
        this.user_id = user_id
        this.isApproved = isApproved
    }
}



// module.exports = UserModel


// module.exports = UserServices
