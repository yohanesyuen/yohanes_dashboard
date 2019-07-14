from django.contrib import admin

from .models import Account

# Register your models here.


class AccountAdmin(admin.ModelAdmin):
    list_display = ('account_id', 'name')


admin.site.register(Account, AccountAdmin)
