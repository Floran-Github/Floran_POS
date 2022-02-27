from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions,status
from .models import *
from supplier_api.models import supplier
from product_api.models import product


class singleInstatePurchaseDataApi(APIView):
    permission_classes  = [permissions.IsAuthenticated]

    def get(self,request,pk=None):
        print(request.user)
        print(pk)

        invoiceDetail = AllinStatePurchase.objects.filter(pk=pk,user=request.user)
        print(invoiceDetail)
        print("=======================")
        invoicePrds = inStatePurchase.objects.filter(instateInv=invoiceDetail.get())
        invPrds = invoicePrds.values()
        total_cost,total_cgst,total_sgst = 0,0,0

        for i in invoicePrds:
            total_cost += i.total_price
            total_cgst += i.cgst_price
            total_sgst += i.sgst_price

        context = {
            "invoiceDetail":invoiceDetail.values(),
            "invoicePrds":invPrds,
            "total_cost": total_cost,
            "total_cgst": total_cgst,
            "total_sgst": total_sgst,
        }
        
        print(context)
        return Response(context,status=status.HTTP_200_OK)
class singleOutstatePurchaseDataApi(APIView):
    permission_classes  = [permissions.IsAuthenticated]

    def get(self,request,pk=None):
        
        invoiceDetail = AllOutStatePurchase.objects.filter(pk=pk,user=request.user)
        invoicePrds = OutStatePurchase.objects.filter(outstateInv=invoiceDetail.get())
        invPrds = invoicePrds.values()
        total_cost,total_igst = 0,0

        for i in invoicePrds:
            total_cost += i.total_price
            total_igst += i.gst_price

        context = {
            "invoiceDetail":invoiceDetail.values(),
            "invoicePrds":invPrds,
            "total_cost": total_cost,
            "total_igst": total_igst,
        }
            
        return Response(context,status=status.HTTP_200_OK)


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
        newPrdsData = request.data['newPrds']
        prdsData  = request.data['prds']

        sup = supplier.objects.filter(id=supplier_id,user_linked=request.user).get()
        if sup:
            print(prdsData)
            print(newPrdsData)
            print(request.data['bill_type'])
            try:
                if request.data['bill_type'] == "outstate":
                    purchase = AllOutStatePurchase(
                        user = request.user,
                        date = inv_date,
                        supplier = sup,
                        invNumber = inv_number,
                        total_amount = grand_total
                    )

                    purchase.save()

                    for i in prdsData:

                        prd = product.objects.filter(
                            user_linked = request.user,
                            product_name = i[0]
                        ).get()

                        prd.product_quantity = prd.product_quantity + int(i[1])
                        prd.product_price = float(i[2]) + ((float(i[2]) * int(i[3])) / 100)

                        prd.save()

                        invPrd = OutStatePurchase(
                            outstateInv = purchase,
                            product = prd.product_name,
                            product_price = float(i[2]),
                            product_gst = str(i[3]),
                            quantity = int(i[1]),
                            total = float(i[4])

                        )

                        invPrd.save()

                    for i in newPrdsData:

                        prd = product(
                            user_linked = request.user,
                            product_name = i[0],
                            product_description = i[5],
                            product_quantity = int(i[1]),
                            product_type = i[6],
                            product_weight_category = i[7],
                            product_weight_per_quantity = int(i[8]),
                            product_price = float(i[2]) + ((float(i[2]) * int(i[3])) / 100)
                        )

                        prd.save()

                        invPrd = OutStatePurchase(
                            outstateInv = purchase,
                            product = prd.product_name,
                            product_price = float(i[2]),
                            product_gst = str(i[3]),
                            quantity = int(i[1]),
                            total = float(i[4])

                        )

                        invPrd.save()

                elif request.data["bill_type"] == "instate":
                    
                    purchase = AllinStatePurchase(
                        user = request.user,
                        date = inv_date,
                        supplier = sup,
                        invNumber = inv_number,
                        total_amount = grand_total
                    )

                    purchase.save()

                    for i in prdsData:

                        prd = product.objects.filter(
                            user_linked = request.user,
                            product_name = i[0]
                        ).get()

                        print(prd)
                        prd.product_quantity = prd.product_quantity + int(i[1])
                        prd.product_price = float(i[2]) + ((float(i[2]) * int(i[3])) / 100) + ((float(i[2]) * int(i[4])) / 100)
                        
                        print(prd)
                        prd.save()
                        print(prd)

                        invPrd = inStatePurchase(
                            instateInv = purchase,
                            product = i[0],
                            product_price = float(i[2]),
                            product_sgst = str(i[3]),
                            product_cgst = str(i[4]),
                            quantity = int(i[1]),
                            total = float(i[5])

                        )
                        print("Instate ")
                        invPrd.save()

                    for i in newPrdsData:

                        prd = product(
                            user_linked = request.user,
                            product_name = i[0],
                            product_description = i[6],
                            product_quantity = int(i[1]),
                            product_type = i[7],
                            product_weight_category = i[8],
                            product_weight_per_quantity = int(i[9]),
                            product_price = float(i[2]) + ((float(i[2]) * int(i[3])) / 100) + ((float(i[2]) * int(i[4])) / 100)
                        )

                        prd.save()

                        invPrd = inStatePurchase(
                            instateInv = purchase,
                            product = i[0],
                            product_price = float(i[2]),
                            product_sgst = str(i[3]),
                            product_cgst = str(i[4]),
                            quantity = int(i[1]),
                            total = float(i[5])

                        )
                        print("Instate ")
                        invPrd.save()
                print("all good")
                return Response({'message':'all good'},status=status.HTTP_200_OK)
                    
            except Exception as e:
                return Response({'error':e},status=status.HTTP_400_BAD_REQUEST)

        else:
            return Response({'Bad Request':'Supplier Not Found'},status=status.HTTP_400_BAD_REQUEST)