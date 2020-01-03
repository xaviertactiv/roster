from rest_framework.serializers import ModelSerializer
from .models import WorkSpace


class WorkSpaceSerializer(ModelSerializer):
    """ workspace serializer
    """
    class Meta:
        model = WorkSpace
        fields = ('user', 'name', 'date_created', 'date_updated')