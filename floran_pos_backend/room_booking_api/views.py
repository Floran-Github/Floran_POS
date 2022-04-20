from rest_framework import permissions,status,viewsets
from .models import *
from .serializers import *
from rest_framework.response import Response
from datetime import datetime as dt
from django.utils import timezone


# Create your views here.
class room(viewsets.ModelViewSet):

    serializer_class = roomSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

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
        return Booking.objects.all()

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