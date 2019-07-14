from django.db import models


class Account(models.Model):
    account_id = models.IntegerField()
    name = models.CharField(max_length=32)
