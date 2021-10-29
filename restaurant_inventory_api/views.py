from rest_framework.decorators import permission_classes
from rest_framework.response import Response
from rest_framework.viewsets import *
from .serializers import *
from rest_framework import permissions,views,status
from .models import FloorInventory

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
            prddata.append([i.product.product_name,i.product.product_price])
        print(data)
        return Response({"floorinventory":data.values(),"invPrdData":prddata},status=status.HTTP_200_OK)

class orderAPI(views.APIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    def post(self,requst,format=None):
        data = request.data['order_data']
        
        pass