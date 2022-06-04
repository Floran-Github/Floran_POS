# Generated by Django 4.0.4 on 2022-05-11 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room_booking_api', '0006_booking_number_of_people'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customerdetail',
            name='coming_from',
        ),
        migrations.RemoveField(
            model_name='customerdetail',
            name='going_to',
        ),
        migrations.AddField(
            model_name='booking',
            name='coming_from',
            field=models.CharField(default=0, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='booking',
            name='going_to',
            field=models.CharField(default=0, max_length=100),
            preserve_default=False,
        ),
    ]