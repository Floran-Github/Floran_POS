import re
from rest_framework.views import APIView
from .models import *
from .serializers import *
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions

class ComboAPI(ModelViewSet):
    serializers_classes = comboSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.combo.all()
    
    def perform_create(self, serializer):
        serializer.save(userLinked=self.request.user)

class FoodOrderAPI(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self,request,format=None):
        orderDetail = request.data['orderDetail']
        comboMealList = request.data['comboList']
        singleItemList = request.data['singleList']

        try:
            orderData = Order(
                userLinked = request.user,
                orderNumber = orderDetail.orderNumber,
                orderPrice = orderDetail.orderPrice
            )
            orderData.save()

            for i in comboMealList:
                data = OrderComboItems(
                    orderAssociated = orderData,
                    comboAssociated = Combo.objects.filter(userLinked=request.user,pk=i.comboId),
                    qty = i.qty,
                    totalAmount = i.totalAmount
                )

                data.save()

            for i in singleItemList:
                pass
        except:
            orderData.delete()
            print("error occur")