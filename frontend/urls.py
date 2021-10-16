from django.urls import path
from .views import *
urlpatterns = [
    path('', index),
    path('login', index),
    path('register', index),
    path('createHotel', index),
    
    path('product', index),
    path('product/create', index),
    path('product/detail', index),

    path('supplier', index),
    path('supplier/create', index),

    path('purchase', index),
    path('purchase/bill', index),
    path('purchase/outstate/inv', index),
]