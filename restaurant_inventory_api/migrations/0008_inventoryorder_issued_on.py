# Generated by Django 3.2.4 on 2021-10-28 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant_inventory_api', '0007_auto_20211028_2011'),
    ]

    operations = [
        migrations.AddField(
            model_name='inventoryorder',
            name='issued_on',
            field=models.DateField(auto_now=True),
        ),
    ]
