from django.db import models


class Account(models.Model):
    account_id = models.IntegerField(unique=True)
    name = models.CharField(max_length=32)

    def __str__(self):
        return '{} - {}'.format(self.account_id, self.name)

class State(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    name = models.CharField(max_length=32)
    value = models.CharField(max_length=256)
