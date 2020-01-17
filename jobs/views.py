from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from .serializers import JobSerializer


class Jobs(ViewSet):
    """ jobs list endpoint
    """
    serializer_class = JobSerializer

    def get(self, request):
        serializer = self.serializer_class(
            self.serializer_class.Meta.model.objects.filter(contractor=request.user)
        )
        return Response(serializer.data, status=200)

    def create(self, request):
        serializer = self.serializer_class(
            data=self.request.data
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(status=201)