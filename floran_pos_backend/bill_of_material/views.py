from threading import stack_size
from urllib import response
from rest_framework.views import APIView
from rest_framework import permissions,status
from rest_framework.response import Response
from restaurant_inventory_api.models import FloorInventory
from .models import *
class billOfMaterialListAPI(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self,request,pk=None):
        try:
            billOfMaterialList = Bill_of_material.objects.filter(userLinked = request.user)
            return Response(billOfMaterialList.values(),status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"message":e},status=status.HTTP_400_BAD_REQUEST)

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
                