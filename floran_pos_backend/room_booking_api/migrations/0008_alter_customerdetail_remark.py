# Generated by Django 4.0.4 on 2022-05-11 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room_booking_api', '0007_remove_customerdetail_coming_from_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customerdetail',
            name='remark',
            field=models.TextField(blank=True, null=True),
        ),
    ]
