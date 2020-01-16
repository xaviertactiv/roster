from rest_framework.response import Response
from rest_framework.viewsets import ViewSet


class Jobs(ViewSet):
    """ jobs list endpoint
    """
    def get(self, request):
        serializer = self.serializer_class(
            self.serializer_class.Meta.model.objects.filter(contractor=request.user)
        )
        return Response(serializer.data, status=200)