from .views import *
from django.urls import path

urlpatterns = [
    path('',billOfMaterialListAPI.as_view()),
    path('<int:pk>',billOfMaterialDetail.as_view()),
    path('create',billOfMaterialCreateAPI.as_view())
]