from rest_framework import serializers
from .models import FloorInventory

class floorInventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FloorInventory
        fields = '__all__'