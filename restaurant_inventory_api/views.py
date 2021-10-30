from rest_framework.decorators import permission_classes
from rest_framework.response import Response
from rest_framework.viewsets import *
from .serializers import *
from rest_framework import permissions,views,status
from .models import *
from product_api.models import product
#### APIview is choosen because we only want api to get data

'''
ORDER => LIST OF PRODUCT IN ITEM WITH QUANTITY => ADD MULTIPLE ROWS IN FLOOR INVENTORY

'''


# ONLY USE TO GET FLOOR INVENTORY ITEMS
class GETfloorInventoryAPI(views.APIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self,request,format=None):
        data = FloorInventory.objects.filter(user_linked=self.request.user)
        prddata=[]
        for i in data:
            prddata.append([i.product.pk,i.product.product_name,i.product.product_price])
        return Response({"floorinventory":data.values(),"invPrdData":prddata},status=status.HTTP_200_OK)

class orderAPI(views.APIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self,request,format=None):
        orderitmes = []
        prd = []
        orderdata = InventoryOrder.objects.filter(user_linked=request.user)

        for i in orderdata:
            item = InventoryOrderItems.objects.filter(order=i)
            newitem = InventoryOrderNewItems.objects.filter(order=i)
            tp = []
            for j in item.values():
                tp.append(j)
            for j in newitem.values():
                tp.append(j)
            orderitmes.append(tp)
            temp = []
            for j in item:
                temp.append(j.product.product_name)
            for j in newitem:
                temp.append(j.product_name)
            prd.append(temp)
        
        context = {
            "order":orderdata.values(),
            "orderitems":orderitmes,
            "itemprd":prd
        }
        return Response(context,status=status.HTTP_200_OK)
    def post(self,request,format=None):
        prd = request.data['prdData']
        newprd = request.data['newprd']

        order_no = InventoryOrder.objects.filter(user_linked=request.user).count() + 1
        orderModel = InventoryOrder(
            user_linked = request.user,
            order_name = order_no,
            memo = request.data['memo'],
            delievery_date=request.data['delievery_date']
        )

        orderModel.save()
        if(prd):
            for i in prd:
                itm = InventoryOrderItems(
                    order= orderModel,
                    product=product.objects.filter(user_linked=request.user,pk=i[0]).get(),
                    quantity=int(i[2])
                )
                itm.save()


        if(newprd):
            for i in newprd:
                itm = InventoryOrderNewItems(
                    order=orderModel,
                    product_name=i[0],
                    product_description=i[1],
                    product_quantity=int(i[2])
                )

                itm.save()
        
            




        
        return Response({"message":"all good"},status=status.HTTP_200_OK)