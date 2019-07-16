from rest_framework import serializers

from .models import Account
from .models import State
from .models import Config


class AccountSerializer(serializers.ModelSerializer):
    states = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='state-detail'
    )
    configs = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='config-detail'
    )

    class Meta:
        model = Account
        fields = ('id', 'account_id', 'name', 'states', 'configs')


class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = ('id', 'account', 'name', 'value')


class ConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = Config
        fields = ('id', 'account', 'name', 'value')
