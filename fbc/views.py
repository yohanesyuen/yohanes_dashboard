from rest_framework import viewsets

from .serializers import AccountSerializer
from .serializers import StateSerializer
from .serializers import ConfigSerializer

from .models import Account
from .models import State
from .models import Config


class AccountView(viewsets.ModelViewSet):
    serializer_class = AccountSerializer

    def get_queryset(self):
        queryset = Account.objects.all()
        account_id = self.request.query_params.get('account_id', None)
        if account_id is not None:
            queryset = queryset.filter(account_id=account_id)
        return queryset


class StateView(viewsets.ModelViewSet):
    serializer_class = StateSerializer

    def get_queryset(self):
        queryset = State.objects.all()
        account = self.request.query_params.get('account', None)
        config_name = self.request.query_params.get('name', None)
        if account is not None:
            queryset = queryset.filter(account__account_id=account)
        if config_name is not None:
            queryset = queryset.filter(name=config_name)
        return queryset


class ConfigView(viewsets.ModelViewSet):
    serializer_class = ConfigSerializer

    def get_queryset(self):
        queryset = Config.objects.all()
        account = self.request.query_params.get('account', None)
        state_name = self.request.query_params.get('name', None)
        if account is not None:
            queryset = queryset.filter(account__account_id=account)
        if state_name is not None:
            queryset = queryset.filter(name=state_name)
        return queryset
