# Generated by Django 3.2.4 on 2022-04-20 02:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('food_order_and_menu_system', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='combo',
            name='comboImage',
            field=models.ImageField(default=0, upload_to='combo'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='combo',
            name='userLinked',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='combo', to=settings.AUTH_USER_MODEL),
        ),
    ]