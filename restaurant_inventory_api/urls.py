from django.urls import path
from .views import *
from rest_framework import routers, urlpatterns

# router = routers.DefaultRouter()
# router.register('',floorInventoryAPI,'floorInventoryAPI')

urlpatterns = [
    path('',GETfloorInventoryAPI.as_view()),
]