import graphene

from graphene_django.types import DjangoObjectType
from graphene_django.rest_framework.mutation import SerializerMutation

from django.db import DatabaseError, transaction

from .models import Account, State, Config

from .serializers import AccountSerializer
from .serializers import StateSerializer
from .serializers import ConfigSerializer


class AccountType(DjangoObjectType):
    class Meta:
        model = Account

class CreateAccount(graphene.Mutation):
    class Arguments:
        account_id = graphene.Int()
        name = graphene.String()
    
    account = graphene.Field(AccountType)
    
    def mutate(self, info, account_id, name):
        account = Account()
        account.account_id = account_id
        account.name = name
        account.save()
        return CreateAccount(account=account)

class StateType(DjangoObjectType):
    class Meta:
        model = State

class StateInputType(graphene.InputObjectType):
    name = graphene.String()
    value = graphene.String()

class UpdateStates(graphene.Mutation):
    class Arguments:
        account_id = graphene.Int()
        states = graphene.List(StateInputType)
    
    account = graphene.Field(AccountType)

    def mutate(self, info, account_id, states):
        account = Account.objects.get(account_id=account_id)
        print('Updating {}'.format(states))
        with transaction.atomic():
            for state in states:
                updated_state = State.objects.filter(account=account, name=state.name).update(value=state.value)
                if not updated_state:
                    State.objects.create(account=account, name=state.name, value=state.value)
        print(self)
        return UpdateStates(account=account)


class ConfigType(DjangoObjectType):
    class Meta:
        model = Config

class Query(object):
    account = graphene.Field(AccountType,
                             id=graphene.Int(),
                             account_id=graphene.Int(),
                             name=graphene.String()
                             )
    all_accounts = graphene.List(AccountType)
    state = graphene.Field(StateType,
                           id=graphene.Int(),
                           name=graphene.String(),
                           value=graphene.String())
    all_states = graphene.List(StateType)
    config = graphene.Field(ConfigType,
                            id=graphene.Int(),
                            name=graphene.String(),
                            value=graphene.String())
    all_configs = graphene.List(ConfigType)

    def resolve_all_accounts(self, info, **kwargs):
        return Account.objects.all()

    def resolve_all_states(self, info, **kwargs):
        return State.objects.all()

    def resolve_all_configs(self, info, **kwargs):
        return Config.objects.all()

    def resolve_account(self, info, **kwargs):
        id = kwargs.get('id')
        account_id = kwargs.get('account_id')
        name = kwargs.get('name')

        if id is not None:
            return Account.objects.get(pk=id)
        if account_id is not None:
            return Account.objects.get(account_id=account_id)
        if name is not None:
            return Account.objects.get(name=name)

        return None

    def resolve_state(self, info, **kwargs):
        id = kwargs.get('id')
        name = kwargs.get('name')
        value = kwargs.get('value')

        if id is not None:
            return State.objects.get(pk=id)
        if name is not None:
            return State.objects.get(name=name)
        if value is not None:
            return State.objects.get(value=value)

        return None

    def resolve_config(self, info, **kwargs):
        id = kwargs.get('id')
        name = kwargs.get('name')
        value = kwargs.get('value')

        if id is not None:
            return Config.objects.get(pk=id)
        if name is not None:
            return Config.objects.get(name=name)
        if value is not None:
            return Config.objects.get(value=value)

        return None

class Mutation(graphene.ObjectType):
    create_account = CreateAccount.Field()
    update_states = UpdateStates.Field()