from django.db.models import fields
from rest_framework import serializers
from .models import *

class supplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = supplier
        fields = '__all__'