# Generated by Django 3.2.4 on 2021-10-24 20:47

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant_inventory_api', '0003_inventoryorder'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inventoryorder',
            name='delievery_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
