from rest_framework import serializers
from .models import *

class roomTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomType
        fields = '__all__'

class roomSerializer(serializers.ModelSerializer):
    room_type = roomTypeSerializer()
    class Meta:
        model = Room
        fields = ('id','room_number','number_of_person','smoking','room_rate','user_linked','room_type')

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