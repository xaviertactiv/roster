from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework.generics import GenericAPIView
from rest_framework.filters import SearchFilter, OrderingFilter

from .serializers import (
    JobSerializer,
    ApplicationSerializer,
    CategorySerializer
)


class Jobs(ViewSet, GenericAPIView):
    """ jobs list endpoint
    """
    serializer_class = JobSerializer
    queryset = ''
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ['title']

    def get(self, request):
        self.queryset = self.filter_queryset(self.serializer_class.Meta.model.objects.order_by('-date_created'))  
        page = self.paginate_queryset(self.queryset)
        if page is not None:
            serializer = self.serializer_class(page, many=True)
            return self.get_paginated_response(serializer.data)
        
        serializer = self.serializer_class(self.queryset, many=True)
        return Response(serializer.data, status=200)

    def retrieve(self, request, pk=None):
        serializer = self.serializer_class(
            get_object_or_404(self.serializer_class.Meta.model, pk=pk)
        )
        return Response(serializer.data, status=200)

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data,
            user=request.user
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(status=201)


class Applications(ViewSet):
    """ jobs application endpoint
    """
    serializer_class = ApplicationSerializer
    def get(self, request):
        serializer = self.serializer_class(
            self.serializer_class.Meta.model.objects.all(),
            many=True
        )
        return Response(serializer.data, status=200)

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data,
            user=request.user
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=201)

class Categories(ViewSet):
    """ jobs categories endpoint
    """
    serializer_class = CategorySerializer
    def get(self, request):
        serializer = self.serializer_class(
            self.serializer_class.Meta.model.objects.all(),
            many=True
        )
        return Response(serializer.data, status=200)

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=201)
