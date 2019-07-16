from django.contrib import admin

from .models import Account
from .models import State
from .models import Config

# Register your models here.


class StateAdminInline(admin.TabularInline):
    model = State


class ConfigAdminInline(admin.TabularInline):
    model = Config


class AccountAdmin(admin.ModelAdmin):
    inlines = (StateAdminInline, ConfigAdminInline, )
    list_display = ('id', 'account_id', 'name')


class StateAdmin(admin.ModelAdmin):
    list_display = ('id', 'account', 'name', 'value')


class ConfigAdmin(admin.ModelAdmin):
    list_display = ('id', 'account', 'name', 'value')


admin.site.register(Account, AccountAdmin)
admin.site.register(State, StateAdmin)
admin.site.register(Config, ConfigAdmin)
