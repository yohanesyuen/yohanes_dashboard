# Generated by Django 2.2.3 on 2019-07-21 18:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fbc', '0004_auto_20190716_1615'),
    ]

    operations = [
        migrations.AlterField(
            model_name='config',
            name='account',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='configs', to='fbc.Account'),
        ),
        migrations.AlterField(
            model_name='state',
            name='account',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='states', to='fbc.Account'),
        ),
    ]
