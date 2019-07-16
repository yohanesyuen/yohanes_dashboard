import graphene

from graphene_django.types import DjangoObjectType

from .models import Account, State, Config


class AccountType(DjangoObjectType):
    class Meta:
        model = Account


class StateType(DjangoObjectType):
    class Meta:
        model = State


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
