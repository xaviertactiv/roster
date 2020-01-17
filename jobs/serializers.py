from rest_framework import serializers
from users.serializers import BaseUserSerializer

from .models import Job, Category, Tag


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'name')


class JobSerializer(serializers.ModelSerializer):
    """ job serializer
    """
    contractor = BaseUserSerializer(read_only=True)
    user_hired = BaseUserSerializer(read_only=True)
    categories = CategorySerializer(required=False, many=True)
    tags = TagSerializer(required=False, many=True)

    class Meta:
        model = Job
        fields = (
            'id',
            'title',
            'contractor',
            'description',
            'categories',
            'tags',
            'date_created',
            'date_updated',
            'user_hired',
        )

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user', None)
        return super(JobSerializer, self).__init__(*args, **kwargs)

    def create(self, data):
        return self.Meta.model.objects.create(
            contractor=self.user,
            **data,
        )
        