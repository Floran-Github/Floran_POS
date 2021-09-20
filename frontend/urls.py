from django.urls import path
from .views import *
urlpatterns = [
    path('', index),
    path('login', index),
    path('splash', index),
    path('register', index),
    path('createHotel', index),
    path('product', index),
    path('product/create', index),
    path('product/detail', index),
]