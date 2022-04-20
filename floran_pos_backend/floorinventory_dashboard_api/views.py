import calendar
from restaurant_inventory_api.models import *
from rest_framework.views import APIView
from rest_framework import permissions,status
from rest_framework.response import Response
from product_api.models import product
from datetime import date as dt
class Dashboard_API(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self,request,format=None):
        
        invtOrder = InventoryOrder.objects.filter(user_linked=request.user)

        total_order = invtOrder.count()
        pending = invtOrder.filter(approved=False).count()
        approve = invtOrder.filter(approved=True).count()

        if invtOrder:
            startYear = invtOrder.order_by('issued_on')[0].issued_on.year
            startMonth = invtOrder.order_by('issued_on')[0].issued_on.month
        else:
            startYear = dt.today().year
            startMonth = dt.today().month
            startDay = dt.today().day
            dayList = [i for i in range(
                startDay, calendar.monthrange(dt.today().year, dt.today().month)[1]+1)]
        
        currentYear = dt.today().year

        if startYear != currentYear:
            dayList = [i for i in range(
            1, calendar.monthrange(dt.today().year, dt.today().month)[1]+1)]
            startDay = 1
        elif invtOrder:
            if startMonth ==  dt.today().month:
                startDay = invtOrder.order_by('issued_on')[0].issued_on.day
            else:
                startDay = 1
                
            dayList = [i for i in range(
                startDay, calendar.monthrange(dt.today().year, dt.today().month)[1]+1)]

        graph_data = [] 
        temp = []
        temp2 = []
        for i in range(startDay, dt.today().day + 1):
            current_day_order = invtOrder.filter(issued_on__year=dt.today().year, issued_on__month=dt.today().month,issued_on__day=i)
            temp.append(current_day_order.filter(approved=False).count())
            temp2.append(current_day_order.filter(approved=True).count())
        
        graph_data.append(temp)
        graph_data.append(temp2)
        
        current_month_orders = invtOrder.filter(issued_on__year=dt.today().year, issued_on__month=dt.today().month)

        newPrd = []
        regular = []

        for i in current_month_orders:
            invtItem = InventoryOrderItems.objects.filter(order=i)
            for j in invtItem:
              
                if not regular.__contains__(j.product.product_name):
                    regular.append(j.product.product_name)

        for i in current_month_orders:
            invtItem = InventoryOrderNewItems.objects.filter(order=i)
            for j in invtItem:
                if not newPrd.__contains__(invtItem.filter(pk=j.pk).values()[0]):
                    newPrd.append(invtItem.filter(pk=j.pk).values()[0])


        return Response({
            "total_order":total_order,
            "pending":pending,
            "approve":approve,
            "dayList":dayList,
            "graph_data":graph_data,
            "newPrd":newPrd,
            "regular":regular,
        })


        








