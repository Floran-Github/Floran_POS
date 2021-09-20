from rest_framework import routers, urlpatterns
from .views import *

router = routers.DefaultRouter()
router.register('',supplierApi,'supplier')

urlpatterns = []
urlpatterns += router.urls