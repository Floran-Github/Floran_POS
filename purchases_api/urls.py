from rest_framework import routers, urlpatterns

from .views import *
from django.urls import path

urlpatterns = [
    path('',purchaseApi.as_view()),
]