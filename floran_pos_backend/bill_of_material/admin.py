from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Bill_of_material)
admin.site.register(Bill_of_material_Floor_Inventory_item)
admin.site.register(Bill_of_material_Kitchen_Inventory_item)