from .views import *
from django.urls import path

urlpatterns = [
    path('',dashboard.as_view()),
]