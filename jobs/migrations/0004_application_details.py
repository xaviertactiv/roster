# Generated by Django 3.0.1 on 2020-03-27 07:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0003_auto_20200327_0737'),
    ]

    operations = [
        migrations.AddField(
            model_name='application',
            name='details',
            field=models.TextField(blank=True, null=True),
        ),
    ]