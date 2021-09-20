from django.db.models import fields
from rest_framework import serializers
from .models import *

class productSerializer(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = '__all__'