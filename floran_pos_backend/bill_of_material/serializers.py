from dataclasses import field
from rest_framework import serializers
from .models import *

class billofmaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill_of_material
        fields = '__all__'