# Generated by Django 4.0.4 on 2022-05-11 14:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room_booking_api', '0005_auto_20220501_1815'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='number_of_people',
            field=models.IntegerField(default=2),
        ),
    ]