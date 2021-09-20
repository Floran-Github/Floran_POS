from django.urls import path,include
from .views import *
from knox import views as knox_views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('hotel_detail', hotelDetailAPI,'hotel_detail')

urlpatterns = [
    path('',include('knox.urls')),
    path('register',RegisterAPI.as_view()),
    path('login',LoginAPI.as_view()),
    path('user', UserAPI.as_view()),
    path('logout', knox_views.LogoutView.as_view(),name='knox_logout'),
    
]
urlpatterns += router.urls