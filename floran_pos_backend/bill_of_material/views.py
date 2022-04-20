from collections import UserList
from threading import stack_size
from urllib import request, response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions,status
from rest_framework.response import Response
from .serializers import *
from restaurant_inventory_api.models import FloorInventory
from .models import *
class billOfMaterialListAPI(ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = billofmaterialSerializer
    model = serializer_class.Meta.model

    def get_queryset(self):
        return self.model.objects.filter(userLinked=self.request.user)


class billOfMaterialDetail(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self,request,pk=None):
        bomdata = Bill_of_material.objects.filter(pk=pk,userLinked=request.user)

        if bomdata:
            print(bomdata.get())
            floorItem = Bill_of_material_Floor_Inventory_item.objects.filter(bomAssociated=bomdata.get())
            kitchenItem = Bill_of_material_Kitchen_Inventory_item.objects.filter(bomAssociated=bomdata.get())

            floorItemData = []
            kitchenItemData = []

            for i in floorItem:
                itm = {
                    "id" : i.id,
                    "name" : i.itemAssociated.product.product_name
                }

                floorItemData.append(itm)

            for i in kitchenItem:
                itm = {
                    "id" : i.id,
                    "name" : i.name
                }

                kitchenItemData.append(itm)
            print(floorItem)
            print(kitchenItem)
            print(bomdata.all().values())
            serial = billofmaterialSerializer(bomdata, many=True,context={"request":request})
            if serial:
                # vali = serial.is_valid().data
                context =  {
                        "bomDetail" : serial.data[0],
                        "floorItem" : floorItemData,
                        "kitchenItem" : kitchenItemData
                    }
                
                return Response(context,status=status.HTTP_200_OK)
            else:
                print(serial.errors)
            
        return Response({"details":"Not Found"},status=status.HTTP_404_NOT_FOUND)
        




class billOfMaterialCreateAPI(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self,request,format=None):
        bomDetail = request.data['bomDetail']
        bomFloorInventoryItem = request.data['bomFloorInventoryItem']
        bomKitchenItem = request.data['bomKitchenItem']

        if bomDetail and (bomFloorInventoryItem or bomKitchenItem):
            try:
                bomObj = Bill_of_material(
                    name = bomDetail['name'],
                    userLinked = request.user,
                    production_cost = bomDetail['production_cost'],
                    price = bomDetail['price'],
                    description = bomDetail['description'],
                    receipe = bomDetail['receipe']
                )

                bomObj.save()

                if bomFloorInventoryItem:
                    for i in bomFloorInventoryItem:
                        print(i)
                        floorInvData = FloorInventory.objects.get(user_linked=request.user,id=i['itemAssociated'])
                        bomFloorObj = Bill_of_material_Floor_Inventory_item(
                            bomAssociated=bomObj,
                            itemAssociated=floorInvData,
                            quantityUsed=i['quantityUsed']
                        )

                        bomFloorObj.save()

                if bomKitchenItem:
                    for i in bomKitchenItem:
                        print(i)
                        kitchenInvData = Bill_of_material.objects.get(user_linked=request.user,id=i['kitchenitemAssociated'])
                        bomKitchenObj = Bill_of_material_Kitchen_Inventory_item(
                            bomAssociated=bomObj,
                            kitchenitemAssociated=kitchenInvData,
                            quantityUsed=i['quantityUsed']
                        )

                        bomKitchenObj.save()
                return Response(bomObj.values(),status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({'msg':e},status=status.HTTP_400_BAD_REQUEST)
                