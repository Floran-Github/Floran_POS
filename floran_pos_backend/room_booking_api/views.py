from re import T
from rest_framework import permissions,status,viewsets
from .models import *
from .serializers import *
from rest_framework.response import Response
from datetime import datetime as dt
from datetime import date as dd
from django.utils import timezone
import calendar


class roomTypeAPI(viewsets.ModelViewSet):
    serializer_class = roomTypeSerializer
    permission_classes = [permissions.IsAuthenticated]
# Create your views here.
class room(viewsets.ModelViewSet):

    serializer_class = roomSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return RoomType.objects.filter(user_linked=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user_linked=self.request.user)

    # get all room for current user
    def get_queryset(self):
        return Room.objects.filter(user_linked=self.request.user)
    
    # create a room
    def perform_create(self, serializer):
        serializer.save(user_linked=self.request.user)

    # retrieve room by id
    def retrieve(self,request,**params):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    # update
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def perform_update(self, serializer):
        serializer.save()

    # delete
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self,instance):
        instance.delete()

    
class roomAvailability(viewsets.ModelViewSet):

    serializer_class = roomAvailabilitySerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    # get all roomAvailability for current user
    def get_queryset(self):
        # Fetching room availability from current day
        # return RoomAvailability.objects.filter(day_date__gte=dt.now(tz=timezone.utc))
        return RoomAvailability.objects.all()
    
    # create a roomAvailability
    def perform_create(self, serializer):
        serializer.save()

    # update
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def perform_update(self, serializer):
        serializer.save()

    # delete
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self,instance):
        instance.delete()



class customerDetail(viewsets.ModelViewSet):

    serializer_class = customerDetailSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    # get all CustomerDetail for current user
    def get_queryset(self):
        return CustomerDetail.objects.all()

    # retrieve CustomerDetail by id
    def retrieve(self,request,**params):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    # create a CustomerDetail
    def perform_create(self, serializer):
        serializer.save()

    # update
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def perform_update(self, serializer):
        serializer.save()

    # delete
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self,instance):
        instance.delete()


class booking(viewsets.ModelViewSet):

    serializer_class = bookingSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    # get all CustomerDetail for current user
    def get_queryset(self):
        roomData =  Room.objects.filter(user_linked=self.request.user)
        return Booking.objects.filter(room_number__id__in=roomData)
    
    def list(self, request, *args, **kwargs):
        data =  self.get_queryset()

        #  Dates
        todayDate = dt.today()
        monthDays = calendar.monthrange(todayDate.year,todayDate.month)[1]
        fd = dd(todayDate.year,todayDate.month,monthDays)

        #  Main Filtered Data
        dateto_data = data.filter(date_to__range=(todayDate,fd)).order_by('date_from')
        datefrom_data = data.filter(date_from__range=(todayDate,fd)).order_by('room_number')
        
        #  First date
        firstDate = dateto_data.first().date_from.day
        
        #  Dates list
        dateList = list(range(firstDate,monthDays+1))

        fdata = {}
        idList = []
        customerName_and_bookingId_list = []
        for i in dateto_data:
            idList.append(i.pk)
            tp = i.room_number.room_number
            start = i.date_from.day - firstDate
            end = i.date_to.day - firstDate
            customerName_and_bookingId_list.append([i.customer_id.name,i.booking_number])

            if tp not in fdata:
                fdata[tp] = [0 for i in range(len(dateList))]

            if fdata[tp][start] == 0:
                fdata[tp][start] = 2
            elif fdata[tp][start] == 1:
                fdata[tp][start] = 3

            for j in range(start+1,end+1):
                fdata[tp][j] = 1
                
        print(customerName_and_bookingId_list)
        print(dateList)
        print(fdata)

        for i in datefrom_data.exclude(id__in=idList):
            idList.append(i.pk)
            tp = i.room_number.room_number
            start = i.date_from.day - firstDate
            end = i.date_to.day - firstDate
            customerName_and_bookingId_list.append([i.customer_id.name,i.booking_number])

            if tp not in fdata:
                fdata[tp] = [0 for i in range(len(dateList))]

            if fdata[tp][start] == 0:
                fdata[tp][start] = 2
            elif fdata[tp][start] == 1:
                fdata[tp][start] = 3

            for j in range(start+1,end+1):
                fdata[tp][j] = 1

            
        context = {
            'date':dateList,
            'bookingDetail':customerName_and_bookingId_list,
            'data':[fdata]
        }
        return Response(context,status=status.HTTP_200_OK)

    # retrieve CustomerDetail by id
    def retrieve(self,request,**params):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    # create a CustomerDetail
    def perform_create(self, serializer):
        serializer.save()

    # update
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def perform_update(self, serializer):
        serializer.save()

    # delete
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self,instance):
        instance.delete()