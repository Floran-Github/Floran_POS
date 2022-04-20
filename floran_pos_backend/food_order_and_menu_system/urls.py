from django.urls import path
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('combo',ComboAPI,'combo_url')

urlpatterns = [
    path("order",FoodOrderAPI.as_view()),
]
urlpatterns += router.urls