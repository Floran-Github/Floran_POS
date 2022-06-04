from django.urls import path
from .views import *
from rest_framework import routers, urlpatterns


router = routers.DefaultRouter()
router.register('room',room,'room')
router.register('type',roomTypeAPI,'type')
router.register('availability',roomAvailability,'roomAvailability')
router.register('customerDetail',customerDetail,'customerDetail')
router.register('booking',booking,'booking')

urlpatterns = [*router.urls]