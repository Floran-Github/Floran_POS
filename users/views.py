from .serializers import *
from rest_framework import generics, permissions,viewsets
from rest_framework.response import Response
from knox.models import AuthToken

# registeration API

class RegisterAPI(generics.GenericAPIView):
    serializer_class =  registerSerializer

    def post(self,request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({
            "user": userSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]

        })



#login api
class LoginAPI(generics.GenericAPIView):
    serializer_class = loginSerilaizer

    def post(self,request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        user_profile = Hotel_detail.objects.filter(user_linked=user.id).values()
        if user_profile:
            profileExists = True
        else:
            profileExists = False
        return Response({
            "user": userSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1],
            "user_profile": user_profile,
            "profileExists":profileExists

        })
    

# get user api
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = userSerializer

    def get_object(self):
        return self.request.user


#hotel_detail api

class hotelDetailAPI(viewsets.ModelViewSet):
    serializer_class = hotel_detailSerializer
    permission_classes = [
        permissions.IsAuthenticated
        # permissions.AllowAny
    ]
    queryset = Hotel_detail.objects.all()

    def get_queryset(self):
        return super(hotelDetailAPI, self).get_queryset().filter(user_linked=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user_linked=self.request.user)

