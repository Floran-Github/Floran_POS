import re
from rest_framework.views import APIView
from .models import *
from .serializers import *
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions,status
from rest_framework.response import Response

class ComboAPI(ModelViewSet):
    serializers_classes = comboSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.combo.all()
    
    def perform_create(self, serializer):
        serializer.save(userLinked=self.request.user)

class FoodOrderAPI(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self,request,format=None):
        bomData = Bill_of_material.objects.filter(userLinked = request.user).all()

        nonVeg = []
        veg = []
        drink = []

        for i in bomData.values():
            if i["is_drink"]:
                drink.append(i)
            elif i["is_nonVeg"]:
                nonVeg.append(i)
            elif i["is_nonVeg"] == False:
                veg.append(i)

        context = {
            "veg": veg,
            "nonVeg":nonVeg,
            "drink":drink,
            "combo": Combo.objects.filter(userLinked=request.user).all().values()
        }
        return Response(context,status=status.HTTP_200_OK)
    def post(self,request,format=None):
        orderDetail = request.data['orderDetail']
        comboMealList = request.data['comboList']
        singleItemList = request.data['singleList']

        try:
            itm = Order.objects.filter(user_linked=request.user)

            if itm:
                orderNumber = itm.count() + 1
            else:
                orderNumber = 1
            orderData = Order(
                userLinked = request.user,
                customer = CustomerDetail.objects.filter(user_linked=request.user,pk=orderDetail.customerId),
                orderNumber = orderNumber,
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