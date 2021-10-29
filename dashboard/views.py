from rest_framework.views import APIView
from rest_framework import permissions,status
from rest_framework.response import Response
from purchases_api.models import *
from product_api.models import product as productModel
from supplier_api.models import supplier
from datetime import datetime as dt
import calendar


# Create your views here.
class dashboard(APIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self,request,format=None):
        
        # find prev and curr month total purchase amount
        allInStatePurchase = AllinStatePurchase.objects.filter(user=request.user)
        allOutStatePurchase = AllOutStatePurchase.objects.filter(user=request.user)
        current_month_purchase,previous_month_purchase = 0,0
        most_purchased_product = []
        months = ['zero','January','February','March','April','May','June','July','August','September','October','November','December']


        current_month_out_state_purchases = allOutStatePurchase.filter(date__year=dt.today().year,date__month = dt.now().month)
        current_month_in_state_purchases = allInStatePurchase.filter(date__year=dt.today().year,date__month = dt.now().month)
        previous_month_in_purchases = allOutStatePurchase.filter(date__year=dt.today().year,date__month = dt.now().month.__sub__(1))
        previous_month_out_purchases = allInStatePurchase.filter(date__year=dt.today().year,date__month = dt.now().month.__sub__(1))
        
        for purchase in previous_month_in_purchases.values():
            previous_month_purchase+=purchase["total_amount"]

        for purchase in previous_month_out_purchases.values():
            previous_month_purchase+=purchase["total_amount"]
        
        # Most Purchased Product (Current Month)
        for current_month_in_state_purchase in current_month_in_state_purchases:
            current_month_purchase+=current_month_in_state_purchase.total_amount
            in_state_purchase = inStatePurchase.objects.filter(instateInv = current_month_in_state_purchase).first()
            product = productModel.objects.filter(product_name = in_state_purchase.product).values().first()
            most_purchased_product.append(product)

        for current_month_out_state_purchase in current_month_out_state_purchases:
            current_month_purchase+=current_month_out_state_purchase.total_amount
            out_state_purchase = OutStatePurchase.objects.filter(outstateInv = current_month_out_state_purchase).first()
            product = productModel.objects.filter(product_name = out_state_purchase.product).values().first()
            if not most_purchased_product.__contains__(product):
                most_purchased_product.append(product)
        
        most_purchased_product.sort(key=lambda x:x['product_quantity'],reverse=True)


        # purchase data for graph -> year-wise, month-wise, day-wise
        if allInStatePurchase and allOutStatePurchase:
            start_year = min(allInStatePurchase.order_by('date').first().date.year,allOutStatePurchase.order_by('date').first().date.year)
        else:
            start_year = dt.now().year
        current_year = dt.today().year

        if start_year != current_year:
            month_list = months[1:]
            year_list = list(range(start_year,current_year+1))
            day_list = list(range(1, calendar.monthrange(dt.today().year, dt.today().month)[1]+1))
            start_month = 1
            start_day = 1
        else:
            if allInStatePurchase and allOutStatePurchase:
                start_month = min(allInStatePurchase.order_by('date').first().date.month,allOutStatePurchase.order_by('date').first().date.month)
            else:
                start_month = dt.today().month
            month_list = months[start_month:]
            year_list = [start_year]
            if start_month ==  dt.today().month and allInStatePurchase and allOutStatePurchase:
                start_day = min(allInStatePurchase.order_by('date').first().date.day, allOutStatePurchase.order_by('date').first().date.day)
            else:
                start_day = 1
            day_list = list(range(start_day, calendar.monthrange(dt.today().year, dt.today().month)[1]+1))

        years_data = []
        months_data = []
        current_month_data = []

        # for year data
        for year in year_list:
            years_data.append(allInStatePurchase.filter(date__year = year).count())
            years_data.append(allOutStatePurchase.filter(date__year = year).count())
        # for month data
        for month in range(start_month, dt.today().month+1):
            months_data.append(allInStatePurchase.filter(date__year = dt.today().year, date__month = month).count())
            months_data.append(allOutStatePurchase.filter(date__year = dt.today().year, date__month = month).count())
        # for month data
        for day in day_list:
            current_month_data.append(allInStatePurchase.filter(date__year = dt.today().year, date__month = dt.today().month, date__day = day).count())
            current_month_data.append(allOutStatePurchase.filter(date__year = dt.today().year, date__month = dt.today().month, date__day = day).count())



        # Supplier Overall Purchase Info (Current Month)
        suppliers_purchase_info = []
        suppliers = supplier.objects.filter(user_linked = request.user)
        for s in suppliers:
            total_amount = 0
            in_state_purchases = allInStatePurchase.filter(supplier=s,date__year = dt.now().year,date__month = dt.now().month)
            for purchase in in_state_purchases:
                total_amount += purchase.total_amount
            out_state_purchases = allOutStatePurchase.filter(supplier=s,date__year = dt.now().year,date__month = dt.now().month)
            for purchase in out_state_purchases:
                total_amount += purchase.total_amount
            suppliers_purchase_info.append({"supplier_name":s.name,"no_of_purchase":len(in_state_purchases)+len(out_state_purchases),"total_amount" : total_amount})

        return Response({"current_month_purchase":current_month_purchase,
            "previous_month_purchase":previous_month_purchase,
            "most_purchased_product":most_purchased_product,
            "year_list":year_list,
            "month_list":month_list,
            "day_list":day_list,
            "years_data":years_data,
            "months_data":months_data,
            "current_month_data":current_month_data,
            "suppliers_purchase_info":suppliers_purchase_info
            },status=status.HTTP_200_OK)