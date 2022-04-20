from rest_framework import serializers
from .models import *

class roomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'

class roomAvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomAvailability
        fields = '__all__'

class customerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerDetail
        fields = '__all__'

class bookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'