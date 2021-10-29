from rest_framework import generics,permissions,viewsets
from rest_framework.response import Response
from .serializers import *


class productAPI(viewsets.ModelViewSet):

    serializer_class = productSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.product.all()

    def perform_create(self, serializer):
        serializer.save(user_linked=self.request.user)