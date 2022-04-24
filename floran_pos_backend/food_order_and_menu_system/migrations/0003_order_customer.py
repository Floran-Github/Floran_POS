# Generated by Django 3.2.4 on 2022-04-20 16:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('room_booking_api', '0003_auto_20220420_0808'),
        ('food_order_and_menu_system', '0002_auto_20220420_0827'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='customer',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='room_booking_api.customerdetail'),
            preserve_default=False,
        ),
    ]
