from django.contrib import admin

from .models import *

admin.site.register(Room)
admin.site.register(RoomType)
admin.site.register(RoomAvailability)
admin.site.register(CustomerDetail)
admin.site.register(Booking)