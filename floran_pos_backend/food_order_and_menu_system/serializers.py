from dataclasses import field
from rest_framework import serializers
from .models import *

class comboSerializer(serializers.ModelSerializer):
    class Meta:
        model = Combo
        fields = '__all__'
        