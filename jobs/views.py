from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from .serializers import (
    JobSerializer,
    ApplicationSerializer
)


class Jobs(ViewSet):
    """ jobs list endpoint
    """
    serializer_class = JobSerializer
    def get(self, request):
        serializer = self.serializer_class(
            self.serializer_class.Meta.model.objects.all(),
            many=True
        )
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
