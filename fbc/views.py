from django.shortcuts import render
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
        account = self.request.query_params.get('account',None)
        if account is not None:
            queryset = queryset.filter(account__account_id=account)
        return queryset



class ConfigView(viewsets.ModelViewSet):
    serializer_class = ConfigSerializer


    def get_queryset(self):
        queryset = Config.objects.all()
        account = self.request.query_params.get('account',None)
        if account is not None:
            queryset = queryset.filter(account__account_id=account)
        return queryset


