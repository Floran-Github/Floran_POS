# Generated by Django 3.2.4 on 2022-04-11 12:19

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('room_number', models.IntegerField()),
                ('room_type', models.CharField(max_length=100)),
                ('number_of_person', models.IntegerField()),
                ('smoking', models.BooleanField()),
                ('room_rate', models.IntegerField()),
                ('user_linked', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='RoomAvailability',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day_date', models.DateTimeField()),
                ('available', models.IntegerField()),
                ('room_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='room_booking_api.room')),
            ],
        ),
        migrations.CreateModel(
            name='CustomerDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('mobile_number', models.CharField(blank=True, max_length=13, validators=[django.core.validators.RegexValidator(message="Entered mobile number isn't in a right format!", regex='^[0-9]{10,15}$')])),
                ('address', models.TextField()),
                ('id_proof', models.ImageField(upload_to='')),
                ('coming_from', models.CharField(max_length=100)),
                ('going_to', models.CharField(max_length=100)),
                ('remark', models.IntegerField()),
                ('user_linked', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('booking_number', models.IntegerField()),
                ('date_from', models.DateField()),
                ('date_to', models.DateField()),
                ('check_in', models.DateTimeField()),
                ('check_out', models.DateTimeField()),
                ('rate', models.IntegerField()),
                ('customer_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='room_booking_api.customerdetail')),
                ('room_number', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='room_booking_api.room')),
            ],
        ),
    ]
