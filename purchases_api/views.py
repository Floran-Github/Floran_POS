from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions,status
from .models import *
from supplier_api.models import supplier
from product_api.models import product

class purchaseApi(APIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self,request,format=None):
        instate_data = AllinStatePurchase.objects.filter(user=request.user).values()
        outstate_data = AllOutStatePurchase.objects.filter(user=request.user).values()

        return Response({
            "instate_data":instate_data,
            "outstate_data":outstate_data
        })
        
    def post(self, request, format=None):
        supplier_id = request.data['supplier_id']
        inv_number = request.data['invNumber']
        inv_date = request.data['invDate']
        grand_total = request.data['grandtotal']
        data = request.data['rowData']
        sup = supplier.objects.filter(id=supplier_id,user_linked=request.user).get()
        if sup:
            try:
                if request.data['bill_type'] == 'outstate':
                    purchase = AllOutStatePurchase(
                        user = request.user,
                        date = inv_date,
                        supplier = sup,
                        invNumber = inv_number,
                        total_amount = grand_total
                    )

                    purchase.save()

                    for i in data:
                        prd = product.objects.filter(
                            user_linked=request.user,
                            product_name=i[0]
                        )

                        qty = prd[0].product_quantity if len(prd) != 0 else 0


                        obj,created = product.objects.update_or_create(
                            user_linked=request.user,
                            product_name=i[0],
                            product_description = '',
                            defaults={
                                'product_quantity':qty+int(i[1]),
                                'product_price':float(i[2])
                                }
                        )
                        

                        invProduct = OutStatePurchase(
                            outstateInv = purchase,
                            product = i[0],
                            product_price = float(i[2]),
                            product_gst = str(i[3]),
                            quantity = int(i[1]),
                            total = float(i[4])
                        )

                        invProduct.save()
                elif request.data['bill_type'] == 'instate':
                    purchase = AllinStatePurchase(
                        user = request.user,
                        date = inv_date,
                        supplier = sup,
                        invNumber = inv_number,
                        total_amount = grand_total
                    )

                    purchase.save()

                    for i in data:
                        prd = product.objects.filter(
                            user_linked=request.user,
                            product_name=i[0]
                        )

                        qty = prd[0].product_quantity if len(prd) != 0 else 0


                        obj,created = product.objects.update_or_create(
                            user_linked=request.user,
                            product_name=i[0],
                            product_description = '',
                            defaults={
                                'product_quantity':qty+int(i[1]),
                                'product_price':float(i[2])
                                }
                        )
                        

                        invProduct = inStatePurchase(
                            instateInv = purchase,
                            product = i[0],
                            product_price = float(i[2]),
                            product_sgst = str(i[3]),
                            product_cgst = str(i[4]),
                            quantity = int(i[1]),
                            total = float(i[5])
                        )

                        invProduct.save()


                return Response({'message':'all good'},status=status.HTTP_200_OK)
                    
            except Exception as e:
                return Response({'error':e},status=status.HTTP_400_BAD_REQUEST)

        else:
            return Response({'Bad Request':'Supplier Not Found'},status=status.HTTP_400_BAD_REQUEST)