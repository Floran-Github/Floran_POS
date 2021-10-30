from django.contrib import admin
from .models  import *

admin.site.register(FloorInventory)
admin.site.register(InventoryOrder)
admin.site.register(InventoryOrderItems)
