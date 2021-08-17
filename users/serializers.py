from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *
from django.contrib.auth import authenticate


class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','email')


# register serializer

class registerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','email','password')
        extra_kwargs = {'password':{'write_only':True}}


    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],validated_data['email'],validated_data['password'])
        return  user

# login
class loginSerilaizer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
            
        raise serializers.ValidationError("Incorrect Credentials")

# hotel detail seriallizer 
class hotel_detailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel_detail
        fields = '__all__'