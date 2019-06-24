from graphene import relay
import graphene
from graphene_django.fields import DjangoConnectionField
from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.debug import DjangoDebug
from graphql_relay.node.node import from_global_id
from django.db.models import Q
from app.models import *
from django.contrib.auth.models import User


class FlatType(DjangoObjectType):
    class Meta:
        model = Flat
        interfaces = (relay.Node,)

class ProfileType(DjangoObjectType):
    class Meta:
        model = Profile
        interfaces = (relay.Node, )

class UsersType(DjangoObjectType):
    class Meta:
        model = User
        filter_fields =()
        interfaces = (relay.Node, )


class Query(graphene.AbstractType):
    users = DjangoFilterConnectionField(UsersType)
    user = graphene.Field(UsersType, UserId=graphene.String())


    def resolve_users(self,info,**kwargs):
        if(info.context.user.is_authenticated):
            return User.objects.all()

    def resolve_user(self,info,UserId):
        print(UserId)
        ids = from_global_id(UserId)[1]
        return User.objects.get(id=ids)
