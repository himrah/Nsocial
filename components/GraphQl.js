// import { gql } from 'react-apollo'
//import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'



export const GetAllUsers = gql `query GetAllUsers{
  users{
    edges{
      node{
        id
        username
        profile{
          id
          phone
          isNameVisible
          isPhoneVisible
          gender
          flat{
            id
            number
          }
        }
      }
    }
  }
}`

export const GetUser = gql`query GetUser($UserId:String!){
  user(UserId:$UserId)
  {
    id
    username
    firstName
    lastName
    lastLogin
    profile{
      id
      isNameVisible
      isPhoneVisible
      phone
      gender
      about
      flat{
        id
        number
      }
    }
  }
}`






export const GetAllVisitors = gql `query GetAllVisitors{
  visitors
  {
    pageInfo {
      startCursor
      endCursor
    }
    edges{
      node{
        id
        mobile
        userName
        purpose
      }
    }
  }
}
`

export const GetVisitor = gql `query  visitor($VisitorId:String!){
  visitor(visitorid:$VisitorId)
  {
    id
    address
    userName
    purpose
    createdDate
    mobile
    VeichleType
    VeichleNo
  }
}
`

export const CheckExistingVisitor = gql`mutation ExisitVisitor($mobile:Int!)
{
  Existing(
    mobile:$mobile
  ){
    match
    visitors{
      edges{
        node{
          id
          userName
          mobile
        }
      }
    }
  }
}

`

export const CreateVisitorMutation = gql `mutation Visitor($username:String!,
$address:String!,$mobile:String!,$floatNo:String!,
$purpose:String,$VeicleType:String!,$VeichleNumber:String!,$NOP:Int!)
{
  VisitorCreation(
    userName:$username
    address:$address
    mobile:$mobile
    flat:$floatNo
    purpose:$purpose
    veicleType:$VeicleType
    veicleNo:$VeichleNumber
    nop:$NOP
  ){
    formErrors
    visitor{
      id
      address
      userName
      purpose
      createdDate
      mobile
      VeichleType
      VeichleNo
    }
  }
}
`